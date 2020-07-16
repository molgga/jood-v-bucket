# @jood/v-bucket

Vue bucket 기능 UI

## Get started

### npm install

```javascript
$ npm install @jood/v-bucket
```

### main.ts

```javascript
import '@jood/v-bucket/dist/v-bucket.css';
```

### App.vue

```javascript
<template>
  <div>
    <jd-bucket-selection-indicate /> <!-- selection, drag ui -->
    <some-view />
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
```javascript
<template>
  <div>
    <div>
      <h2>receiver</h2>
      <jd-bucket-container
        v-model="receiverA1.list"
        :groupName="groupA"
        :receiver="true">
        <jd-bucket-item
          v-for="(item, index) in receiverA1.list"
          :key="`${index}_${item.id}`"
          :model="item"
        >{{ item }}</jd-bucket-item>
      </jd-bucket-container>
    </div>
    <div>
      <h2>sender</h2>
      <jd-bucket-container 
        v-model="senderA1.list" 
        :groupName="groupA" 
        :receiver="false">
        <jd-bucket-item
          v-for="item in senderA1.list"
          :key="item.id"
          :model="item"
        >{{ item }}</jd-bucket-item>
      </jd-bucket-container>
    </div>
  </div>
</template>
<script lang="ts">
import {
  JdBucketContainer,
  JdBucketItem
} from '@jood/v-bucket';

export default {
  components: {
    JdBucketContainer,
    JdBucketItem,
  },
  setup() {
    const groupA = 'GROUP_A';
    const receiverA1 = reactive<{ list: any[] }>({
      list: [{id:1}]
    });
    const senderA1 = reactive<{ list: any[] }>({
      list: [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}]
    });
    return {
      groupA,
      receiverA1,
      senderA1,
    };
  }
}
</script>
```

***

### See 

- [Example(source)](https://github.com/molgga/jood-v-bucket/tree/master/packages/dev/src/components/example).
- [Example(doc)](https://molgga.github.io/jood-v-bucket/dist-example).
- [Doc](https://molgga.github.io/jood-v-bucket).
- [Github](https://github.com/molgga/jood-v-bucket).
- [NPM](https://www.npmjs.com/package/@jood/v-bucket).

