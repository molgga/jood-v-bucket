import { defineAsyncComponent } from 'vue';

export const DemoList = [
  {
    key: 'sample1',
    label: 'Sample bucket group',
    component: defineAsyncComponent(() => import('@/components/demo-vue3/demo-sample1/DemoApp.vue'))
  },
  {
    key: 'selection-drag',
    label: 'Custom SelectionDrag',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-selection-drag/DemoApp.vue')
    )
  },
  {
    key: 'container-indicate',
    label: 'Custom ContainerIndicate',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-container-indicate/DemoApp.vue')
    )
  },
  {
    key: 'container-inject',
    label: 'Inject bucket-container-ref',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-container-inject/DemoApp.vue')
    )
  },
  {
    key: 'item-inject',
    label: 'Inject bucket-item-ref',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-item-inject/DemoApp.vue')
    )
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
