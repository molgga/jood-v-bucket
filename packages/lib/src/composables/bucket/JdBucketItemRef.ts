import { Subject, Observable } from 'rxjs';
import { IBucketItemRef } from './types';
import { createUid } from '../../utils';

/**
 * 한개의 버킷 아이템
 * @export
 * @class JdBucketItemRef
 * @implements {IBucketItemRef}
 */
export class JdBucketItemRef<TM = any> implements IBucketItemRef<TM> {
  constructor() {
    this.uid = createUid();
  }

  protected uid: string = '';
  protected elDragContainer: Element | null = null;
  protected dataModel: TM | null = null;
  protected selected: boolean = false;
  protected subjectChangeState: Subject<any> = new Subject();

  /**
   * 해당 아이템에 등록된 모델
   * @readonly
   */
  get model(): TM | null {
    return this.dataModel;
  }

  /**
   * 아이템의 (드래깅)선택 여부
   * @readonly
   */
  get isSelected() {
    return this.selected;
  }

  /**
   * draggable 에서 사용되는 DOM
   * (draggable 의 이벤트 등에서 DOM 을 clone 하거나 target DOM 등 으로 사용됨)
   * @readonly
   * @type {(Element | null)}
   */
  get elContainer(): Element | null {
    return this.elDragContainer;
  }

  /**
   * 해당 아이템과 연결할 모델.
   * @param {TM} model
   */
  setModel(model: TM) {
    this.dataModel = model;
  }

  /**
   * draggable DOM 참조 지정.
   * @param {Element} element
   */
  setElContainer(element: Element) {
    this.elDragContainer = element;
  }

  /**
   * 해당 아이템의 선택(드래깅) 상태 지정.
   * @param {boolean} is
   */
  setSelected(is: boolean) {
    this.selected = !!is;
    this.dispatchChangeState();
  }

  /**
   * 해당 아이템의 uid 반환
   * @returns {string}
   */
  getUid(): string {
    return this.uid;
  }

  /**
   * 해당 아이템의 DOM 의 bound 영역.
   * @returns {(ClientRect | DOMRect | null)}
   */
  getElBound(): ClientRect | DOMRect | null {
    if (!this.elContainer) return null;
    return (this.elContainer as HTMLElement).getBoundingClientRect();
  }

  /**
   * 옵저버: 아이템 상태.
   * @returns {Observable<any>}
   */
  observeChangeState(): Observable<any> {
    return this.subjectChangeState.asObservable();
  }

  /**
   * 알림: 아이템 상태 변경.
   */
  dispatchChangeState(): void {
    this.subjectChangeState.next();
  }

  /**
   * 파기
   *
   */
  destroy() {
    try {
      if (this.subjectChangeState) {
        this.subjectChangeState.unsubscribe();
      }
      // ...
    } catch (err) {
      console.error(err);
    }
  }
}
