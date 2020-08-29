# @jood/v-bucket

It provides model management function between containers by drag & drop. \
The goal is to provide a foundation for data communication and progressive control between component groups by drag & drop.

This is a dedicated package for Vue using Vue, composition-api, rxjs, draggable.
(When Vue3 is supported, the composition-api dependency will be removed.)

> __[Demo](https://molgga.github.io/jood-v-bucket)__
| __[Demo source code](https://github.com/molgga/jood-v-bucket/tree/master/packages/dev/src/components/example)__
| __[Documentation](https://molgga.github.io/jood-v-bucket/documents)__
| __[Github](https://github.com/molgga/jood-v-bucket)__
| __[NPM](https://www.npmjs.com/package/@jood/v-bucket)__
\
\
![Vue](https://img.shields.io/static/v1.svg?label=&style=flat-square&logoColor=white&color=4fc08d&logo=vue.js&message=Vue)
![Typescript](https://img.shields.io/static/v1.svg?label=&style=flat-square&logoColor=white&color=3178c6&logo=typescript&message=Typescript)
![TRAVIS](https://travis-ci.org/molgga/jood-v-bucket.svg?branch=master)
![NPM version](https://img.shields.io/npm/v/@jood/v-bucket.svg)
![NPM license](https://img.shields.io/npm/l/@jood/v-bucket)
![NPM download](https://img.shields.io/npm/dt/@jood/v-bucket)
![NPM bundle size](https://img.shields.io/bundlephobia/min/@jood/v-bucket)

<table style="table-layout: fixed; overflow-wrap: break-word;">
  <tbody>
    <tr>
      <td>
        <img src="https://user-images.githubusercontent.com/2731262/90954882-91865400-e4b3-11ea-8e28-920a165c499a.gif" alt="@jood/v-bucket demo 1" style="max-width: 100%;" />
      </td>
      <td>
        <img src="https://user-images.githubusercontent.com/2731262/90954928-e924bf80-e4b3-11ea-9a98-75fe7cd69355.gif" alt="@jood/v-bucket demo 2" style="max-width: 100%;" />
      </td>
    </tr>
  </tbody>
</table>

***

## 시작하기

```typescript
$ npm install @jood/v-bucket
```

### main.ts

```typescript
import '@jood/v-bucket/dist/v-bucket.css';
```

### App.vue

```html
<template>
  <div>
    <jd-bucket-selection-indicate /> <!-- range, drag 선택 영역 관리를 위한 UI -->
    <some-view testGroupName="A" />
    <some-view testGroupName="B" />
  </div>
</template>

<script lang="ts">
import { provideJdBucketRef, JdBucketSelectionIndicate } from '@jood/v-bucket';
import SomeView from './SomeView.vue';
export default {
  components: {
    JdBucketSelectionIndicate,
    SomeView,
  },
  setup() {
    provideJdBucketRef();
    return {}
  }
}
</script>
```

### SomeView.vue
```html
<template>
  <div>
    <h2>group - {{ testGroupName }}</h2>
    <div class="test-wrap">
      <div class="test-one">
        <h3>receiver 1</h3>

        <jd-bucket-container
          v-model="receiver1.list"
          :groupName="testGroupName"
          :receiver="true"
          :useGhostBar="true"
        >
          <jd-bucket-item
            v-for="(item, index) in receiver1.list"
            :key="`${index}_${item.id}`"
            :model="item"
            class="test-item"
            >{{ item }}</jd-bucket-item
          >
        </jd-bucket-container>
      </div>
      <div class="test-one">
        <h3>receiver 2</h3>
        <jd-bucket-container
          v-model="receiver2.list"
          :groupName="testGroupName"
          :receiver="true"
          :useGhostBar="true"
        >
          <jd-bucket-item
            v-for="(item, index) in receiver2.list"
            :key="`${index}_${item.id}`"
            :model="item"
            class="test-item"
            >{{ item }}</jd-bucket-item
          >
        </jd-bucket-container>
      </div>
      <div class="test-one">
        <h3>sender</h3>
        <jd-bucket-container v-model="sender1.list" :groupName="testGroupName" :receiver="false">
          <jd-bucket-item
            v-for="item in sender1.list"
            :key="item.id"
            :model="item"
            class="test-item"
            >{{ item }}</jd-bucket-item
          >
        </jd-bucket-container>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive } from '@vue/composition-api';
import { JdBucketContainer, JdBucketItem } from '@jood/v-bucket';
function createTestList(len = 5) {
  return Array.from(Array(len)).map((item, index) => {
    return { id: index };
  });
}
export default {
  components: {
    JdBucketContainer,
    JdBucketItem,
  },
  props: {
    testGroupName: {
      type: String,
      default: 'A',
    },
  },
  setup() {
    const receiver1 = reactive({ list: createTestList(Math.floor(Math.random() * 5)) });
    const receiver2 = reactive({ list: createTestList(Math.floor(Math.random() * 5)) });
    const sender1 = reactive({ list: createTestList() });
    return {
      receiver1,
      receiver2,
      sender1,
    };
  },
};
</script>
<style lang="scss">
.test-wrap {
  display: flex;
  width: 100%;
}
.test-one {
  flex: 1;
}
.test-item {
  margin: 2px;
  padding: 5px;
  border: 1px solid #cccccc;
  &.is-selected {
    border-color: #ff0000;
  }
}
</style>
```
