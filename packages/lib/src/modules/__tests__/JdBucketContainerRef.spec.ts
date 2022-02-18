import {
  BucketEventType,
  JdBucketRef,
  JdBucketContainerRef,
  JdBucketItemRef,
  BucketDropBeforeParams,
} from '../';

describe('JdBucketContainerRef', () => {
  let bucketRef: JdBucketRef;
  let containerRef: JdBucketContainerRef;
  beforeEach(() => {
    jest.useFakeTimers();
    bucketRef = new JdBucketRef();
    containerRef = new JdBucketContainerRef();
  });

  afterEach(() => {
    jest.useRealTimers();
    if (containerRef) {
      containerRef.destroy();
    }
  });

  test('getUid', () => {
    expect(containerRef.getUid()).not.toBeNull();
    expect(typeof containerRef.getUid()).toBe('string');
  });

  test('member', () => {
    const list: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const fnDropBefore = () => {};
    const someElement = {} as any;
    containerRef.setGroupName('abc');
    containerRef.setElContainer(someElement);
    containerRef.setList(list);
    containerRef.setMax(10);
    containerRef.setReceiver(true);
    containerRef.setMultiple(true);
    containerRef.setLazyStateChangeDelay(100);
    containerRef.setDropBefore(fnDropBefore);
    expect(containerRef.groupName).toBe('abc');
    expect(containerRef.elContainer).toBe(someElement);
    expect(containerRef.getList().length).toBe(list.length);
    expect(containerRef.max).toBe(10);
    expect(containerRef.isReceiver).toBe(true);
    expect(containerRef.isMultiple).toBe(true);
    expect(containerRef.isMaximum).toBe(false);
    expect(containerRef.onDropBefore).toBe(fnDropBefore);
  });

  test('setGroupName', () => {
    containerRef.setGroupName('abc');
    expect(containerRef.groupName).toBe('abc');
    containerRef.setGroupName(123);
    expect(containerRef.groupName).toBe(123);
  });

  test('setReceiver', () => {
    expect(containerRef.isReceiver).toBe(false);
    containerRef.setReceiver(true);
    expect(containerRef.isReceiver).toBe(true);
    containerRef.setReceiver(false);
    expect(containerRef.isReceiver).toBe(false);
    containerRef.setReceiver(1 as any);
    expect(containerRef.isReceiver).toBe(true);
    containerRef.setReceiver('foo' as any);
    expect(containerRef.isReceiver).toBe(true);
    containerRef.setReceiver(0 as any);
    expect(containerRef.isReceiver).toBe(false);
    containerRef.setReceiver(null as any);
    expect(containerRef.isReceiver).toBe(false);
  });

  test('setMultiple', () => {
    expect(containerRef.isMultiple).toBe(false);
    containerRef.setMultiple(true);
    expect(containerRef.isMultiple).toBe(true);
    containerRef.setMultiple(false);
    expect(containerRef.isMultiple).toBe(false);
    containerRef.setMultiple(1 as any);
    expect(containerRef.isMultiple).toBe(true);
    containerRef.setMultiple('foo' as any);
    expect(containerRef.isMultiple).toBe(true);
    containerRef.setMultiple(0 as any);
    expect(containerRef.isMultiple).toBe(false);
    containerRef.setMultiple(null as any);
    expect(containerRef.isMultiple).toBe(false);
  });

  test('setMax', () => {
    expect(containerRef.max).toBe(-1);
    containerRef.setMax(0);
    expect(containerRef.max).toBe(0);
    containerRef.setMax(1);
    expect(containerRef.max).toBe(1);
    containerRef.setMax(-1);
    expect(containerRef.max).toBe(-1);
    containerRef.setMax(-999);
    expect(containerRef.max).toBe(-1);
    containerRef.setMax(undefined);
    expect(containerRef.max).toBe(-1);
    containerRef.setMax('ABC' as any);
    expect(containerRef.max).toBe(-1);
  });

  test('isMaximum', () => {
    containerRef.setList([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
    containerRef.setMax(6);
    expect(containerRef.isMaximum).toBe(false);
    containerRef.setMax(5);
    expect(containerRef.isMaximum).toBe(true);
    containerRef.setList([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
    expect(containerRef.isMaximum).toBe(false);
  });

  test('removeByIndex', () => {
    const list: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    containerRef.setList(list);
    expect(containerRef.getList().length).toBe(5);
    expect(containerRef.getList()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
    containerRef.removeByIndex(0);
    expect(containerRef.getList().length).toBe(4);
    expect(containerRef.getList()).toEqual([{ id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
    containerRef.removeByIndex(99);
    expect(containerRef.getList().length).toBe(4);
    expect(containerRef.getList()).toEqual([{ id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
    containerRef.removeByIndex(-1);
    expect(containerRef.getList().length).toBe(4);
    expect(containerRef.getList()).toEqual([{ id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
  });

  test('removeByModel', () => {
    const list: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    containerRef.setList(list);
    expect(containerRef.getList().length).toBe(5);
    expect(containerRef.getList()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
    containerRef.removeByModel(list[0]);
    expect(containerRef.getList().length).toBe(4);
    expect(containerRef.getList()).toEqual([{ id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
    containerRef.removeByModel({ any: 1 });
    expect(containerRef.getList().length).toBe(4);
    expect(containerRef.getList()).toEqual([{ id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
  });

  test('observeChangeState, dispatchChangeState', () => {
    const handler = jest.fn();
    const containerListener = containerRef.observeChangeState().subscribe(handler);
    containerRef.dispatchChangeState();
    expect(handler.mock.calls.length).toBe(1);
    containerListener.unsubscribe();
  });

  test('observeChangeState, state change', () => {
    const handler = jest.fn();
    const containerListener = containerRef.observeChangeState().subscribe(handler);
    containerRef.setGroupName('abc');
    containerRef.setList([{ id: 1 }]);
    containerRef.setMax(99);
    containerRef.setReceiver(true);
    containerRef.setMultiple(false);
    expect(handler.mock.calls.length).toBe(5);
    containerListener.unsubscribe();
  });

  test('observeChangeState, state change lazy', () => {
    const handler = jest.fn();
    const containerListener = containerRef.observeChangeState().subscribe(handler);
    containerRef.setLazyStateChangeDelay(10);
    containerRef.setGroupName('abc');
    containerRef.setList([{ id: 1 }]);
    containerRef.setMax(99);
    containerRef.setReceiver(true);
    containerRef.setMultiple(false);
    jest.advanceTimersByTime(50);
    expect(handler.mock.calls.length).toBe(1);
    containerListener.unsubscribe();
  });

  test('observeChangeState, state change lazy 2', () => {
    const handler = jest.fn();
    const containerListener = containerRef.observeChangeState().subscribe(handler);
    containerRef.setLazyStateChangeDelay(undefined as any);
    containerRef.setGroupName('abc');
    containerRef.setList([{ id: 1 }]);
    containerRef.setMax(99);
    containerRef.setReceiver(true);
    containerRef.setMultiple(false);
    expect(handler.mock.calls.length).toBe(5);
    containerListener.unsubscribe();
  });

  test('joinItemRef, unjoinItemRef, getItemRefs', () => {
    const itemRef1 = new JdBucketItemRef();
    const itemRef2 = new JdBucketItemRef();
    expect(containerRef.getItemRefs().size).toBe(0);
    containerRef.joinItemRef(itemRef1);
    expect(containerRef.getItemRefs().size).toBe(1);
    containerRef.joinItemRef(itemRef2);
    expect(containerRef.getItemRefs().size).toBe(2);
    containerRef.unjoinItemRef(itemRef1);
    expect(containerRef.getItemRefs().size).toBe(1);
    containerRef.unjoinItemRef(itemRef2);
    expect(containerRef.getItemRefs().size).toBe(0);
  });

  test('findItemRefIndex', () => {
    const list: any[] = [{ id: 1 }, { id: 2 }];
    const itemRef1 = new JdBucketItemRef();
    itemRef1.setModel(list[0]);
    const itemRef2 = new JdBucketItemRef();
    itemRef2.setModel(list[1]);
    containerRef.setList(list);
    containerRef.joinItemRef(itemRef1);
    containerRef.joinItemRef(itemRef2);
    expect(containerRef.findItemRefIndex(itemRef1)).toBe(0);
    expect(containerRef.findItemRefIndex(itemRef2)).toBe(1);
  });

  test('findItemRefByElement', () => {
    const itemRef1 = new JdBucketItemRef();
    const element1 = {} as any;
    itemRef1.setElContainer(element1);
    const itemRef2 = new JdBucketItemRef();
    const element2 = {} as any;
    itemRef2.setElContainer(element2);
    containerRef.joinItemRef(itemRef1);
    containerRef.joinItemRef(itemRef2);
    expect(containerRef.findItemRefByElement(element1)).toBe(itemRef1);
    expect(containerRef.findItemRefByElement(element2)).toBe(itemRef2);
  });

  test('addDragItem, removeDragItem, flushDragItem, setDragItem', () => {
    const itemRef1 = new JdBucketItemRef();
    const element1 = {} as any;
    itemRef1.setElContainer(element1);
    const itemRef2 = new JdBucketItemRef();
    const element2 = {} as any;
    itemRef2.setElContainer(element2);
    containerRef.joinItemRef(itemRef1);
    containerRef.joinItemRef(itemRef2);

    expect(containerRef.getDragItems().length).toBe(0);
    expect(itemRef1.isSelected).toBe(false);
    expect(itemRef2.isSelected).toBe(false);
    containerRef.addDragItem(itemRef1);
    expect(containerRef.getDragItems().length).toBe(1);
    expect(itemRef1.isSelected).toBe(true);
    expect(itemRef2.isSelected).toBe(false);
    containerRef.addDragItem(itemRef2);
    expect(containerRef.getDragItems().length).toBe(2);
    expect(itemRef1.isSelected).toBe(true);
    expect(itemRef2.isSelected).toBe(true);
    containerRef.removeDragItem(itemRef1);
    containerRef.removeDragItem(itemRef2);
    expect(containerRef.getDragItems().length).toBe(0);
    expect(itemRef1.isSelected).toBe(false);
    expect(itemRef2.isSelected).toBe(false);
    containerRef.addDragItem(itemRef1);
    containerRef.addDragItem(itemRef2);
    expect(containerRef.getDragItems().length).toBe(2);
    expect(itemRef1.isSelected).toBe(true);
    expect(itemRef2.isSelected).toBe(true);
    containerRef.flushDragItem();
    expect(containerRef.getDragItems().length).toBe(0);
    expect(itemRef1.isSelected).toBe(false);
    expect(itemRef2.isSelected).toBe(false);
    containerRef.addDragItem(itemRef1);
    containerRef.addDragItem(itemRef2);
    expect(containerRef.getDragItems().length).toBe(2);
    expect(itemRef1.isSelected).toBe(true);
    expect(itemRef2.isSelected).toBe(true);
    containerRef.setDragItem(itemRef1);
    expect(containerRef.getDragItems().length).toBe(1);
    expect(itemRef1.isSelected).toBe(true);
    expect(itemRef2.isSelected).toBe(false);
  });

  test('addDragItemToBoundary', () => {
    const itemRef1 = new JdBucketItemRef();
    const itemRef2 = new JdBucketItemRef();
    const itemRef3 = new JdBucketItemRef();
    containerRef.joinItemRef(itemRef1);
    containerRef.joinItemRef(itemRef2);
    containerRef.joinItemRef(itemRef3);
    jest.spyOn(itemRef1, 'getElBound').mockImplementation(() => {
      return { x: 0, y: 0, width: 50, height: 50 };
    });
    jest.spyOn(itemRef2, 'getElBound').mockImplementation(() => {
      return { x: 99, y: 99, width: 50, height: 50 };
    });
    jest.spyOn(itemRef3, 'getElBound').mockImplementation(() => {
      return { x: 101, y: 101, width: 50, height: 50 };
    });
    expect(containerRef.getDragItems().length).toBe(0);
    containerRef.addDragItemToBoundary({ x: 10, y: 10, w: 90, h: 90 });
    expect(containerRef.getDragItems().length).toBe(2);
  });

  test('isGroupSame, isGroupInsertable', () => {
    const receiverA = new JdBucketContainerRef();
    const senderA = new JdBucketContainerRef();
    const receiverB = new JdBucketContainerRef();
    const senderB = new JdBucketContainerRef();
    containerRef.setGroupName('group-A');
    containerRef.setReceiver(true);
    receiverA.setGroupName('group-A');
    receiverA.setReceiver(true);
    senderA.setGroupName('group-A');
    senderA.setReceiver(false);
    receiverB.setGroupName('group-B');
    receiverB.setReceiver(true);
    senderB.setGroupName('group-B');
    senderB.setReceiver(false);
    expect(containerRef.isGroupSame(receiverA)).toBe(true);
    expect(containerRef.isGroupSame(senderA)).toBe(true);
    expect(containerRef.isGroupSame(receiverB)).toBe(false);
    expect(containerRef.isGroupSame(senderB)).toBe(false);
    expect(containerRef.isGroupInsertable(receiverA)).toBe(false);
    expect(containerRef.isGroupInsertable(senderA)).toBe(true);
    expect(containerRef.isGroupInsertable(receiverB)).toBe(false);
    expect(containerRef.isGroupInsertable(senderB)).toBe(false);
  });

  test('createCloneModel', () => {
    expect(containerRef.createCloneModel()).not.toBeNull();
  });

  test('mergeToDrop', async () => {
    const senderList: any[] = [{ id: 101 }, { id: 102 }, { id: 103 }];
    const senderContainer = new JdBucketContainerRef();
    const senderItem1 = new JdBucketItemRef();
    const senderItem2 = new JdBucketItemRef();
    const senderItem3 = new JdBucketItemRef();
    senderItem1.setModel(senderList[0]);
    senderItem2.setModel(senderList[1]);
    senderItem3.setModel(senderList[2]);
    senderContainer.setGroupName('group-A');
    senderContainer.setReceiver(false);
    senderContainer.setList(senderList);
    senderContainer.addDragItem(senderItem1);
    senderContainer.addDragItem(senderItem2);

    const mergeChangeEmitter = jest.fn();

    const receiverList: any[] = [{ id: 201 }, { id: 202 }];
    containerRef.setGroupName('group-A');
    containerRef.setReceiver(true);
    containerRef.setList(receiverList);
    expect(senderContainer.getDragItems().length).toBe(2);
    await containerRef.mergeToDrop(1, senderContainer, mergeChangeEmitter);
    expect(mergeChangeEmitter.mock.calls.length).toBe(1);
    expect(senderContainer.getDragItems().length).toBe(0);
    expect(containerRef.getList()).toEqual([{ id: 201 }, { id: 101 }, { id: 102 }, { id: 202 }]);
  });

  test('mergeToDrop dropBefore confirm true', async () => {
    const senderList: any[] = [{ id: 101 }, { id: 102 }, { id: 103 }];
    const senderContainer = new JdBucketContainerRef();
    const senderItem1 = new JdBucketItemRef();
    const senderItem2 = new JdBucketItemRef();
    const senderItem3 = new JdBucketItemRef();
    senderItem1.setModel(senderList[0]);
    senderItem2.setModel(senderList[1]);
    senderItem3.setModel(senderList[2]);
    senderContainer.setGroupName('group-A');
    senderContainer.setReceiver(false);
    senderContainer.setList(senderList);
    senderContainer.addDragItem(senderItem1);
    senderContainer.addDragItem(senderItem2);

    const mergeChangeEmitter = jest.fn();
    const intercepDropBefore = () => {
      return true;
    };

    const receiverList: any[] = [{ id: 201 }, { id: 202 }];
    containerRef.setGroupName('group-A');
    containerRef.setReceiver(true);
    containerRef.setList(receiverList);
    containerRef.setDropBefore(intercepDropBefore);
    expect(senderContainer.getDragItems().length).toBe(2);
    await containerRef.mergeToDrop(1, senderContainer, mergeChangeEmitter);
    expect(mergeChangeEmitter.mock.calls.length).toBe(2); // dropBefore 가 물려있는 경우 dropBefore 를 호출하기 전/후 2번 호출 된다
    expect(senderContainer.getDragItems().length).toBe(0);
    expect(containerRef.getList()).toEqual([{ id: 201 }, { id: 101 }, { id: 102 }, { id: 202 }]); // 변경 됨
  });

  test('mergeToDrop dropBefore confirm false', async () => {
    const senderList: any[] = [{ id: 101 }, { id: 102 }, { id: 103 }];
    const senderContainer = new JdBucketContainerRef();
    const senderItem1 = new JdBucketItemRef();
    const senderItem2 = new JdBucketItemRef();
    const senderItem3 = new JdBucketItemRef();
    senderItem1.setModel(senderList[0]);
    senderItem2.setModel(senderList[1]);
    senderItem3.setModel(senderList[2]);
    senderContainer.setGroupName('group-A');
    senderContainer.setReceiver(false);
    senderContainer.setList(senderList);
    senderContainer.addDragItem(senderItem1);
    senderContainer.addDragItem(senderItem2);

    const mergeChangeEmitter = jest.fn();
    const intercepDropBefore = () => {
      return false;
    };

    const receiverList: any[] = [{ id: 201 }, { id: 202 }];
    containerRef.setGroupName('group-A');
    containerRef.setReceiver(true);
    containerRef.setList(receiverList);
    containerRef.setDropBefore(intercepDropBefore);
    expect(senderContainer.getDragItems().length).toBe(2);
    await containerRef.mergeToDrop(1, senderContainer, mergeChangeEmitter);
    expect(mergeChangeEmitter.mock.calls.length).toBe(1);
    expect(senderContainer.getDragItems().length).toBe(0);
    expect(containerRef.getList()).toEqual([{ id: 201 }, { id: 202 }]); // 변경 되지 않음
  });

  test('mergeToDrop dropBefore filter list', async () => {
    const senderList: any[] = [{ id: 101 }, { id: 102 }, { id: 103 }];
    const senderContainer = new JdBucketContainerRef();
    const senderItem1 = new JdBucketItemRef();
    const senderItem2 = new JdBucketItemRef();
    const senderItem3 = new JdBucketItemRef();
    senderItem1.setModel(senderList[0]);
    senderItem2.setModel(senderList[1]);
    senderItem3.setModel(senderList[2]);
    senderContainer.setGroupName('group-A');
    senderContainer.setReceiver(false);
    senderContainer.setList(senderList);
    senderContainer.addDragItem(senderItem1);
    senderContainer.addDragItem(senderItem2);

    const mergeChangeEmitter = jest.fn();
    const intercepDropBefore = (params: BucketDropBeforeParams) => {
      const { itemRefs } = params;
      const filterRefs = itemRefs.filter((itemRef) => 101 === itemRef.model.id);
      return filterRefs.map((itemRef) => itemRef.model);
    };

    const receiverList: any[] = [{ id: 201 }, { id: 202 }];
    containerRef.setGroupName('group-A');
    containerRef.setReceiver(true);
    containerRef.setList(receiverList);
    containerRef.setDropBefore(intercepDropBefore);
    expect(senderContainer.getDragItems().length).toBe(2);
    await containerRef.mergeToDrop(1, senderContainer, mergeChangeEmitter);
    expect(mergeChangeEmitter.mock.calls.length).toBe(2);
    expect(senderContainer.getDragItems().length).toBe(0);
    expect(containerRef.getList()).toEqual([{ id: 201 }, { id: 101 }, { id: 202 }]);
  });
});
