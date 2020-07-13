<template>
  <jd-bucket-item :model="model" class="custome-bucket-item">
    <template #aside>
      <div class="cbi-panel-aside" v-if="!isReceiverContainer">
        <div class="cbi-check"></div>
      </div>
      <div class="cbi-panel-aside" v-if="isReceiverContainer">
        <div class="cbi-move">
          <em class="idx">{{ myIndex }}</em>
          <custom-bucket-move
            class="move"
            @up="onMove"
            @down="onMove"
            @first="onMove"
            @last="onMove"
          />
        </div>
      </div>
    </template>
    <div class="cbi-panel-body">
      <slot></slot>
    </div>
    <template #bside v-if="isReceiverContainer">
      <div class="cbi-panel-bside">
        <custom-bucket-remove @remove="onRemove" />
      </div>
    </template>
  </jd-bucket-item>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from '@vue/composition-api';
import {
  JdBucketItem,
  JdBucketItemRef,
  useJdBucketContainerRef,
  useJdBucketItemRef,
  IBucketItemRef
} from '@/lib-package';
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
  display: flex;
  align-items: center;
  margin-top: -1px;
  padding: 15px 10px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  box-sizing: border-box;
  word-break: break-all;
  &:first-child {
    margin-top: 0;
  }

  .cbi-panel-aside {
    padding-right: 10px;
  }
  .cbi-panel-body {
    flex: 1;
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
