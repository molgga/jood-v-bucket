export const ExampleApps = {
  '1': {
    label: 'example1',
    component: () => import('@/components/example/example1/ExampleApp.vue')
  },
  '2': {
    label: 'example2',
    component: () => import('@/components/example/example2/ExampleApp.vue')
  },
  '3': {
    label: 'example3',
    component: () => import('@/components/example/example3/ExampleApp.vue')
  },
  '4': {
    label: 'example4',
    component: () => import('@/components/example/example4/ExampleApp.vue')
  },
  '5': {
    label: 'example5',
    component: () => import('@/components/example/example5/ExampleApp.vue')
  },
  '6': {
    label: 'example6',
    component: () => import('@/components/example/example6/ExampleApp.vue')
  },
  '7': {
    label: 'example7',
    component: () => import('@/components/example/example7/ExampleApp.vue')
  },
  '8': {
    label: 'example8',
    component: () => import('@/components/example/example8/ExampleApp.vue')
  },
  '9': {
    label: 'example9',
    component: () => import('@/components/example/example9/ExampleApp.vue')
  },
  '10': {
    label: 'example10',
    component: () => import('@/components/example/example10/ExampleApp.vue')
  },
  usecase1: {
    label: 'usecase',
    component: () => import('@/components/example/example-usecase1/ExampleApp.vue')
  }
};

export const exampleLinks = (() => {
  const links = [];
  for (const key in ExampleApps) {
    const example = (ExampleApps as any)[key];
    links.push({ to: `/example/${key}`, label: example.label });
  }
  return links;
})();
