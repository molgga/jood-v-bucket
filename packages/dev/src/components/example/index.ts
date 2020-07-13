export const ExampleApps = {
  '1': () => import('@/components/example/example1/ExampleApp.vue'),
  '2': () => import('@/components/example/example2/ExampleApp.vue'),
  '3': () => import('@/components/example/example3/ExampleApp.vue'),
  '4': () => import('@/components/example/example4/ExampleApp.vue'),
  '5': () => import('@/components/example/example5/ExampleApp.vue'),
  '6': () => import('@/components/example/example6/ExampleApp.vue'),
  '7': () => import('@/components/example/example7/ExampleApp.vue'),
  '8': () => import('@/components/example/example8/ExampleApp.vue')
};

export const exampleLinks = (() => {
  const links = [];
  for (const key in ExampleApps) {
    links.push({ to: `/example/${key}`, label: `example-${key}` });
  }
  return links;
})();
