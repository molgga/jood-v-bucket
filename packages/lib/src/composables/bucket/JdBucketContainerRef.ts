import { Subject, Subscription, Observable } from 'rxjs';
import {
  BucketDragDrop,
  IBucketContainerRef,
  IBucketItemRef,
  SelectionBoundary,
  BucketCloneModel,
  BucketDropBeforeParams,
  BucketDOMRectBound,
  BucketGroupNameType
} from './types';
import { createUid, isIntersect } from '../../utils';

/**
 *
 */
type BucketDropBeforeCallback = (params: BucketDropBeforeParams) => any;
type BucketDropBeforeEmitter = (params: { changeList: any[] }) => any;

/**
 * 한개의 버킷 컨테이너.
 * - 동일 그룹명끼지 모델 전송이 가능하다.
 * - sender 역할의 컨테이너는 receiver 로 전달만 가능하고, 자체 소팅은 지원하지 않는다.
 * - receiver 역할의 컨테이너는 sender 로 부터 전달을 받을 수 있고, 자체 소팅을 지원한다.
 *
 * @export
 * @class JdBucketContainerRef
 * @implements {IBucketContainerRef}
 */
export class JdBucketContainerRef<TM = any> implements IBucketContainerRef<TM> {
  constructor() {
    this.uid = createUid();
  }

  protected uid: string = '';
  protected itemRefMap: Map<string, IBucketItemRef> = new Map();
  protected bucketList: TM[] = [];
  protected bucketGroupName: BucketGroupNameType = '';
  protected bucketMax: number = -1;
  protected bucketIsReceiver: boolean = false;
  protected bucketIsMultiple: boolean = false;
  protected elDragContainer: Element | null = null;
  protected hookDropBefore: BucketDropBeforeCallback | null = null;
  protected dragItemRefs: IBucketItemRef[] = [];
  protected subjectDropped: Subject<BucketDragDrop> = new Subject();
  protected subjectChangeState: Subject<IBucketContainerRef> = new Subject();
  protected lazyChangeStateTimer: any | null = null;
  protected lazyChangeStateDelay: number = 0;

  CLONE_FLAG_KEY = '__cloneFlag';
  CLONE_FLAG_VALUE = 'CLONE_FLAG_VALUE';

  /**
   * 그룹명
   * @readonly
   * @type {BucketGroupNameType}
   */
  get groupName(): BucketGroupNameType {
    return this.bucketGroupName;
  }

  /**
   * 컨테이너에 담을 수 있는 최대 수
   * @readonly
   * @type {number}
   */
  get max(): number {
    return this.bucketMax;
  }

  /**
   * 해당 컨테이너가 receiver 인지 여부.
   * @readonly
   * @type {boolean}
   */
  get isReceiver(): boolean {
    return this.bucketIsReceiver;
  }

  /**
   * 멀티 dnd 지원 여부.
   * @readonly
   * @type {boolean}
   */
  get isMultiple(): boolean {
    return this.bucketIsMultiple;
  }

  /**
   * 현재 컨테이너가 포함한 모델 갯수가 최대 갯수에 도달했는지 여부.
   * @readonly
   * @type {boolean}
   */
  get isMaximum(): boolean {
    return this.bucketMax === -1 ? false : this.bucketMax <= this.bucketList.length;
  }

  /**
   * draggable DOM
   * @readonly
   * @type {(Element | null)}
   */
  get elContainer(): Element | null {
    return this.elDragContainer;
  }

  /**
   * 지정한 hookDropBefore 함수.
   * @readonly
   * @type {(BucketDropBeforeCallback | null)}
   */
  get onDropBefore(): BucketDropBeforeCallback | null {
    return this.hookDropBefore;
  }

  /**
   * 그룹명 지정
   * @param {BucketGroupNameType} groupName
   */
  setGroupName(groupName: BucketGroupNameType) {
    this.bucketGroupName = groupName;
    this.dispatchChangeState();
  }

  /**
   * receiver 인지 지정
   * @param {boolean} is
   */
  setReceiver(is: boolean) {
    this.bucketIsReceiver = !!is;
    this.dispatchChangeState();
  }

  /**
   * 멀티플 지원여부 지정
   * @param {boolean} is
   */
  setMultiple(is: boolean) {
    this.bucketIsMultiple = !!is;
    this.dispatchChangeState();
  }

  /**
   * 버킷에 담을 수 있는 최대 수 지정
   * @param {number} [max=-1]
   */
  setMax(max: number = -1) {
    if (isNaN(max)) {
      this.bucketMax = -1;
    } else {
      this.bucketMax = Math.max(-1, max);
    }
    this.dispatchChangeState();
  }

  /**
   * 모델 목록
   * @param {*} list
   */
  setList(list: any): void {
    this.bucketList = list;
    this.dispatchChangeState();
  }

  /**
   * draggable DOM 참조 지정
   * @param {Element} element
   */
  setElContainer(element: Element): void {
    this.elDragContainer = element;
  }

  /**
   * 컨테이너 상태 변경 알림을 delay 만큼 느슨하게 하도록 지정.
   * @param {number} delay
   */
  setLazyStateChangeDelay(delay: number): void {
    this.lazyChangeStateDelay = isNaN(delay) ? 0 : delay;
  }

  /**
   * sender 컨테이너에서 receiver 컨테이너로 드랍을 하고,
   * list 를 merge 하기 직전 실행될 (validate, filter ... 를 직접 할) 함수 지정.
   * @param {BucketDropBeforeCallback} handle
   */
  setDropBefore(handle: BucketDropBeforeCallback): void {
    this.hookDropBefore = handle;
  }

  /**
   * 해당 컨테이너의 uid 반환
   * @returns {string}
   */
  getUid(): string {
    return this.uid;
  }

  /**
   * 가지고 있는 모델 목록 반환
   */
  getList(): TM[] {
    return this.bucketList;
  }

  /**
   * 옵저버: 컨테이너 상태 변경
   * @returns {Observable<IBucketContainerRef>}
   */
  observeChangeState(): Observable<IBucketContainerRef> {
    return this.subjectChangeState.asObservable();
  }

  /**
   * 옵저버: 컨테이너에 드랍
   * @returns {Observable<BucketDragDrop>}
   */
  observeDropped(): Observable<BucketDragDrop> {
    return this.subjectDropped.asObservable();
  }

  /**
   * 알림: 컨테이너 상태 변경
   * setLazyStateChangeDelay 가 지정되어 있다면 lazy 하게 알림, 그렇지 않다면 바로 알림.
   */
  dispatchChangeState(): void {
    if (this.lazyChangeStateTimer) {
      clearTimeout(this.lazyChangeStateTimer);
      this.lazyChangeStateTimer = null;
    }
    if (0 < this.lazyChangeStateDelay) {
      this.lazyChangeStateTimer = setTimeout(() => {
        this.subjectChangeState.next(this);
      }, this.lazyChangeStateDelay);
    } else {
      this.subjectChangeState.next(this);
    }
  }

  /**
   * 알림: 컨테이너에 드랍
   * @param {BucketDragDrop} params
   */
  dispatchDropped(params: BucketDragDrop): void {
    const { toContainer, fromContainer } = params;
    if (toContainer && toContainer !== fromContainer && toContainer.isReceiver) {
      this.subjectDropped.next(params);
    }
  }

  /**
   * 드래깅 버킷 아이템 추가.
   * (드래깅 - 드래그 아이템으로 선택, 드래그 중인 것)
   * @param {IBucketItemRef} itemRef
   */
  addDragItem(itemRef: IBucketItemRef): void {
    if (this.findDragItemIndex(itemRef) === -1) {
      this.dragItemRefs.push(itemRef);
    }
    itemRef.setSelected(true);
    this.dispatchChangeState();
  }

  /**
   * 지정된 boundary 영역에 hit 되는 버킷 아이템을 찾아서 추가
   * @param {SelectionBoundary} boundary
   */
  addDragItemToBoundary(boundary: SelectionBoundary) {
    const itemRefs = this.itemRefMap;
    const boundX = { start: boundary.x, end: boundary.x + boundary.w };
    const boundY = { start: boundary.y, end: boundary.y + boundary.h };
    Array.from(itemRefs.values()).forEach(itemRef => {
      const itemBound = itemRef.getElBound() as BucketDOMRectBound;
      const itemBoundX = { start: itemBound.x, end: itemBound.x + itemBound.width };
      const itemBoundY = { start: itemBound.y, end: itemBound.y + itemBound.height };
      const isHitX = isIntersect(boundX, itemBoundX);
      const isHitY = isIntersect(boundY, itemBoundY);
      const isHit = isHitX && isHitY;
      if (isHit) {
        this.addDragItem(itemRef);
      } else {
        this.removeDragItem(itemRef);
      }
    });
  }

  /**
   * 드래깅 버킷 아이템 제거
   * @param {IBucketItemRef} itemRef
   */
  removeDragItem(itemRef: IBucketItemRef): void {
    const index = this.findDragItemIndex(itemRef);
    if (index !== -1) {
      this.dragItemRefs.splice(index, 1);
    }
    itemRef.setSelected(false);
    this.dispatchChangeState();
  }

  /**
   * 드래깅 버킷 아이템으로 지정
   * @param {IBucketItemRef} itemRef
   */
  setDragItem(itemRef: IBucketItemRef): void {
    this.dragItemRefs.forEach(itemRef => {
      itemRef.setSelected(false);
    });
    this.dragItemRefs = [itemRef];
    itemRef.setSelected(true);
    this.dispatchChangeState();
  }

  /**
   * 드래깅 버킷 아이템 반환
   * @returns {IBucketItemRef[]}
   */
  getDragItems(): IBucketItemRef[] {
    return this.dragItemRefs;
  }

  /**
   * 드래깅 버킷 아이템 모두 제거
   */
  flushDragItem(): void {
    this.dragItemRefs.forEach(itemRef => {
      itemRef.setSelected(false);
    });
    this.dragItemRefs = [];
    this.dispatchChangeState();
  }

  /**
   * 드래깅으로 등록된 버킷 아이템 중 지정된 itemRef 와 일치하는것 index 반환.
   * @param {IBucketItemRef} itemRef
   * @returns {number}
   */
  findDragItemIndex(itemRef: IBucketItemRef): number {
    return this.dragItemRefs.findIndex(compare => compare === itemRef);
  }

  /**
   * list 중 지정된 itemRef 의 model 과 일치하는것 index 반환.
   * @param {IBucketItemRef} itemRef
   * @returns {number}
   */
  findItemRefIndex(itemRef: IBucketItemRef): number {
    const list = this.getList() || [];
    return list.findIndex(model => model === itemRef.model);
  }

  /**
   * fromContainer 와 그룹명이 같은지 여부.
   * @param {JdBucketContainerRef} fromContainer
   * @returns {boolean}
   */
  isGroupSame(fromContainer: JdBucketContainerRef): boolean {
    if (!fromContainer) return false;
    return this.groupName === fromContainer.groupName;
  }

  /**
   * 해당 컨테이너가 드래깅 중이 아이템을 넣을 수 있느지 여부.
   * fromContainer 의 정보와 해당 컨테이너의 조건에 따라 드랍이 가능한지 여부를 판단함.
   * @param {JdBucketContainerRef} fromContainer
   * @returns {boolean}
   */
  isGroupInsertable(fromContainer: JdBucketContainerRef): boolean {
    if (!fromContainer) return false;
    const is =
      this !== fromContainer &&
      fromContainer.isReceiver !== true &&
      this.isReceiver === true &&
      this.groupName === fromContainer.groupName &&
      this.isMaximum === false;
    return is;
  }

  /**
   * list 의 index 아이템을 제거.
   * @param {number} index
   */
  removeByIndex(index: number): void {
    if (!isNaN(index) && 0 <= index && index < this.bucketList.length) {
      this.bucketList.splice(index, 1);
      this.dispatchChangeState();
    }
  }

  /**
   * list 중 model 을 찾아서 동일한 model 의 아이템을 제거.
   * @param {*} model
   */
  removeByModel(model: any): void {
    const index = this.bucketList.findIndex(compare => compare === model);
    if (index !== -1) {
      this.removeByIndex(index);
    }
  }

  /**
   * element 로 버킷 아이템을 찾아서 반환
   * @param {Element} element
   * @returns {IBucketItemRef}
   */
  findItemRefByElement(element: Element): IBucketItemRef {
    const finded = Array.from(this.itemRefMap.values()).find(ref => {
      return ref.elContainer === element;
    }) as IBucketItemRef;
    return finded;
  }

  /**
   * 버킷 아이템 등록.
   * @param {IBucketItemRef} itemRef
   */
  joinItemRef(itemRef: IBucketItemRef): void {
    this.itemRefMap.set(itemRef.getUid(), itemRef);
  }

  /**
   * 버킷 아이템 등록 해제.
   * @param {IBucketItemRef} itemRef
   */
  unjoinItemRef(itemRef: IBucketItemRef): void {
    this.itemRefMap.delete(itemRef.getUid());
    this.removeDragItem(itemRef);
  }

  /**
   * 등록된 버킷 아이템 맵.
   * @returns {Map<string, IBucketItemRef>}
   */
  getItemRefs(): Map<string, IBucketItemRef> {
    return this.itemRefMap;
  }

  /**
   * draggable clone 시 치환할 모델.
   * draggable 에서 드랍을 하고 모델이 합쳐지기 직전 onClone 이 발생되는데, 이 때 이동될 모델을 치환할 수 있다.
   * onClone 시 버킷쪽에서 멀티플 선택한 모델 목록으로 합쳐버려도 되나,
   * dropBefore 를 통해 직접 값을 filter(예: 중복 id 는 넣지 않음, 어떤 type 은 제외하고 넣음 등) 하는 기능을 지원하려면,
   * onClone 시 플래그 모델로 치환 시키고 onDrop 타이밍에 플래그 모델을 제거,
   * dropBefore 의 유무/응답에 따라 버킷쪽에서 선택된 모델이나, dropBefore 에서 정제된 목록으로 합친다.
   * @returns {BucketCloneModel}
   */
  createCloneModel(): BucketCloneModel {
    return { [this.CLONE_FLAG_KEY]: this.CLONE_FLAG_VALUE };
  }

  /**
   * fromContainer 의 드래깅 중인(드랍한) 아이템을 insertIndex 에 현재 리스트에 합친다.
   * - dropBefore 가 지정된 경우 사용자 응답을 기다리고, 응답이 배열인 경우는 응답한 배열로 합친다.
   *   그렇지 않은 경우 응답값이 true 에 해당하는 경우만 드랍한 아이템으로 합친다.
   *   그 외는 무시하고 합치지 않는다.
   * fnEmitter 콜백의 경우 UI 단에서는 dropBefore 에 따라 선/후행 업데이트를 해야할 수 있어서
   * list 가 변경된 상태를 UI 단에서 알아야하는 경우 콜백을 해준다.
   * @param {number} insertIndex
   * @param {IBucketContainerRef} fromContainer
   * @param {BucketDropBeforeEmitter} [fnEmitter]
   */
  async mergeToDrop(
    insertIndex: number,
    fromContainer: IBucketContainerRef,
    fnEmitter?: BucketDropBeforeEmitter
  ): Promise<void> {
    if (!fromContainer) return;
    const emitter = fnEmitter && typeof fnEmitter === 'function' ? fnEmitter : () => {};
    const interceptDropBefore = this.onDropBefore || null;
    const dropItemRefs = fromContainer.getDragItems() || [];
    const dropList = dropItemRefs.map(item => item.model);
    const mergeList = this.getMergeCurrentList();
    const insertList = this.getMergeInsertList(dropList);
    let finalInsertList = null;
    if (interceptDropBefore) {
      this.setList(mergeList);
      emitter({ changeList: mergeList });
      const interceptResult = await interceptDropBefore({
        fromContainer,
        toContainer: this,
        itemRefs: dropItemRefs
      });
      if (interceptResult) {
        if (interceptResult.constructor === Array) {
          finalInsertList = interceptResult;
        } else {
          finalInsertList = insertList;
        }
      }
    } else {
      finalInsertList = insertList;
    }

    fromContainer.flushDragItem();
    if (finalInsertList !== null) {
      mergeList.splice(insertIndex, 0, ...finalInsertList);
      this.setList(mergeList);
      emitter({ changeList: mergeList });
    }
  }

  /**
   * merge 할 때 현재 가지고 있는 목록을 정제하여 반환.
   * @protected
   * @returns {TM[]}
   */
  protected getMergeCurrentList(): TM[] {
    const changeList = [...this.getList()];
    const clonedIndex = changeList.findIndex((item: any) => {
      return item[this.CLONE_FLAG_KEY] === this.CLONE_FLAG_VALUE;
    });
    if (clonedIndex !== -1) changeList.splice(clonedIndex, 1);
    return changeList;
  }

  /**
   * merge 할 때 합쳐져야할 대상 목록을 정제하여 반환.
   * @protected
   * @param {TM[]} addList
   * @returns {TM[]}
   */
  protected getMergeInsertList(addList: TM[]): TM[] {
    const currentLen = this.getList().length;
    const addLen = addList.length;
    const expectMax = this.max || -1;
    const isOverflow = expectMax !== -1 && expectMax < currentLen + addLen;
    const resultList = isOverflow ? addList.slice(0, expectMax - currentLen + 1) : addList;
    return resultList;
  }

  /**
   * 파기
   */
  destroy(): void {
    try {
      if (this.subjectDropped) {
        this.subjectDropped.unsubscribe();
      }
      // ...
    } catch (err) {
      console.error(err);
    }
  }
}
