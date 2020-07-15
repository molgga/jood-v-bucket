import { JdBucketSelectionRange } from '../bucket/JdBucketSelectionRange';

describe('JdBucketSelectionRange', () => {

  let selection: JdBucketSelectionRange;
  beforeEach(() => {
    selection = new JdBucketSelectionRange();
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

  test('startSelection', (jestDone) => {
    const onBoundary = jest.fn();
    const onFlushed = () => {
      const mockResult = onBoundary.mock.calls;
      const mockBoundary1 = mockResult[0][0];
      const mockBoundary2 = mockResult[1][0];
      expect(onBoundary.mock.calls.length).toBe(2);
      expect(mockBoundary1).toEqual({ x: 0, y: 0, w: 0, h: 0 });
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
  
  test('mousemove bottom & right boundary', (jestDone) => {
    const onBoundary = jest.fn();
    const onFlushed = () => {
      const mockResult = onBoundary.mock.calls;
      const mockBoundary1 = mockResult[0][0];
      const mockBoundary2 = mockResult[1][0];
      const mockBoundary3 = mockResult[2][0];
      expect(onBoundary.mock.calls.length).toBe(3);
      expect(mockBoundary1).toEqual({ x: 0, y: 0, w: 0, h: 0 });
      expect(mockBoundary2).toEqual({ x: 100, y: 200, w: 10, h: 10 });
      expect(mockBoundary3).toEqual({ x: 100, y: 200, w: 20, h: 11 });
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
    let evt = new MouseEvent('mousemove');
    let evtAnyRef:any = evt;
    evtAnyRef.x = 110;
    evtAnyRef.y = 210;
    doc.dispatchEvent(evt);
    evt = new MouseEvent('mousemove');
    evtAnyRef = evt;
    evtAnyRef.x = 120;
    evtAnyRef.y = 211;
    doc.dispatchEvent(evt);
    selection.endSelection();
  });

  test('mousemove top & left boundary ', (jestDone) => {
    const onBoundary = jest.fn();
    const onFlushed = () => {
      const mockResult = onBoundary.mock.calls;
      const mockBoundary1 = mockResult[0][0];
      const mockBoundary2 = mockResult[1][0];
      const mockBoundary3 = mockResult[2][0];
      expect(onBoundary.mock.calls.length).toBe(3);
      expect(mockBoundary1).toEqual({ x: 0, y: 0, w: 0, h: 0 });
      expect(mockBoundary2).toEqual({ x: 90, y: 190, w: 10, h: 10 });
      expect(mockBoundary3).toEqual({ x: 80, y: 180, w: 20, h: 20 });
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
    let evt = new MouseEvent('mousemove');
    let evtAnyRef:any = evt;
    evtAnyRef.x = 90;
    evtAnyRef.y = 190;
    doc.dispatchEvent(evt);
    evt = new MouseEvent('mousemove');
    evtAnyRef = evt;
    evtAnyRef.x = 80;
    evtAnyRef.y = 180;
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
    const instance1 = JdBucketSelectionRange.getInstance();  
    const instance2 = JdBucketSelectionRange.getInstance();
    expect(instance1).toBe(instance2);
  });
});