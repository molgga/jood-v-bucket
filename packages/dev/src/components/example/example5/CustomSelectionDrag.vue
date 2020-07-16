<template>
  <div>
    <div v-if="isVisible" class="drag-indicate" :style="positionStyle">
      <div class="panel">
        <div class="item-list">
          <div
            v-for="(model, index) in previewBox.list"
            :key="index"
            :style="{ marginLeft: `${index * 5}px` }"
            class="item-box"
          >
            {{ model }}
          </div>
          <div class="count">
            <span class="label">count: {{ previewBox.count }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watchEffect } from '@vue/composition-api';
import { BucketDragSelectionState } from '@/lib-package';

interface IProps {
  dragState: BucketDragSelectionState;
}

export default defineComponent({
  props: {
    dragState: {
      type: Object,
      default: () => ({
        visible: false,
        count: 0,
        style: null,
        itemRefs: []
      })
    }
  },

  setup(props: IProps) {
    const isVisible = computed(() => props.dragState.visible);
    const positionStyle = computed(() => props.dragState.style);
    const previewBox = computed(() => {
      const itemRefs = props.dragState.itemRefs;
      const list = itemRefs.map(itemRef => itemRef.model);
      const max = 3;
      return {
        list: list.slice(0, max),
        count: props.dragState.count
      };
    });

    return {
      isVisible,
      positionStyle,
      previewBox
    };
  }
});
</script>

<style lang="scss" scoped>
.drag-indicate {
  position: fixed;
  top: 0;
  left: 0;
  user-select: none;
  pointer-events: none;
  z-index: 9999;
  .panel {
    position: relative;
    .item-list {
      .item-box {
        position: relative;
        margin-top: -55px;
        padding: 5px;
        width: 100px;
        height: 60px;
        font-size: 14px;
        box-sizing: border-box;
        border: 1px solid #e9e9e9;
        background-color: #ffffff;
        box-shadow: -3px -3px 8px rgba(0, 0, 0, 0.125);
        &:first-child {
          margin-top: 0;
        }
      }
    }
    .count {
      position: absolute;
      bottom: -4px;
      right: -4px;
      padding: 3px 5px;
      font-size: 12px;
      font-weight: bold;
      color: #ffffff;
      background-color: #333333;
    }
  }
}
</style>
