import { JdBucketSelectionDrag } from '../JdBucketSelectionDrag';

describe('JdBucketSelectionDrag', () => {

  let selection: JdBucketSelectionDrag;
  beforeEach(() => {
    selection = new JdBucketSelectionDrag();
  });
  afterEach(() => {
    if (selection) {
      selection.dispose();
    }
  });
  afterAll(() => {
    if (selection) {
      selection.destroy();
    }
  });

  test('getInstance', () => {
    const s1 = JdBucketSelectionDrag.getInstance();  
    const s2 = JdBucketSelectionDrag.getInstance();
    expect(s1).toBe(s2);
  });

  test('startSelection', (jestDone) => {
    const onBoundary = jest.fn();
    const onFlushed = () => {
      const mockResult = onBoundary.mock.calls;
      const mockBoundary1 = mockResult[0][0];
      const mockBoundary2 = mockResult[1][0];
      expect(onBoundary.mock.calls.length).toBe(2);
      expect(mockBoundary1).toEqual({ x: 100, y: 200, w: 0, h: 0 });
      expect(mockBoundary2).toEqual({ x: 0, y: 0, w: 0, h: 0 });
      flushedListener.unsubscribe();
      boundaryListener.unsubscribe();
      jestDone();
    };
    const boundaryListener = selection.observeBoundary().subscribe(onBoundary);
    const flushedListener = selection.observeFlushed().subscribe(onFlushed);
    selection.startSelection({ 
      x: 100, 
      y: 200 
    });
    selection.startSelection({ 
      x: undefined, 
      y: undefined 
    } as any);
    selection.flushSelection();
  });

  test('mousemove boundary', (jestDone) => {
    const onBoundary = jest.fn();
    const onFlushed = () => {
      const mockResult = onBoundary.mock.calls;
      const mockBoundary1 = mockResult[0][0];
      const mockBoundary2 = mockResult[1][0];
      expect(onBoundary.mock.calls.length).toBe(2);
      expect(mockBoundary1).toEqual({ x: 100, y: 200, w: 0, h: 0 });
      expect(mockBoundary2).toEqual({ x: 111, y: 222, w: 0, h: 0 });
      flushedListener.unsubscribe();
      boundaryListener.unsubscribe();
      jestDone();
    };
    const boundaryListener = selection.observeBoundary().subscribe(onBoundary);
    const flushedListener = selection.observeFlushed().subscribe(onFlushed);
    selection.startSelection({ 
      x: 100, 
      y: 200 
    });
    const doc = selection.getDocument();
    const evt = new MouseEvent('mousemove', { clientX: 111, clientY: 222 });
    doc.dispatchEvent(evt);
    selection.endSelection();
  });

  test('mouseup endSelection', (jestDone) => {
    const spyEndSelection = jest.spyOn(selection, 'endSelection');
    const onFlushed = () => {
      expect(spyEndSelection.mock.calls.length).toBe(1);
      flushedListener.unsubscribe();
      jestDone();
    };
    const flushedListener = selection.observeFlushed().subscribe(onFlushed);
    selection.startSelection({ 
      x: 100, 
      y: 200 
    });
    const doc = selection.getDocument();
    const evt = new MouseEvent('mouseup');
    doc.dispatchEvent(evt);
    spyEndSelection.mockRestore();
  });

  test('getInstance', () => {
    const instance1 = JdBucketSelectionDrag.getInstance();  
    const instance2 = JdBucketSelectionDrag.getInstance();
    expect(instance1).toBe(instance2);
  });
});