import { BucketEventType, JdBucketRef, JdBucketContainerRef, JdBucketItemRef } from '../';

describe('JdBucketRef', () => {
  let bucketRef: JdBucketRef;
  beforeEach(() => {
    bucketRef = new JdBucketRef();
  });

  test('setFallbackIndicate', () => {
    expect(bucketRef.isFallbackIndicate).toBe(false);
    bucketRef.setFallbackIndicate(true);
    expect(bucketRef.isFallbackIndicate).toBe(true);
  });

  test('joinContainerRef, unjoinContainerRef', () => {
    expect(bucketRef.getContainerRefs().size).toBe(0);
    const containerRef = new JdBucketContainerRef();
    bucketRef.joinContainerRef(containerRef);
    expect(bucketRef.getContainerRefs().size).toBe(1);
    bucketRef.unjoinContainerRef(containerRef);
    expect(bucketRef.getContainerRefs().size).toBe(0);
  });

  test('observeDragger, dispatchDragChoose', jestDone => {
    const fromContainer = new JdBucketContainerRef();
    const sortableEvent: any = {};
    const bucketListener = bucketRef.observeDragger().subscribe(evt => {
      expect(evt.type).toBe(BucketEventType.DRAG_CHOOSE);
      expect(evt.fromContainer).toBe(fromContainer);
      expect(evt.sortableEvent).toBe(sortableEvent);
      bucketListener.unsubscribe();
      jestDone();
    });
    bucketRef.dispatchDragChoose({
      fromContainer,
      sortableEvent
    });
  });

  test('observeDragger, dispatchDragUnchoose', jestDone => {
    const fromContainer = new JdBucketContainerRef();
    const sortableEvent: any = {};
    const bucketListener = bucketRef.observeDragger().subscribe(evt => {
      expect(evt.type).toBe(BucketEventType.DRAG_UNCHOOSE);
      expect(evt.fromContainer).toBe(undefined);
      expect(evt.sortableEvent).toBe(sortableEvent);
      bucketListener.unsubscribe();
      jestDone();
    });
    bucketRef.dispatchDragUnchoose({
      fromContainer,
      sortableEvent
    });
  });

  test('observeDragger, dispatchDragStart', jestDone => {
    const fromContainer = new JdBucketContainerRef();
    const sortableEvent: any = {};
    const bucketListener = bucketRef.observeDragger().subscribe(evt => {
      expect(evt.type).toBe(BucketEventType.DRAG_START);
      expect(evt.fromContainer).toBe(fromContainer);
      expect(evt.sortableEvent).toBe(sortableEvent);
      bucketListener.unsubscribe();
      jestDone();
    });
    bucketRef.dispatchDragStart({
      fromContainer,
      sortableEvent
    });
  });

  test('observeDragger, dispatchDragEnd with JdBucketContainerRef observeDropped', jestDone => {
    const fromContainer = new JdBucketContainerRef();
    const toContainer = new JdBucketContainerRef();
    toContainer.setReceiver(true);

    const sortableEvent: any = {};
    const bucketListener = bucketRef.observeDragger().subscribe(evt => {
      if (evt.type === BucketEventType.DRAG_START) {
        expect(evt.fromContainer).toBe(fromContainer);
        expect(evt.toContainer).toBe(undefined);
        expect(evt.sortableEvent).toBe(sortableEvent);
      } else if (evt.type === BucketEventType.DRAG_END) {
        expect(evt.fromContainer).toBe(fromContainer);
        expect(evt.toContainer).toBe(toContainer);
        expect(evt.sortableEvent).toBe(sortableEvent);
      }
    });
    const containerListener = toContainer.observeDropped().subscribe(evt => {
      expect(evt.fromContainer).toBe(fromContainer);
      expect(evt.toContainer).toBe(toContainer);
      expect(evt.sortableEvent).toBe(sortableEvent);
      containerListener.unsubscribe();
      bucketListener.unsubscribe();
      jestDone();
    });
    bucketRef.dispatchDragStart({
      fromContainer,
      sortableEvent
    });
    bucketRef.dispatchDragEnd({
      toContainer,
      sortableEvent
    });
  });

  test('observeRangeSelection, dispatchRangeSelectionStart', jestDone => {
    const someContainer = new JdBucketContainerRef();
    const bucketListener = bucketRef.observeRangeSelection().subscribe(evt => {
      expect(evt.x).toBe(111);
      expect(evt.y).toBe(222);
      expect(evt.container).toBe(someContainer);
      bucketListener.unsubscribe();
      jestDone();
    });
    bucketRef.dispatchRangeSelectionStart({
      x: 111,
      y: 222,
      container: someContainer
    });
  });

  test('findContainerRefByElement', () => {
    const someContainer = new JdBucketContainerRef();
    const someElement = {} as any;
    someContainer.setElContainer(someElement);
    expect(bucketRef.findContainerRefByElement(someElement)).toBe(undefined);
    bucketRef.joinContainerRef(someContainer);
    expect(bucketRef.findContainerRefByElement(someElement)).toBe(someContainer);
  });

  test('cancel', (jestDone) => {
    const fromContainer = new JdBucketContainerRef();
    const toContainer = new JdBucketContainerRef();
    const itemRef1 = new JdBucketItemRef();
    const element1 = {} as any;
    itemRef1.setElContainer(element1);
    toContainer.setReceiver(true);

    const sortableEvent: any = {};
    const bucketListener = bucketRef.observeDragger().subscribe(evt => {
      if (evt.type === BucketEventType.DRAG_START) {
        expect(fromContainer.getDragItems().length).toBe(1);
      }
    });
    const containerListener = toContainer.observeDropped().subscribe(evt => {
      expect(fromContainer.getDragItems().length).toBe(0);
      containerListener.unsubscribe();
      bucketListener.unsubscribe();
      jestDone();
    });
    fromContainer.addDragItem(itemRef1);
    bucketRef.dispatchDragStart({
      fromContainer,
      sortableEvent
    });
    // bucketRef.cancel();
    const ESCAPE = 27;
    const ENTER = 13;
    const dictEscape: any = { which: ESCAPE, keyCode: ESCAPE, code: ESCAPE };
    const dictEnter: any = { which: ENTER, keyCode: ENTER, code: ENTER };
    document.dispatchEvent(new KeyboardEvent('keydown', dictEnter));
    document.dispatchEvent(new KeyboardEvent('keydown', dictEscape));
    bucketRef.dispatchDragEnd({
      toContainer,
      sortableEvent
    });
  });
});
