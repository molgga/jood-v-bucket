<template>
  <div>
    <example-intro>
      <template #title>JdBucketContainer dropBefore</template>
      <template #description>- dropBefore confirm, filter 예</template>
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
          :dropBefore="onDropBeforeConfirm"
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
          class="test-container"
          v-model="receiverA2.list"
          :groupName="groupA"
          :receiver="true"
          :max="-1"
          :lazyChangeStateDelay="100"
          :dropBefore="onDropBeforeFilter"
        >
          <template #header>
            <p>id 가 홀수가 아닌것 filter</p>
          </template>
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from '@vue/composition-api';
import {
  provideJdBucketRef,
  JdBucketSelectionIndicate,
  JdBucketContainer,
  JdBucketItem,
  BucketDropBeforeParams
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
    const receiverA1 = reactive<{ list: any[] }>({
      list: []
    });
    const receiverA2 = reactive<{ list: any[] }>({
      list: []
    });
    const senderA1 = reactive<{ list: any[] }>({
      list: []
    });

    const onDropBeforeConfirm = () => {
      return confirm('Ok = merge, Cancel = ignore');
    };

    const onDropBeforeFilter = (params: BucketDropBeforeParams) => {
      const { itemRefs } = params;
      const filterRefs = itemRefs.filter(itemRef => !!(itemRef.model.id % 2));
      return filterRefs.map(itemRef => itemRef.model);
    };

    onMounted(() => {
      receiverA1.list = [];
      receiverA2.list = createTestList(Math.floor(Math.random() * 5));
      senderA1.list = createTestList(Math.ceil(Math.random() * 5 + 5));
    });
    return {
      keyUidHelper,
      groupA,
      receiverA1,
      receiverA2,
      senderA1,
      onDropBeforeConfirm,
      onDropBeforeFilter
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

.custom-drag-selection-indicate {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  color: #ffffff;
  background-color: #ff0000;
  user-select: none;
  pointer-events: none;
  z-index: 99999;
}
.custom-range-selection-indicate {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  box-sizing: border-box;
  box-shadow: inset 0 0 1px 1px rgba(25, 125, 220, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.33);
  background-color: #000000;
  opacity: 0.4;
  z-index: 99999;
}
</style>
