<template>
  <div>
    <example-intro>
      <template #title>JdBucketContainer 커스텀</template>
      <template #description>
        - #header: 컨테이너의 header 영역 슬롯과 목록 갱신, 직접 추가 예.
      </template>
    </example-intro>

    <jd-bucket-selection-indicate />

    <div class="exm-wrap">
      <div class="exm-box">
        <h2 class="exm-box-tit">receiverA1 - {{ groupA }}</h2>
        <div>
          <button @click="onShuffle">onShuffle</button>
          <button @click="onInsert(0)">onPrepend</button>
          <button @click="onInsert(-1)">onAppend</button>
        </div>
        <jd-bucket-container
          class="test-container"
          v-model="receiverA1.list"
          :key="receiverA1.forceRenderKey"
          :groupName="groupA"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
        >
          <jd-bucket-item
            v-for="(item, index) in receiverA1.list"
            :key="keyUidHelper(receiverA1.list, index)"
            :model="item"
            class="test-item"
          >
            {{ item }}
            <template #bside>
              <button @click="onRemove(index)">X</button>
            </template>
          </jd-bucket-item>
        </jd-bucket-container>
        <div class="test-print">{{ JSON.stringify(receiverA1.list, null, 2) }}</div>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">senderA1 - {{ groupA }}</h2>
        <div>
          <button @click="onOtherList">onOtherList</button>
        </div>
        <jd-bucket-container v-model="senderA1.list" :groupName="groupA" :receiver="false">
          <template #header>
            <my-sender-header />
          </template>

          <jd-bucket-item
            v-for="item in senderA1.list"
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
import { defineComponent, reactive, onMounted } from '@vue/composition-api';
import {
  provideJdBucketRef,
  JdBucketSelectionIndicate,
  JdBucketContainer,
  JdBucketItem
} from '@/lib-package';
import ExampleIntro from '@/components/sample/ExampleIntro.vue';
import { keyUidHelper, createTestList } from '@/components/sample/utils';
import MySenderHeader from './MySenderHeader.vue';

export default defineComponent({
  components: {
    JdBucketSelectionIndicate,
    JdBucketContainer,
    JdBucketItem,
    MySenderHeader,
    ExampleIntro
  },
  setup() {
    provideJdBucketRef();

    const groupA = 'GROUP_A';
    const receiverA1 = reactive<{ list: any[]; forceRenderKey: any }>({
      forceRenderKey: Date.now(),
      list: []
    });
    const senderA1 = reactive<{ list: any[] }>({
      list: []
    });
    const shuffle = (a: any) => {
      let j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    };
    const onShuffle = () => {
      receiverA1.list = shuffle(receiverA1.list);
      receiverA1.forceRenderKey = Date.now();
    };
    const onInsert = (idx: number) => {
      const model = createTestList(1)[0];
      model.id = Date.now();
      if (idx === 0) {
        receiverA1.list.unshift(model);
      } else if (idx === -1) {
        receiverA1.list.push(model);
      } else if (idx < receiverA1.list.length) {
        receiverA1.list.splice(idx, 0, model);
      }
    };
    const onRemove = (index: number) => {
      receiverA1.list.splice(index, 1);
    };
    let paging = 0;
    const onOtherList = () => {
      paging++;
      senderA1.list = createTestList(Math.ceil(Math.random() * 10 + 1)).map(model => {
        model.id = paging * 1000 + model.id;
        return model;
      });
    };
    onMounted(() => {
      receiverA1.list = createTestList(Math.floor(Math.random() * 5));
      senderA1.list = createTestList(Math.ceil(Math.random() * 10 + 1));
    });
    return {
      keyUidHelper,
      groupA,
      receiverA1,
      senderA1,
      onShuffle,
      onInsert,
      onRemove,
      onOtherList
    };
  }
});
</script>

<style lang="scss" scoped>
.exm-wrap {
  display: flex;
  .exm-box {
    flex: 1;
    margin: 0 5px;
  }
  .exm-box-tit {
    margin: 10px 0;
    padding: 0;
    font-size: 16px;
    font-weight: bold;
  }
}
.test-print {
  padding: 10px;
  font-size: 13px;
  white-space: pre-wrap;
  word-break: break-all;
}
.test-item {
  margin: 2px;
  padding: 10px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  &.is-selected {
    background-color: #ffe2e2;
  }
}

.test-container {
  ::v-deep .bucket-draggable {
    min-height: 140px;
  }
}
</style>
