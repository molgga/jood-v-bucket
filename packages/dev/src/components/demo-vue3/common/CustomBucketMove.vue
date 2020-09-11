<template>
  <div class="custom-bucket-move">
    <button class="btn" title="first" @click="onClickMove('first')">first</button>
    <button class="btn" title="up" @click="onClickMove('up')">up</button>
    <button class="btn" title="down" @click="onClickMove('down')">down</button>
    <button class="btn" title="last" @click="onClickMove('last')">last</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useJdBucketItemRef } from '@jood/v-bucket';

export default defineComponent({
  components: {},
  props: {
    model: {
      type: Object,
      default: null
    },
    iconColor: {
      type: String,
      default: '#cccccc'
    }
  },
  setup(props, context) {
    const { emit } = context;
    const itemRef = useJdBucketItemRef();
    const onClickMove = (direction: string) => {
      emit(direction, { direction, itemRef });
    };
    return {
      onClickMove
    };
  }
});
</script>

<style lang="scss" scoped>
.custom-bucket-move {
  .first {
    transform: rotate(90deg);
  }
  .last {
    transform: rotate(-90deg);
  }
  .action {
    margin: 0 3px;
    width: 18px;
    height: 18px;
    box-shadow: none;
    ::v-deep .v-btn__content .v-icon {
      width: 14px;
      height: 14px;
      font-size: 14px;
    }
  }
}
</style>
