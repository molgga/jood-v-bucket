<template>
  <div>
    <jd-bucket-selection-indicate />

    <div class="exm-wrap">
      <div class="exm-box">
        <h2 class="exm-box-tit">receiver</h2>
        <jd-bucket-container
          v-model="receiverA1.list"
          :groupName="groupName"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
        >
          <custom-bucket-item
            v-for="(item, index) in receiverA1.list"
            :key="keyUidHelper(receiverA1.list, item.id)"
            :model="item"
            :myIndex="index + 1"
          >
            <div>{{ item }}</div>
          </custom-bucket-item>
        </jd-bucket-container>
        <div class="test-print">{{ JSON.stringify(receiverA1.list, null, 2) }}</div>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">receiver</h2>
        <jd-bucket-container
          v-model="receiverA2.list"
          :groupName="groupName"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
        >
          <custom-bucket-item
            v-for="(item, index) in receiverA2.list"
            :key="keyUidHelper(receiverA2.list, index)"
            :model="item"
            :myIndex="index + 1"
          >
            <div>{{ item }}</div>
          </custom-bucket-item>
        </jd-bucket-container>
        <div class="test-print">{{ JSON.stringify(receiverA2.list, null, 2) }}</div>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">sender</h2>
        <jd-bucket-container v-model="senderA1.list" :groupName="groupName" :receiver="false">
          <custom-bucket-item
            v-for="(item, index) in senderA1.list"
            :key="item.id"
            :model="item"
            :myIndex="index + 1"
          >
            <div>{{ item }}</div>
          </custom-bucket-item>
        </jd-bucket-container>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">sender</h2>
        <jd-bucket-container v-model="senderA2.list" :groupName="groupName" :receiver="false">
          <custom-bucket-item
            v-for="(item, index) in senderA2.list"
            :key="item.id"
            :model="item"
            :myIndex="index + 1"
          >
            <div>{{ item }}</div>
          </custom-bucket-item>
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
import { keyUidHelper, createTestList } from '@/components/sample/utils';
import CustomBucketItem from './CustomBucketItem.vue';

export default defineComponent({
  components: {
    JdBucketSelectionIndicate,
    JdBucketContainer,
    JdBucketItem,
    CustomBucketItem
  },
  setup() {
    provideJdBucketRef();

    const groupName = 'GROUP_NAME';
    const receiverA1 = reactive<{ list: any[] }>({
      list: []
    });
    const receiverA2 = reactive<{ list: any[] }>({
      list: []
    });
    const senderA1 = reactive<{ list: any[] }>({
      list: []
    });
    const senderA2 = reactive<{ list: any[] }>({
      list: []
    });
    onMounted(() => {
      receiverA1.list = createTestList(Math.floor(Math.random() * 5));
      receiverA2.list = createTestList(Math.floor(Math.random() * 5));
      senderA1.list = createTestList(10).map(model => {
        model.type = 'A';
        return model;
      });
      senderA2.list = createTestList(10).map(model => {
        model.type = 'B';
        return model;
      });
    });

    return {
      keyUidHelper,
      groupName,
      receiverA1,
      receiverA2,
      senderA1,
      senderA2
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
</style>
