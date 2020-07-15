<template>
  <div>
    <example-intro>
      <template #title>JdBucket</template>
      <template #description>
        <div>
          버킷(receiver 와 sender)간의 데이터를 옮기기 위한 도구.
          <br />sender 는 데이터를 전달 하는 역할을 하고, reveiver 는 데이터를 전달 받는 역할만 함.
          <br />목록간의 데이터 이동을 위한 transfer 와는 목적이 다름.
        </div>
        <div>
          <strong>JdBucketContainer 한 개의 컨테이너</strong>
          <br />- receiver: 아이템을 받는 역할. 자체 소팅/드랍시 filter훅/max 등 지원. <br />-
          sender: 아이템을 전달해주는 역할. 멀티 셀렉트 등 지원. <br />- groupName: receiver &lt;===
          (groupName) === sender 동일한 그룹명간 전달 가능.
        </div>
      </template>
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
        >
          <jd-bucket-item
            v-for="(item, index) in receiverA1.list"
            :key="keyUidHelper(receiverA1.list, index, item.id)"
            :model="item"
            class="test-item"
            >{{ item }}</jd-bucket-item
          >
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
        >
          <jd-bucket-item
            v-for="(item, index) in receiverA2.list"
            :key="keyUidHelper(receiverA2.list, index, item.id)"
            :model="item"
            class="test-item"
            >{{ item }}</jd-bucket-item
          >
        </jd-bucket-container>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">senderA1 - {{ groupA }}</h2>
        <jd-bucket-container v-model="senderA1.list" :groupName="groupA" :receiver="false">
          <jd-bucket-item
            v-for="item in senderA1.list"
            :key="item.id"
            :model="item"
            class="test-item"
            >{{ item }}</jd-bucket-item
          >
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
        >
          <jd-bucket-item
            v-for="(item, index) in receiverB1.list"
            :key="keyUidHelper(receiverB1.list, index, item.id)"
            :model="item"
            class="test-item"
            >{{ item }}</jd-bucket-item
          >
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
        >
          <jd-bucket-item
            v-for="(item, index) in receiverB2.list"
            :key="keyUidHelper(receiverB2.list, index, item.id)"
            :model="item"
            class="test-item"
            >{{ item }}</jd-bucket-item
          >
        </jd-bucket-container>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">senderB1 - {{ groupB }}</h2>
        <jd-bucket-container v-model="senderB1.list" :groupName="groupB" :receiver="false">
          <jd-bucket-item
            v-for="item in senderB1.list"
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

export default defineComponent({
  components: {
    JdBucketSelectionIndicate,
    JdBucketContainer,
    JdBucketItem,
    ExampleIntro
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
