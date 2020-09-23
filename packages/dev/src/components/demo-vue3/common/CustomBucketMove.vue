<template>
  <div class="custom-bucket-move">
    <button class="action first" title="first" @click="onClickMove('first')">
      <i class="icon material-icons">skip_next</i>
    </button>
    <button class="action up" title="up" @click="onClickMove('up')">
      <i class="icon material-icons">play_arrow</i>
    </button>
    <button class="action down" title="down" @click="onClickMove('down')">
      <i class="icon material-icons">play_arrow</i>
    </button>
    <button class="action last" title="last" @click="onClickMove('last')">
      <i class="icon material-icons">skip_next</i>
    </button>
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
  .action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 3px;
    width: 18px;
    height: 18px;
    box-shadow: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.15);
    cursor: pointer;
    .icon {
      font-size: 12px;
      color: #ffffff;
    }
    &.first {
      transform: rotate(-90deg);
    }
    &.last {
      transform: rotate(90deg);
    }
    &.up {
      transform: rotate(-90deg);
    }
    &.down {
      transform: rotate(90deg);
    }
  }
}
</style>
