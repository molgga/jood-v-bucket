<template>
  <example-split-panel width="33.33%">
    <jd-bucket-selection-indicate />

    <template #aside>
      <div class="panel-wrap">
        <div class="panel-item">
          <div class="head">
            <em class="tit">receiverA1 - groupA</em>
          </div>
          <div class="body">
            <div class="body-bucket">
              <jd-bucket-container
                class="receive-container"
                v-model="receiverA1.list"
                :groupName="groupA"
                :receiver="true"
                :max="5"
                :useGhostBar="true"
                :lazyChangeStateDelay="100"
              >
                <template #header>
                  <receiver-header />
                </template>
                <custom-bucket-item
                  v-for="(item, index) in receiverA1.list"
                  :key="`${item.uid}_${index}`"
                  :model="item"
                  :myIndex="index + 1"
                >
                  <sample-item
                    :name="item.name"
                    :description="item.description"
                    :color="item.color"
                  />
                </custom-bucket-item>
              </jd-bucket-container>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #bside>
      <div class="panel-wrap">
        <div class="panel-item">
          <div class="head">
            <em class="tit">senderA - groupA</em>
          </div>
          <div class="body">
            <div class="body-bucket">
              <jd-bucket-container
                class="sender-container"
                v-model="senderA1.list"
                :groupName="groupA"
                :receiver="false"
              >
                <template #header>
                  <sender-header />
                </template>
                <custom-bucket-item
                  v-for="(item, index) in senderA1.list"
                  :key="item.uid"
                  :model="item"
                  :myIndex="index + 1"
                >
                  <sample-item
                    :name="item.name"
                    :description="item.description"
                    :color="item.color"
                  />
                </custom-bucket-item>
              </jd-bucket-container>
            </div>
          </div>
        </div>
      </div>
    </template>
  </example-split-panel>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import {
  provideJdBucketRef,
  JdBucketSelectionIndicate,
  JdBucketContainer,
  JdBucketItem,
  BucketDropBeforeParams
} from '@jood/v-bucket';
import { getTestList } from '../common/testModel';
import ExampleSplitPanel from '../common/ExampleSplitPanel.vue';
import CustomBucketItem from '../common/CustomBucketItem.vue';
import SampleItem from '../common/SampleItem.vue';
import SenderHeader from './SenderHeader.vue';
import ReceiverHeader from './ReceiverHeader.vue';

export default defineComponent({
  components: {
    JdBucketSelectionIndicate,
    JdBucketContainer,
    JdBucketItem,
    ExampleSplitPanel,
    SampleItem,
    CustomBucketItem,
    SenderHeader,
    ReceiverHeader
  },
  setup() {
    provideJdBucketRef();

    const groupA = 'GROUP_A';
    const receiverA1 = reactive<any>({
      list: []
    });
    const senderA1 = reactive<any>({
      list: []
    });

    onMounted(() => {
      receiverA1.list = [];
      senderA1.list = getTestList(5);
    });

    return {
      groupA,
      receiverA1,
      senderA1
    };
  }
});
</script>

<style lang="scss" scoped>
.panel-wrap {
  padding: 20px;
  .panel-item {
    margin-top: 20px;
    padding-top: 20px;
    &:first-child {
      padding-top: 0;
      margin-top: 0;
    }
    .head {
      .tit {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
      }
    }
    .body {
      display: flex;
      margin-top: 5px;
      .body-bucket {
        flex: 1;
        min-width: 0;
        .test-info {
          margin: 5px 0;
          text-align: right;
        }
      }
      .body-opt {
        padding: 10px;
        width: 280px;
      }
    }
    &:first-child {
      margin-top: 0;
    }
  }
  .receive-container {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    ::v-deep(.bucket-draggable) {
      min-height: 200px;
    }
  }
  .sender-container {
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
  }
}
</style>
