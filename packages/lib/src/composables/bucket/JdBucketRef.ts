import { Subject, Observable } from 'rxjs';
import {
  BucketEventType,
  BucketDragStart,
  BucketEvent,
  BucketDragEnd,
  IBucketContainerRef,
  IBucketRef,
  BucketDragChoose,
  BucketRangeSelectionEvent
} from './types';

/**
 * 버킷 최상위 관리
 * @export
 * @class JdBucketRef
 * @implements {IBucketRef}
 */
export class JdBucketRef implements IBucketRef {
  constructor() {}
  protected containerRefMap: Map<string, IBucketContainerRef> = new Map();
  protected subjectDragger: Subject<BucketEvent> = new Subject();
  protected subjectRangeSelection: Subject<BucketRangeSelectionEvent> = new Subject();
  protected draggingContainerRef: IBucketContainerRef | null = null;
  protected fallbackIndicate: boolean = false;

  /**
   * dnd 폴백을 사용하는지 여부
   * @readonly
   * @type {boolean}
   */
  get isFallbackIndicate(): boolean {
    return this.fallbackIndicate;
  }

  /**
   * dnd 폴백을 사용하는지 여부 지정.
   * 폴백을 사용하지 않는 다면 브라우저에서 기본으로 지원하는 드래그(중인 이미지) UI 를 사용하고,
   * 폴백을 사용한다면 DOM 을 이용하는데, draggable 에서 사용하는 폴백 DOM 을 invisible 처리하고,
   * draggable 대신 드래그 중인 UI 를 표시한다.
   * @param {boolean} is
   */
  setFallbackIndicate(is: boolean): void {
    this.fallbackIndicate = !!is;
  }

  /**
   * 옵저버: 드래그 상태
   * @returns {Observable<BucketEvent>}
   */
  observeDragger(): Observable<BucketEvent> {
    return this.subjectDragger.asObservable();
  }

  /**
   * 옵저버: 영역 선택기 상태
   * @returns {Observable<BucketRangeSelectionEvent>}
   */
  observeRangeSelection(): Observable<BucketRangeSelectionEvent> {
    return this.subjectRangeSelection.asObservable();
  }

  /**
   * 알림: 드래그 아이템 선택
   * @param {BucketDragChoose} params
   */
  dispatchDragChoose(params: BucketDragChoose): void {
    const { fromContainer, sortableEvent } = params;
    this.subjectDragger.next({
      type: BucketEventType.DRAG_CHOOSE,
      fromContainer,
      sortableEvent
    });
  }

  /**
   * 알림: 드래그 아이템 선택 해제
   * @param {BucketDragChoose} params
   */
  dispatchDragUnchoose(params: BucketDragChoose): void {
    const { sortableEvent } = params;
    this.subjectDragger.next({
      type: BucketEventType.DRAG_UNCHOOSE,
      sortableEvent
    });
  }

  /**
   * 알림: 드래그 시작
   * @param {BucketDragStart} params
   */
  dispatchDragStart(params: BucketDragStart): void {
    const { fromContainer, sortableEvent } = params;
    this.draggingContainerRef = fromContainer;
    this.subjectDragger.next({
      type: BucketEventType.DRAG_START,
      sortableEvent,
      fromContainer
    });
  }

  /**
   * 알림: 드래그 종료
   * @param {BucketDragEnd} params
   */
  dispatchDragEnd(params: BucketDragEnd): void {
    const { toContainer, sortableEvent } = params;
    const fromContainer = this.draggingContainerRef;
    this.subjectDragger.next({
      type: BucketEventType.DRAG_END,
      sortableEvent,
      fromContainer,
      toContainer
    });
    toContainer.dispatchDropped({
      sortableEvent,
      fromContainer: this.draggingContainerRef,
      toContainer: toContainer
    });
    this.draggingContainerRef = null;
  }

  /**
   * 알림: 영역 선택기 시작
   * @param {BucketRangeSelectionEvent} params
   */
  dispatchRangeSelectionStart(params: BucketRangeSelectionEvent): void {
    this.subjectRangeSelection.next(params);
  }

  /**
   * 버킷 컨테이너 등록
   * @param {IBucketContainerRef} containerRef
   */
  joinContainerRef(containerRef: IBucketContainerRef): void {
    this.containerRefMap.set(containerRef.getUid(), containerRef);
  }

  /**
   * 버킷 컨테이너 등록 해제
   * @param {IBucketContainerRef} containerRef
   */
  unjoinContainerRef(containerRef: IBucketContainerRef): void {
    this.containerRefMap.delete(containerRef.getUid());
  }

  /**
   * 해당 element(DOM) 가 속한 버킷 컨테이너 찾기
   * @param {Element} element
   * @returns {IBucketContainerRef}
   */
  findContainerRefByElement(element: Element): IBucketContainerRef {
    const finded = Array.from(this.containerRefMap.values()).find((ref: IBucketContainerRef) => {
      return ref.elContainer === element;
    }) as IBucketContainerRef;
    return finded;
  }
}
