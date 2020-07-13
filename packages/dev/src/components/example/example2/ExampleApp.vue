<template>
  <div>
    <example-intro>
      <template #title>JdBucketItem 커스텀</template>
      <template #description>JdBucketItem 커스텀, UI 변경, 기능 추가 예</template>
    </example-intro>

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
            :key="keyUidHelper(receiverA1.list, index)"
            :model="item"
            :myIndex="index + 1"
          >
            <div>{{ item }}</div>
          </custom-bucket-item>
        </jd-bucket-container>
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

export default defineComponent({
  components: {
    JdBucketSelectionIndicate,
    JdBucketContainer,
    JdBucketItem,
    CustomBucketItem,
    ExampleIntro
  },
  setup() {
    provideJdBucketRef();

    const groupName = 'GROUP_NAME';
    const receiverA1 = reactive<{ list: any[] }>({
      list: []
    });
    const senderA1 = reactive<{ list: any[] }>({
      list: []
    });
    onMounted(() => {
      receiverA1.list = createTestList(Math.floor(Math.random() * 5));
      senderA1.list = createTestList(Math.ceil(Math.random() * 10 + 1));
    });
    return {
      keyUidHelper,
      groupName,
      receiverA1,
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
</style>
