<template>
  <div>
    <div v-if="isVisible" class="drag-indicate" :style="positionStyle">
      <div class="panel">
        <div class="item-list">
          <div
            v-for="(model, index) in previewBox.list"
            :key="index"
            :style="{ marginLeft: `${index * 3}px`, backgroundColor: model.color }"
            class="item-box"
          >
            <div class="label">{{ model.name }}</div>
          </div>
          <div class="count">
            <span class="label">{{ previewBox.count }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue';
import { BucketDragSelectionState } from '@jood/v-bucket';

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
        list: list.slice(-max),
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
        display: flex;
        align-items: center;
        color: #ffffff;
        margin-top: -37px;
        padding: 5px 10px;
        width: 100px;
        height: 40px;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #666666;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        .label {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &:first-child {
          margin-top: 0;
          box-shadow: -3px -3px 8px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        }
      }
    }
    .count {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: -10px;
      right: -10px;
      width: 30px;
      height: 30px;
      font-size: 12px;
      font-weight: bold;
      color: #ffffff;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
      background-color: #333333;
    }
  }
}
</style>
