interface IntercentRange {
  start: number;
  end: number;
}

/**
 * uuid 발급
 */
export const createUid = () => {
  return Array.from(Array(24))
    .map(() => {
      return Math.random()
        .toString()
        .substr(-1);
    })
    .join('');
};

/**
 * 축 교차점 비교
 * one 의 { start, end } 와 other 의 { start, end } 를 비교
 * @param one {IntercentRange}
 * @param other {IntercentRange}
 */
export const intersect = (one: IntercentRange, other: IntercentRange) => {
  if (one.start >= other.end || other.start >= one.end) {
    return { start: 0, end: 0 };
  }
  const start = Math.max(one.start, other.start);
  const end = Math.min(one.end, other.end);
  if (end - start <= 0) {
    return { start: 0, end: 0 };
  }
  return { start, end };
};

/**
 * intercet 를 이용해 hitTest
 *
 * const A = { x: 0, w: 100, y: 0, h: 20 }
 * const B = { x: 90, w: 100, y: 30, h: 20 }
 * console.log(intercet({ start: A.x, end: A.x + A.w }, { start: B.x, end: B.x + B.w })) // x 축 교차됨
 * console.log(intercet({ start: A.y, end: A.y + A.h }, { start: B.y, end: B.y + B.h })) // y 축 교차하지 않음
 * console.log('A 와 B 는 겹치지 않음')
 * @param one {IntercentRange}
 * @param other {IntercentRange}
 */
export const isIntersect = (one: IntercentRange, other: IntercentRange) => {
  const sect = intersect(one, other);
  return sect.start !== 0 || sect.end !== 0;
};

/**
 * touch 환경인지 여부
 */
export const isTouchable = (): boolean => {
  return !!('ontouchstart' in document.documentElement);
};

/**
 * MouseEvent, TouchEvent 의 absolute x, y 반환
 */
export const getTouchPosition = (evt: MouseEvent | TouchEvent): { x: number; y: number } | null => {
  if (!evt) return null;
  if (evt.constructor === MouseEvent) {
    return {
      // x: evt.clientX + window.pageXOffset,
      // y: evt.clientY + window.pageYOffset
      x: evt.clientX,
      y: evt.clientY
    };
  } else if (evt.constructor === TouchEvent) {
    const touch = evt.touches[0];
    return {
      // x: touch.clientX + window.pageXOffset,
      // y: touch.clientY + window.pageYOffset,
      x: touch.clientX,
      y: touch.clientY
    };
  }
  return null;
};
