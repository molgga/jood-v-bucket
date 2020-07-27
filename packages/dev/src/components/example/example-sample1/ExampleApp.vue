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
            <div class="body-opt">
              <div>
                <v-switch v-model="receiverA1.useGhostBar" label="use indicate bar" />
                <v-switch v-model="receiverA1.dropBeforeFilter" label="custom duplicate filter" />

                <v-text-field
                  v-model="receiverA1.max"
                  hide-details
                  label="max"
                  placeholder="Placeholder"
                  :min="-1"
                  :max="10"
                  type="number"
                />
              </div>
            </div>
            <div class="body-bucket">
              <jd-bucket-container
                class="receive-container"
                v-model="receiverA1.list"
                :key="[receiverA1.useGhostBar,receiverA1.dropBeforeFilter,receiverA1.max].join('_')"
                :groupName="groupA"
                :receiver="true"
                :max="parseInt(receiverA1.max)"
                :useGhostBar="receiverA1.useGhostBar"
                :lazyChangeStateDelay="100"
                :dropBefore="(receiverA1.dropBeforeFilter ? onDropBeforeFilter : null)"
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

        <div class="panel-item">
          <div class="head">
            <em class="tit">receiverA2 - groupA</em>
          </div>
          <div class="body">
            <jd-bucket-container
              class="receive-container"
              v-model="receiverA2.list"
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
                v-for="(item, index) in receiverA2.list"
                :key="`${item.uid}_${index}`"
                :model="item"
                :myIndex="index + 1"
              >
                <sample-item :name="item.name" :description="item.description" :color="item.color" />
              </custom-bucket-item>
            </jd-bucket-container>
          </div>
        </div>

        <div class="panel-item">
          <div class="head">
            <em class="tit">receiverB1 - groupB</em>
          </div>
          <div class="body">
            <jd-bucket-container
              class="receive-container"
              v-model="receiverB1.list"
              :groupName="groupB"
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
                v-for="(item, index) in receiverB1.list"
                :key="`${item.uid}_${index}`"
                :model="item"
                :myIndex="index + 1"
              >
                <sample-item :name="item.name" :description="item.description" :color="item.color" />
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
            <em class="tit">senderA - groupA</em>
          </div>
          <div class="body">
            <div class="body-bucket">
              <div class="test-info">
                <v-chip :ripple="false" :label="true" :small="true">multiple: true (rangeSelection)</v-chip>
              </div>
              <jd-bucket-container
                class="sender-container"
                v-model="senderA1.list"
                :groupName="groupA"
                :receiver="false"
                :multiple="true"
                :rangeSelection="true"
              >
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

        <div class="panel-item">
          <div class="head">
            <em class="tit">senderB - groupB</em>
          </div>
          <div class="body">
            <div class="body-bucket">
              <div class="test-info">
                <v-chip :ripple="false" :label="true" :small="true">multiple: false</v-chip>
              </div>
              <jd-bucket-container
                class="sender-container"
                v-model="senderB1.list"
                :groupName="groupB"
                :receiver="false"
                :multiple="false"
              >
                <custom-bucket-item
                  v-for="(item, index) in senderB1.list"
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
import { defineComponent, reactive, onMounted } from '@vue/composition-api';
import {
  provideJdBucketRef,
  JdBucketSelectionIndicate,
  JdBucketContainer,
  JdBucketItem,
  BucketDropBeforeParams
} from '@/lib-package';
import ExampleSplitPanel from '@/components/example/common/ExampleSplitPanel.vue';
import CustomBucketContainerIndicate from '@/components/example/common/CustomBucketContainerIndicate.vue';
import CustomBucketItem from '@/components/example/common/CustomBucketItem.vue';
import SampleItem from '@/components/example/common/SampleItem.vue';
import { getTestList } from '@/components/example/common/testModel';

export default defineComponent({
  components: {
    JdBucketSelectionIndicate,
    JdBucketContainer,
    JdBucketItem,
    ExampleSplitPanel,
    SampleItem,
    CustomBucketItem,
    CustomBucketContainerIndicate
  },
  setup() {
    provideJdBucketRef();

    const groupA = 'GROUP_A';
    const groupB = 'GROUP_B';
    const receiverA1 = reactive<any>({
      useGhostBar: true,
      dropBeforeFilter: false,
      max: -1,
      list: []
    });
    const receiverA2 = reactive<any>({
      list: []
    });
    const receiverB1 = reactive<any>({
      list: []
    });
    const receiverB2 = reactive<any>({
      list: []
    });
    const senderA1 = reactive<any>({
      list: []
    });
    const senderB1 = reactive<any>({
      list: []
    });

    const onDropBeforeFilter = (params: BucketDropBeforeParams) => {
      console.log('onDropBeforeFilter');
      const { toContainer, itemRefs } = params;
      const max = toContainer.max;
      const existList = toContainer.getList();
      const existIds = existList.map(model => model.uid);
      let filterList = itemRefs.filter(itemRef => {
        return existIds.indexOf(itemRef.model.uid) === -1;
      });
      if (max !== -1 && max < existList.length + filterList.length) {
        filterList = filterList.slice(0, max - existList.length);
      }
      return filterList.map(itemRef => itemRef.model);
    };

    onMounted(() => {
      receiverA1.list = [];
      receiverA2.list = getTestList(3);
      senderA1.list = getTestList(5);
      receiverB1.list = [];
      receiverB2.list = getTestList(3);
      senderB1.list = getTestList(5);
    });

    return {
      groupA,
      groupB,
      receiverA1,
      receiverA2,
      senderA1,
      receiverB1,
      receiverB2,
      senderB1,
      onDropBeforeFilter
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
    ::v-deep .bucket-draggable {
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
