export const TEST_TEXT = [
  'Apple',
  'Watermelon',
  'Orange',
  'Pear',
  'Cherry',
  'Strawberry',
  'Nectarine',
  'Grape',
  'Mango',
  'Blueberry',
  'Pomegranate',
  'Plum',
  'Banana',
  'Raspberry',
  'Mandarin',
  'Jackfruit',
  'Papaya',
  'Kiwi',
  'Pineapple',
  'Lime',
  'Lemon',
  'Apricot',
  'Grapefruit',
  'Melon',
  'Coconut',
  'Avocado',
  'Peach'
];

export const TEST_COLORS = [
  '#01a9b4',
  '#99b898',
  '#eebb4d',
  '#709fb0',
  '#fb7813',
  '#726a95',
  '#f54291',
  '#ff847c',
  '#35d0ba',
  '#679b9b',
  '#bb596b',
  '#ad6989',
  '#ffb367',
  '#7d5a5a',
  '#565d47'
];

export function createUid() {
  return Array.from(Array(24))
    .map(() => {
      return Math.random()
        .toString()
        .substr(-1);
    })
    .join('');
}

export function getTestList(len: number) {
  return Array.from(Array(len)).map((item, index) => {
    const sampleLen = TEST_TEXT.length - 1;
    const uid = createUid();
    const name = TEST_TEXT[Math.round(Math.random() * sampleLen)];
    const description = [
      TEST_TEXT[Math.round(Math.random() * sampleLen)],
      TEST_TEXT[Math.round(Math.random() * sampleLen)],
      TEST_TEXT[Math.round(Math.random() * sampleLen)]
    ]
      .join(', ')
      .toLowerCase();
    const color = TEST_COLORS[Math.round(Math.random() * (TEST_COLORS.length - 1))];
    return {
      uid,
      name,
      description,
      color
    };
  });
}
