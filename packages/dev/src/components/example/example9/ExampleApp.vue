<template>
  <div>
    <example-intro>
      <template #title>JdBucket</template>
    </example-intro>

    <jd-bucket-selection-indicate />

    <div class="exm-wrap">
      <div class="exm-box">
        <h2 class="exm-box-tit">receiverA1 - {{ groupA }}</h2>
        <jd-bucket-container
          v-model="receiverA1.list"
          :groupName="groupA"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
          :useGhostBar="true"
        >
          <custom-bucket-item
            v-for="(item, index) in receiverA1.list"
            :key="keyUidHelper(receiverA1.list, index, item.id)"
            :model="item"
            :myIndex="index + 1"
          >
            <div>{{ item }}</div>
          </custom-bucket-item>
        </jd-bucket-container>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">receiverA2 - {{ groupA }}</h2>
        <jd-bucket-container
          v-model="receiverA2.list"
          :groupName="groupA"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
          :useGhostBar="true"
        >
          <custom-bucket-item
            v-for="(item, index) in receiverA2.list"
            :key="keyUidHelper(receiverA2.list, index, item.id)"
            :model="item"
            :myIndex="index + 1"
          >
            <div>{{ item }}</div>
          </custom-bucket-item>
        </jd-bucket-container>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">senderA1 - {{ groupA }}</h2>
        <jd-bucket-container v-model="senderA1.list" :groupName="groupA" :receiver="false">
          <template #header>
            <my-sender-header />
          </template>
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
        <h2 class="exm-box-tit">receiverB1 - {{ groupB }}</h2>
        <jd-bucket-container
          v-model="receiverB1.list"
          :groupName="groupB"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
          :useGhostBar="true"
        >
          <custom-bucket-item
            v-for="(item, index) in receiverB1.list"
            :key="keyUidHelper(receiverB1.list, index, item.id)"
            :model="item"
            :myIndex="index + 1"
          >
            <div>{{ item }}</div>
          </custom-bucket-item>
        </jd-bucket-container>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">receiverB2 - {{ groupB }}</h2>
        <jd-bucket-container
          v-model="receiverB2.list"
          :groupName="groupB"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
          :useGhostBar="true"
        >
          <custom-bucket-item
            v-for="(item, index) in receiverB2.list"
            :key="keyUidHelper(receiverB2.list, index, item.id)"
            :model="item"
            :myIndex="index + 1"
          >
            <div>{{ item }}</div>
          </custom-bucket-item>
        </jd-bucket-container>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">senderB1 - {{ groupB }}</h2>
        <jd-bucket-container v-model="senderB1.list" :groupName="groupB" :receiver="false">
          <template #header>
            <my-sender-header />
          </template>
          <custom-bucket-item
            v-for="(item, index) in senderB1.list"
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
import ExampleIntro from '@/components/sample/ExampleIntro.vue';
import { keyUidHelper, createTestList } from '@/components/sample/utils';
import CustomBucketItem from './CustomBucketItem.vue';
import MySenderHeader from './MySenderHeader.vue';

export default defineComponent({
  components: {
    JdBucketSelectionIndicate,
    JdBucketContainer,
    JdBucketItem,
    ExampleIntro,
    MySenderHeader,
    CustomBucketItem
  },
  setup() {
    provideJdBucketRef();

    const groupA = 'GROUP_A';
    const groupB = 'GROUP_B';
    const receiverA1 = reactive<{ list: any[] }>({
      list: []
    });
    const receiverA2 = reactive<{ list: any[] }>({
      list: []
    });
    const receiverB1 = reactive<{ list: any[] }>({
      list: []
    });
    const receiverB2 = reactive<{ list: any[] }>({
      list: []
    });
    const senderA1 = reactive<{ list: any[] }>({
      list: []
    });
    const senderB1 = reactive<{ list: any[] }>({
      list: []
    });
    onMounted(() => {
      receiverA1.list = [];
      receiverA2.list = createTestList(Math.floor(Math.random() * 5));
      senderA1.list = createTestList(Math.ceil(Math.random() * 10 + 1));
      receiverB1.list = [];
      receiverB2.list = createTestList(Math.floor(Math.random() * 5));
      senderB1.list = createTestList(Math.ceil(Math.random() * 10 + 1));
    });
    return {
      keyUidHelper,
      groupA,
      groupB,
      receiverA1,
      receiverA2,
      senderA1,
      receiverB1,
      receiverB2,
      senderB1
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
.test-item {
  margin: 2px;
  padding: 10px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  &.is-selected {
    background-color: #ffe2e2;
  }
}
</style>
