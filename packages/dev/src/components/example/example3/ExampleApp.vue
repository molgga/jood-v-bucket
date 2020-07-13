<template>
  <div>
    <example-intro>
      <template #title>JdBucketContainer #indicate 커스텀</template>
      <template #description>
        - isBlock: 해당 컨테이너에 드랍 불가
        <br />
        - isInsertable: 해당 컨테이너에 드랍 가능
        <br />
        - isEmpty: 해당 컨테이너가 비어있음
      </template>
    </example-intro>

    <jd-bucket-selection-indicate />

    <div class="exm-wrap">
      <div class="exm-box">
        <h2 class="exm-box-tit">receiverA1 - {{ groupA }}</h2>
        <jd-bucket-container
          class="test-container"
          v-model="receiverA1.list"
          :groupName="groupA"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
        >
          <template #indicate="indicateScope">
            <custom-bucket-container-indicate
              :isBlock="indicateScope.state.isBlock"
              :isInsertable="indicateScope.state.isInsertable"
              :isEmpty="indicateScope.state.isEmpty"
            />
          </template>

          <jd-bucket-item
            v-for="(item, index) in receiverA1.list"
            :key="keyUidHelper(receiverA1.list, index)"
            :model="item"
            class="test-item"
            >{{ item }}</jd-bucket-item
          >
        </jd-bucket-container>
      </div>
      <div class="exm-box">
        <h2 class="exm-box-tit">receiverA2 - {{ groupA }}</h2>
        <jd-bucket-container
          class="test-container"
          v-model="receiverA2.list"
          :groupName="groupA"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
        >
          <template #indicate="indicateScope">
            <custom-bucket-container-indicate
              :isBlock="indicateScope.state.isBlock"
              :isInsertable="indicateScope.state.isInsertable"
              :isEmpty="indicateScope.state.isEmpty"
            />
          </template>

          <jd-bucket-item
            v-for="(item, index) in receiverA2.list"
            :key="keyUidHelper(receiverA2.list, index)"
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
import CustomBucketContainerIndicate from './CustomBucketContainerIndicate.vue';

export default defineComponent({
  components: {
    JdBucketSelectionIndicate,
    JdBucketContainer,
    JdBucketItem,
    CustomBucketContainerIndicate,
    ExampleIntro
  },
  setup() {
    provideJdBucketRef();

    const groupA = 'GROUP_A';
    const receiverA1 = reactive<{ list: any[] }>({
      list: []
    });
    const receiverA2 = reactive<{ list: any[] }>({
      list: []
    });
    const senderA1 = reactive<{ list: any[] }>({
      list: []
    });
    onMounted(() => {
      receiverA1.list = [];
      receiverA2.list = createTestList(Math.floor(Math.random() * 5));
      senderA1.list = createTestList(Math.ceil(Math.random() * 10 + 1));
    });
    return {
      keyUidHelper,
      groupA,
      receiverA1,
      receiverA2,
      senderA1
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

.test-container {
  ::v-deep .bucket-draggable {
    min-height: 140px;
  }
}
</style>
