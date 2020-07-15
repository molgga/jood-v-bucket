import {
  BucketEventType,
  JdBucketRef,
  JdBucketContainerRef,
  JdBucketItemRef,
  BucketDropBeforeParams
} from '../bucket';
import { delay } from '../../../tests/utils';

describe('JdBucketItemRef', () => {
  let itemRef: JdBucketItemRef;
  beforeEach(() => {
    itemRef = new JdBucketItemRef();
  });
  afterEach(() => {
    if (itemRef) {
      itemRef.destroy();
    }
  });

  test('getUid', () => {
    expect(itemRef.getUid()).not.toBeNull();
    expect(typeof itemRef.getUid()).toBe('string');
  });

  test('setModel', () => {
    const some = {id:1};
    itemRef.setModel(some);
    expect(itemRef.model).toBe(some);
  });

  test('setSelected', () => {
    expect(itemRef.isSelected).toBe(false);
    itemRef.setSelected(true);
    expect(itemRef.isSelected).toBe(true);
  });

  test('setElContainer', () => {
    const element = {} as any;
    expect(itemRef.elContainer).toBe(null);
    itemRef.setElContainer(element);
    expect(itemRef.elContainer).toBe(element);
  });

  test('getElBound', () => {
    let element: any = { getBoundingClientRect: () => ({ x: 0, y: 0, width: 100, height: 100 }) };
    expect(itemRef.getElBound()).toBeNull();
    itemRef.setElContainer(element);
    expect(itemRef.getElBound()).not.toBeNull();
    expect(itemRef.getElBound()).toEqual({ x: 0, y: 0, width: 100, height: 100 });

    element = { getBoundingClientRect: () => ({}) };
    itemRef.setElContainer(element);
    expect(itemRef.getElBound()).not.toBeNull();
    expect(itemRef.getElBound()).toEqual({ x: 0, y: 0, width: 0, height: 0 });
  });
  
  test('observeChangeState, dispatchChangeState', () => {
    const handler = jest.fn();
    const itemListener = itemRef.observeChangeState().subscribe(handler);
    itemRef.dispatchChangeState();
    expect(handler.mock.calls.length).toBe(1);
    itemRef.setSelected(true);
    expect(handler.mock.calls.length).toBe(2);
    itemListener.unsubscribe();
  });

  test('container add drag', () => {
    const containerRef = new JdBucketContainerRef();
    containerRef.joinItemRef(itemRef);
    expect(itemRef.isSelected).toBe(false);
    containerRef.addDragItem(itemRef);
    expect(itemRef.isSelected).toBe(true);
    containerRef.unjoinItemRef(itemRef);
    containerRef.destroy();
  });
});