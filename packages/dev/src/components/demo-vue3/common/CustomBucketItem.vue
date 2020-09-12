<template>
  <jd-bucket-item :model="model" class="custome-bucket-item">
    <template #aside>
      <div class="cbi-panel-aside" v-if="!isReceiverContainer">
        <div class="cbi-check"></div>
      </div>
    </template>
    <div class="cbi-panel">
      <template v-if="isReceiverContainer">
        <div class="cbi-panel-head">
          <div class="head-aside" v-if="isReceiverContainer">
            <div class="cbi-move">
              <custom-bucket-move
                class="move"
                @up="onMove"
                @down="onMove"
                @first="onMove"
                @last="onMove"
              />
            </div>
          </div>
          <div class="head-spacer"></div>
          <div class="head-bside">
            <custom-bucket-remove @remove="onRemove" />
          </div>
        </div>
      </template>
      <div class="cbi-panel-body">
        <slot></slot>
      </div>
    </div>
  </jd-bucket-item>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import {
  JdBucketItem,
  JdBucketItemRef,
  useJdBucketContainerRef,
  useJdBucketItemRef,
  IBucketItemRef
} from '@jood/v-bucket';
import CustomBucketRemove from './CustomBucketRemove.vue';
import CustomBucketMove from './CustomBucketMove.vue';

export default defineComponent({
  components: {
    JdBucketItem,
    CustomBucketRemove,
    CustomBucketMove
  },
  props: {
    model: {
      type: Object,
      default: null
    },
    myIndex: {
      type: Number,
      default: -1
    }
  },
  setup() {
    const containerRef = useJdBucketContainerRef();
    const isReceiverContainer = containerRef.isReceiver;

    const onRemove = (evt: { itemRef: IBucketItemRef }) => {
      const { itemRef } = evt;
      // if (confirm('remove?')) {
      //   containerRef.removeByModel(itemRef.model);
      // }
      containerRef.removeByModel(itemRef.model);
    };

    const onMove = (evt: { itemRef: IBucketItemRef; direction: string }) => {
      const { itemRef, direction } = evt;
      const index = containerRef.findItemRefIndex(itemRef);
      const list = containerRef.getList();
      const swap = list.splice(index, 1);
      let swapIndex = -1;
      switch (direction) {
        case 'first':
          swapIndex = 0;
          break;
        case 'up':
          swapIndex = Math.max(0, index - 1);
          break;
        case 'down':
          swapIndex = Math.min(list.length, index + 1);
          break;
        case 'last':
          swapIndex = list.length;
          break;
      }
      if (swapIndex !== -1) {
        list.splice(swapIndex, 0, ...swap);
      }
      containerRef.setList(list);
    };

    return {
      isReceiverContainer,
      onRemove,
      onMove
    };
  }
});
</script>

<style lang="scss" scoped>
.custome-bucket-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 15px 10px;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  box-sizing: border-box;
  word-break: break-all;
  &:first-child {
    margin-top: 0;
  }

  .cbi-panel {
    flex: 1;
    min-width: 0;
  }

  .cbi-panel-aside {
    padding-right: 10px;
  }
  .cbi-panel-head {
    display: flex;
    margin: -15px -10px 10px -10px;
    padding: 4px 5px;
    line-height: 1;
    border-bottom: 1px solid #f0f0f0;
    background-color: #f9f9f9;
    .head-spacer {
      flex: 1;
    }
  }
  .cbi-panel-body {
    flex: 1;
    min-width: 0;
  }
  .cbi-panel-bside {
    padding-left: 10px;
  }
  .cbi-check {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 2px;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    background-color: #eeeeee;
  }
  .cbi-move {
    display: flex;
    align-items: center;
    .idx {
      font-size: 12px;
      font-style: normal;
      font-weight: bold;
      padding-right: 5px;
    }
    .move {
      flex: 1;
    }
  }
  &.is-selected {
    background-color: #f2fcff;
    .cbi-check {
      border-color: #1d7eda;
      background-color: #449ff5;
    }
  }
}
</style>
