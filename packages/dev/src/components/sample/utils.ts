export function createUid() {
  return Array.from(Array(24))
    .map(() => {
      return Math.random()
        .toString()
        .substr(-1);
    })
    .join('');
}

export function keyUidHelper(vList: any, index: any) {
  let uid: any;
  try {
    uid = index + '_' + vList[index].__ob__.dep.id;
  } catch (err) {
    uid = createUid();
  }
  return uid;
}

export function createTestModel(id: number) {
  return { id, type: '' };
}

export function createTestList(len = 5) {
  return Array.from(Array(len)).map((item, index) => {
    return createTestModel(index);
  });
}
