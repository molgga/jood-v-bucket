<template>
  <div class="some-item">
    <div class="name">{{ viewState.name }}</div>
    <div class="desc">{{ viewState.description}}</div>
    <template v-if="viewState.isOverflow">
      <div
        class="display-alert"
      >{{ expectDisplayMax }}개 까지만 서비스에 노출 됩니다. 위 컨텐츠가 노출 불가능 상태가 되면 순서대로 노출 됩니다.</div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { useJdBucketItemRef } from '@jood/v-bucket';

export default defineComponent({
  props: {
    index: {
      type: Number,
      default: -1
    },
    expectDisplayMax: {
      type: Number,
      default: -1
    }
  },
  setup(props) {
    const itemRef = useJdBucketItemRef();
    const viewState = computed(() => {
      const model = itemRef.model;
      const expectDisplayMax = props.expectDisplayMax;
      const index = props.index;
      const isOverflow = expectDisplayMax !== -1 && index !== -1 && expectDisplayMax <= index;
      return {
        isOverflow,
        name: model.name,
        description: model.description
      };
    });
    return {
      viewState
    };
  }
});
</script>

<style lang="scss" scoped>
.some-item {
  padding: 5px;
  .name {
    font-size: 16px;
    font-weight: 600;
  }
  .desc {
    font-size: 13px;
    color: #999999;
  }
  .display-alert {
    font-size: 12px;
    color: #d83a3a;
  }
}
</style>
