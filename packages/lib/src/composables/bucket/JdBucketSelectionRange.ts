import { Subject, Observable } from 'rxjs';
import { SelectionBound, SelectionBoundary } from './types';

let single: JdBucketSelectionRange;

export class JdBucketSelectionRange {
  constructor() {}

  static getInstance() {
    if (!single) single = new JdBucketSelectionRange();
    return single;
  }

  protected startX = 0;
  protected startY = 0;
  protected moveX = 0;
  protected moveY = 0;
  protected subjectBoundary: Subject<SelectionBoundary> = new Subject();
  protected subjectFlushed: Subject<SelectionBoundary> = new Subject();
  protected lastBoundary: SelectionBoundary | null = null;

  /**
   * document
   * @returns {Document}
   */
  getDocument(): Document {
    return window.document;
  }

  /**
   * document mousemove 이벤트 핸들러.
   */
  handleSelectionMove = (evt: MouseEvent) => {
    evt.preventDefault();
    this.moveX = evt.x;
    this.moveY = evt.y;
    this.updateBoundary();
  };

  /**
   * document mouseup 이벤트 핸들러.
   */
  handleSelectionUp = () => {
    this.endSelection();
  };

  /**
   * 옵저버: 바운더리 영역
   * @returns {Observable<SelectionBoundary>}
   */
  observeBoundary(): Observable<SelectionBoundary> {
    return this.subjectBoundary.asObservable();
  }

  /**
   * 옵저버: 바운더리 선택 해제
   * @returns {Observable<SelectionBoundary>}
   */
  observeFlushed(): Observable<SelectionBoundary> {
    return this.subjectFlushed.asObservable();
  }

  /**
   * 알림: 바운더리 영역 변경.
   * @param {SelectionBoundary} boundary
   */
  dispatchBoundary(boundary: SelectionBoundary): void {
    this.lastBoundary = boundary;
    this.subjectBoundary.next(boundary);
  }

  /**
   * 알림: 바운더리 영역 해제.
   */
  dispatchFlushed(): void {
    this.subjectFlushed.next(this.lastBoundary as SelectionBoundary);
  }

  /**
   * 바운더리 영역 변경
   */
  updateBoundary(): void {
    const x1 = this.startX;
    const x2 = this.moveX;
    const y1 = this.startY;
    const y2 = this.moveY;
    const top = Math.min(y1, y2);
    const left = Math.min(x1, x2);
    const width = left ? Math.abs(x1 - x2) : 0;
    const height = top ? Math.abs(y1 - y2) : 0;
    this.dispatchBoundary({
      x: left,
      y: top,
      w: width,
      h: height
    });
  }

  /**
   * 셀렉션 시작.
   * @param {SelectionBound} bound
   */
  startSelection(bound: SelectionBound): void {
    const { x = 0, y = 0 } = bound;
    const doc = this.getDocument();
    this.startX = x;
    this.startY = y;
    this.flushSelection();
    this.updateBoundary();
    doc.addEventListener('mousemove', this.handleSelectionMove);
    doc.addEventListener('mouseup', this.handleSelectionUp);
  }

  /**
   * 셀렉션 종료.
   */
  endSelection(): void {
    this.startX = 0;
    this.startY = 0;
    this.moveX = 0;
    this.moveY = 0;
    this.flushSelection();
  }

  /**
   * 셀렉션 해제.
   */
  flushSelection(): void {
    const doc = this.getDocument();
    this.dispatchFlushed();
    doc.removeEventListener('mousemove', this.handleSelectionMove);
    doc.removeEventListener('mouseup', this.handleSelectionUp);
  }

  /**
   * 해제.
   */
  dispose(): void {
    try {
      this.flushSelection();
      // ...
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * 파기
   */
  destroy(): void {
    try {
      this.flushSelection();
      if (this.subjectBoundary) {
        this.subjectBoundary.unsubscribe();
      }
      if (this.subjectFlushed) {
        this.subjectFlushed.unsubscribe();
      }
      // ...
    } catch (err) {
      console.error(err);
    }
  }
}
