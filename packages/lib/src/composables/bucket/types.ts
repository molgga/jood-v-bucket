import { Observable } from 'rxjs';

/**
 * @export
 * @enum {number}
 */
export enum BucketEventType {
  DRAG_CHOOSE = 'DRAG_CHOOSE',
  DRAG_UNCHOOSE = 'DRAG_UNCHOOSE',
  DRAG_START = 'DRAG_START',
  DRAG_END = 'DRAG_END'
}

/**
 * @export
 * @interface BucketDragSelectionState
 */
export interface BucketDragSelectionState {
  visible: boolean;
  count: number;
  style: any;
  itemRefs: IBucketItemRef[];
}

/**
 * @export
 * @interface BucketRangeSelectionState
 */
export interface BucketRangeSelectionState {
  visible: boolean;
  style: any;
}

/**
 * @export
 * @interface IBucketRef
 */
export interface IBucketRef {
  readonly isFallbackIndicate: boolean;
  setFallbackIndicate(is: boolean): void;
  getContainerRefs(): Map<string, IBucketContainerRef>;
  observeDragger(): Observable<BucketEvent>;
  observeRangeSelection(): Observable<BucketRangeSelectionEvent>;
  dispatchDragChoose(params: BucketDragChoose): void;
  dispatchDragUnchoose(params: BucketDragChoose): void;
  dispatchDragStart(params: BucketDragStart): void;
  dispatchDragEnd(params: BucketDragEnd): void;
  dispatchRangeSelectionStart(params: BucketRangeSelectionEvent): void;
  joinContainerRef(containerRef: IBucketContainerRef): void;
  unjoinContainerRef(containerRef: IBucketContainerRef): void;
  findContainerRefByElement(element: Element): IBucketContainerRef;
}

/**
 * @export
 * @interface IBucketContainerRef
 */
export interface IBucketContainerRef<TM = any> {
  readonly groupName: BucketGroupNameType;
  readonly max: number;
  readonly isReceiver: boolean;
  readonly isMultiple: boolean;
  readonly isMaximum: boolean;
  readonly elContainer: Element | null;
  readonly onDropBefore: Function | null;
  setGroupName(groupName: BucketGroupNameType): void;
  setReceiver(is: boolean): void;
  setMultiple(is: boolean): void;
  setMax(max: number): void;
  setList(list: any): void;
  setElContainer(element: Element): void;
  setLazyStateChangeDelay(delay: number): void;
  setDropBefore(handle: Function): void;
  getUid(): string;
  getList(): TM[];
  observeDropped(): Observable<BucketDragDrop>;
  dispatchDropped(evt: BucketDragDrop): void;
  observeChangeState(): Observable<IBucketContainerRef>;
  dispatchChangeState(): void;
  getDragItems(): IBucketItemRef[];
  addDragItem(itemRef: IBucketItemRef): void;
  addDragItemToBoundary(boundary: SelectionBoundary): void;
  removeDragItem(itemRef: IBucketItemRef): void;
  setDragItem(itemRef: IBucketItemRef): void;
  flushDragItem(): void;
  isGroupSame(fromContainer: IBucketContainerRef): boolean;
  isGroupInsertable(fromContainer: IBucketContainerRef): boolean;
  removeByIndex(index: number): void;
  removeByModel(model: any): void;
  findDragItemIndex(itemRef: IBucketItemRef): number;
  findItemRefIndex(itemRef: IBucketItemRef): number;
  findItemRefByElement(element: Element): IBucketItemRef;
  joinItemRef(itemRef: IBucketItemRef): void;
  unjoinItemRef(itemRef: IBucketItemRef): void;
  getItemRefs(): Map<string, IBucketItemRef>;
  createCloneModel(): BucketCloneModel;
  mergeToDrop(
    insertIndex: number,
    fromContainer: IBucketContainerRef,
    fnEmitter?: Function
  ): Promise<void>;
  destroy(): void;
}

/**
 * @export
 * @interface IBucketItemRef
 * @template TM
 */
export interface IBucketItemRef<TM = any> {
  readonly model: TM | null;
  readonly isSelected: boolean;
  readonly elContainer: Element | null;
  setModel(model: any): void;
  setElContainer(element: Element): void;
  setSelected(is: boolean): void;
  getUid(): string;
  getElBound(): BucketDOMRectBound | null;
  observeChangeState(): Observable<any>;
  dispatchChangeState(): void;
  destroy(): void;
}

/**
 * @export
 * @interface BucketCloneModel
 */
export interface BucketCloneModel {
  [key: string]: string;
}

/**
 * @export
 * @interface SelectionBound
 */
export interface SelectionBound {
  x: number;
  y: number;
}

/**
 * @export
 * @interface SelectionBoundary
 */
export interface SelectionBoundary {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * @export
 * @interface BucketDragChoose
 * @template C
 */
export interface BucketDragChoose<C = IBucketContainerRef> {
  fromContainer?: C;
  sortableEvent: BucketSortableEvent;
}

/**
 * @export
 * @interface BucketDragStart
 * @template C
 */
export interface BucketDragStart<C = IBucketContainerRef> {
  fromContainer: C;
  sortableEvent: BucketSortableEvent;
}

/**
 * @export
 * @interface BucketDragEnd
 * @template C
 */
export interface BucketDragEnd<C = IBucketContainerRef> {
  toContainer: C;
  sortableEvent: BucketSortableEvent;
}

/**
 * @export
 * @interface BucketDragDrop
 * @template C
 */
export interface BucketDragDrop<C = IBucketContainerRef> {
  fromContainer: C | null;
  toContainer: C | null;
  sortableEvent: BucketSortableEvent;
}

/**
 * @export
 * @interface BucketEvent
 * @template C
 */
export interface BucketEvent<C = IBucketContainerRef> {
  type: BucketEventType;
  fromContainer?: C | null;
  toContainer?: C | null;
  sortableEvent: BucketSortableEvent;
}

/**
 * @export
 * @interface BucketSortableEvent
 */
export interface BucketSortableEvent {
  target: Element;
  to: Element;
  from: Element;
  item: Element;
  clone: Element;
  oldIndex: number;
  newIndex: number;
  originalEvent: MouseEvent;
}

/**
 * @export
 * @interface BucketRangeSelectionEvent
 */
export interface BucketRangeSelectionEvent {
  x: number;
  y: number;
  container: IBucketContainerRef;
}

/**
 * @export
 * @interface BucketDropBeforeParams
 */
export interface BucketDropBeforeParams {
  fromContainer: IBucketContainerRef;
  toContainer: IBucketContainerRef;
  itemRefs: IBucketItemRef[];
}

export interface BucketDOMRectBound {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type BucketGroupNameType = number | string;
