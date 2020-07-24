<template>
  <example-split-panel>
    <jd-bucket-selection-indicate />

    <template #aside>
      <div class="panel-wrap">
        <div class="panel-item">
          <div class="head">
            <em class="tit">receiver1 - group:A</em>
          </div>
          <div class="body">
            <jd-bucket-container
              class="receive-container"
              v-model="receiverA1.list"
              :groupName="groupA"
              :receiver="true"
              :max="-1"
              :useGhostBar="true"
              :lazyChangeStateDelay="100"
            >
              <template #indicate="indicateScope">
                <custom-bucket-container-indicate
                  :isBlock="indicateScope.state.isBlock"
                  :isInsertable="indicateScope.state.isInsertable"
                  :isEmpty="indicateScope.state.isEmpty"
                />
              </template>
              <custom-bucket-item
                v-for="(item, index) in receiverA1.list"
                :key="keyUidHelper(receiverA1.list, index, item.id)"
                :model="item"
                :myIndex="index + 1"
              >
                <sample-item :name="item.name" :description="item.description" />
              </custom-bucket-item>
            </jd-bucket-container>
          </div>
        </div>
      </div>
    </template>
    <template #bside>
      <div class="panel-wrap">
        <div class="panel-item">
          <div class="head">
            <em class="tit">sender - group:A</em>
          </div>
          <div class="body">
            <jd-bucket-container
              class="sender-container"
              v-model="senderA1.list"
              :groupName="groupA"
              :receiver="false"
            >
              <custom-bucket-item
                v-for="(item, index) in senderA1.list"
                :key="item.id"
                :model="item"
                :myIndex="index + 1"
              >
                <sample-item :name="item.name" :description="item.description" />
              </custom-bucket-item>
            </jd-bucket-container>
          </div>
        </div>
      </div>
    </template>
  </example-split-panel>
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

import ExampleSplitPanel from '@/components/example/common/ExampleSplitPanel.vue';
import SampleItem from '@/components/example/common/SampleItem.vue';
import CustomBucketItem from '../common/CustomBucketItem.vue';
import CustomBucketContainerIndicate from '../common/CustomBucketContainerIndicate.vue';

const SAMPLE_NAMES = [
  'Apple',
  'Watermelon',
  'Orange',
  'Pear',
  'Cherry',
  'Strawberry',
  'Nectarine',
  'Grape',
  'Mango',
  'Blueberry',
  'Pomegranate',
  'Plum',
  'Banana',
  'Raspberry',
  'Mandarin',
  'Jackfruit',
  'Papaya',
  'Kiwi',
  'Pineapple',
  'Lime',
  'Lemon',
  'Apricot',
  'Grapefruit',
  'Melon',
  'Coconut',
  'Avocado',
  'Peach'
];

export default defineComponent({
  components: {
    JdBucketSelectionIndicate,
    JdBucketContainer,
    JdBucketItem,
    ExampleSplitPanel,
    SampleItem,
    CustomBucketItem,
    CustomBucketContainerIndicate,
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

    const getTestList = (len: number) => {
      return Array.from(Array(len)).map((item, index) => {
        const sampleLen = SAMPLE_NAMES.length - 1;
        const name = SAMPLE_NAMES[Math.round(Math.random() * sampleLen)];
        const description = [
          SAMPLE_NAMES[Math.round(Math.random() * sampleLen)],
          SAMPLE_NAMES[Math.round(Math.random() * sampleLen)],
          SAMPLE_NAMES[Math.round(Math.random() * sampleLen)]
        ]
          .join(', ')
          .toLowerCase();
        return {
          name,
          description
        };
      });
    };

    onMounted(() => {
      receiverA1.list = getTestList(3);
      receiverA2.list = getTestList(3);
      senderA1.list = getTestList(5);
      receiverB1.list = [];
      receiverB2.list = getTestList(3);
      senderB1.list = getTestList(5);
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
.panel-wrap {
  padding: 20px;
  .panel-item {
    margin-top: 20px;
    .head {
      .tit {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
      }
    }
    .body {
      margin-top: 5px;
    }
    &:first-child {
      margin-top: 0;
    }
  }
  .receive-container {
    position: relative;
    ::v-deep .bucket-draggable {
      min-height: 240px;
    }
  }
}
</style>
