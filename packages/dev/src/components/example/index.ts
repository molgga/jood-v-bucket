export const ExampleList = [
  {
    key: 'sample1',
    label: 'sample all #1',
    component: () => import('@/components/example/example-sample1/ExampleApp.vue')
  },
  {
    key: 'selection-drag',
    label: 'custom selection drag',
    component: () => import('@/components/example/example-selection-drag/ExampleApp.vue')
  },
  {
    key: 'container-indicate',
    label: 'custom container indicate',
    component: () => import('@/components/example/example-container-indicate/ExampleApp.vue')
  },
  {
    key: 'container-inject',
    label: 'container inject',
    component: () => import('@/components/example/example-container-inject/ExampleApp.vue')
  },
  {
    key: 'item-inject',
    label: 'item inject',
    component: () => import('@/components/example/example-item-inject/ExampleApp.vue')
  }
];
export const ExampleApps = (() => {
  const hash: any = {};
  ExampleList.forEach(example => {
    hash[example.key] = example;
  });
  return hash;
})();

export const exampleLinks = (() => {
  const links = [];
  for (const key in ExampleApps) {
    const example = (ExampleApps as any)[key];
    links.push({ to: `/example/${key}`, label: example.label });
  }
  return links;
})();
