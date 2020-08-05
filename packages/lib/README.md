# @jood/v-bucket

Vue bucket 기능 UI

*** 

![TRAVIS](https://travis-ci.org/molgga/jood-v-bucket.svg?branch=master)
![NPM version](https://img.shields.io/npm/v/@jood/v-bucket.svg)
![NPM license](https://img.shields.io/npm/l/@jood/v-bucket)
![NPM download](https://img.shields.io/npm/dt/@jood/v-bucket)
![NPM bundle size](https://img.shields.io/bundlephobia/min/@jood/v-bucket)

***

## Get started

### npm install

```typescript
$ npm install @jood/v-bucket
```

### main.ts

```typescript
import '@jood/v-bucket/dist/v-bucket.css';
```

### App.vue

```javascript
<template>
  <div>
    <jd-bucket-selection-indicate /> <!-- selection, drag ui -->
    <some-view testGroupName="A" />
    <some-view testGroupName="B" />
  </div>
</template>

<script lang="ts">
import {
  provideJdBucketRef,
  JdBucketSelectionIndicate,
} from '@jood/v-bucket';
import SomeView from './SomeView.vue';
export default {
  components: {
    JdBucketSelectionIndicate,
    SomeView,
  },
  setup() {
    provideJdBucketRef(); // bucket provider
    return {}
  }
}
</script>
```

### SomeView.vue
```typescript
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

***

### See 

- [Example(web)](https://molgga.github.io/jood-v-bucket).
- [Example(source)](https://github.com/molgga/jood-v-bucket/tree/master/packages/dev/src/components/example).
- [Github](https://github.com/molgga/jood-v-bucket).
- [NPM](https://www.npmjs.com/package/@jood/v-bucket).
- [Doc](https://molgga.github.io/jood-v-bucket/documents).

***
