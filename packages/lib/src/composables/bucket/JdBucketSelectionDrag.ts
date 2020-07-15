import { Subject, Observable } from 'rxjs';
import { SelectionBound, SelectionBoundary } from './types';

export class JdBucketSelectionDrag {
  constructor() {}

  static _instance: JdBucketSelectionDrag | null = null;
  static getInstance() {
    if (!JdBucketSelectionDrag._instance) {
      JdBucketSelectionDrag._instance = new JdBucketSelectionDrag();
    }
    return JdBucketSelectionDrag._instance;
  }

  protected moveX = 0;
  protected moveY = 0;
  protected subjectBoundary: Subject<SelectionBoundary> = new Subject();
  protected subjectFlushed: Subject<void> = new Subject();

  /**
   * document
   * @returns {Document}
   */
  getDocument(): Document {
    return window.document;
  }

  /**
   * document mousemove 이벤트 핸들러.
   * @protected
   */
  protected handleSelectionMove = (evt: MouseEvent) => {
    evt.preventDefault();
    this.moveX = evt.x;
    this.moveY = evt.y;
    this.updateBoundary();
  };

  /**
   * document mouseup 이벤트 핸들러.
   * @protected
   */
  protected handleSelectionUp = () => {
    this.endSelection();
  };

  /**
   * document 핸들러 등록
   * @protected
   */
  protected addSelectionHandler() {
    const doc = this.getDocument();
    doc.addEventListener('mousemove', this.handleSelectionMove);
    doc.addEventListener('mouseup', this.handleSelectionUp);
  }

  /**
   * document 핸들러 제거
   * @protected
   */
  protected removeSelectionHandler() {
    const doc = this.getDocument();
    doc.removeEventListener('mousemove', this.handleSelectionMove);
    doc.removeEventListener('mouseup', this.handleSelectionUp);
  }

  /**
   * 옵저버: 바운더리 영역
   * @returns {Observable<SelectionBoundary>}
   */
  observeBoundary(): Observable<SelectionBoundary> {
    return this.subjectBoundary.asObservable();
  }

  /**
   * 옵저버: 바운더리 선택 해제
   * @returns {Observable<void>}
   */
  observeFlushed(): Observable<void> {
    return this.subjectFlushed.asObservable();
  }

  /**
   * 알림: 바운더리 영역 변경.
   * @param {SelectionBoundary} boundary
   */
  dispatchBoundary(boundary: SelectionBoundary): void {
    this.subjectBoundary.next(boundary);
  }

  /**
   * 알림: 바운더리 영역 해제.
   */
  dispatchFlushed(): void {
    this.subjectFlushed.next();
  }

  /**
   * 바운더리 영역 변경
   */
  updateBoundary(): void {
    const top = this.moveY;
    const left = this.moveX;
    this.dispatchBoundary({
      x: left,
      y: top,
      w: 0,
      h: 0
    });
  }

  /**
   * 셀렉션 시작.
   * @param {SelectionBound} bound
   */
  startSelection(bound: SelectionBound): void {
    const { x = 0, y = 0 } = bound;
    this.moveX = x;
    this.moveY = y;
    this.updateBoundary();
    this.removeSelectionHandler();
    this.addSelectionHandler();
  }

  /**
   * 셀렉션 종료.
   */
  endSelection(): void {
    this.moveX = 0;
    this.moveY = 0;
    this.flushSelection();
  }

  /**
   * 셀렉션 해제.
   */
  flushSelection(): void {
    this.dispatchFlushed();
    this.removeSelectionHandler();
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
