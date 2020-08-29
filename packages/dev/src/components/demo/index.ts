export const DemoList = [
  {
    key: 'sample1',
    label: 'sample',
    component: () => import('@/components/demo/demo-sample1/DemoApp.vue')
  },
  {
    key: 'selection-drag',
    label: 'custom selection drag',
    component: () => import('@/components/demo/demo-selection-drag/DemoApp.vue')
  },
  {
    key: 'container-indicate',
    label: 'custom container indicate',
    component: () => import('@/components/demo/demo-container-indicate/DemoApp.vue')
  },
  {
    key: 'container-inject',
    label: 'container inject',
    component: () => import('@/components/demo/demo-container-inject/DemoApp.vue')
  },
  {
    key: 'item-inject',
    label: 'item inject',
    component: () => import('@/components/demo/demo-item-inject/DemoApp.vue')
  }
];
export const DemoApps = (() => {
  const hash: any = {};
  DemoList.forEach(demo => {
    hash[demo.key] = demo;
  });
  return hash;
})();

export const demoLinks = (() => {
  const links = [];
  for (const key in DemoApps) {
    const demo = (DemoApps as any)[key];
    links.push({ to: `/demo/${key}`, label: demo.label });
  }
  return links;
})();
