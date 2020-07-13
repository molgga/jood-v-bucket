<template>
  <div
    ref="elDragEl"
    class="jd-bucket-item"
    :class="classes"
    @mousedown="onPress"
    @click="onRelease"
  >
    <slot name="aside" :state="state"></slot>
    <slot>item: {{ model }}</slot>
    <slot name="bside"></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  onMounted,
  onUnmounted,
  ref
} from '@vue/composition-api';
import { provideJdBucketItemRef, useJdBucketContainerRef } from '../../composables/bucket';
import { Subscription } from 'rxjs';

export default defineComponent({
  name: 'JdBucketItem',
  props: {
    model: {
      type: [Object, Array, String, Number, Boolean]
    }
  },
  setup(props) {
    const elDragEl = ref<any>(null); // sortable DOM 으로 다루는것 제어용
    const itemRef = provideJdBucketItemRef();
    const containerRef = useJdBucketContainerRef();
    itemRef.setModel(props.model);

    const bucketListener = new Subscription();

    const state = reactive({
      isDragging: false,
      isPressBeforeSelected: false,
      isSelected: itemRef.isSelected
    });

    const classes = computed(() => {
      return { 'is-selected': state.isSelected };
    });

    const onPress = () => {
      if (containerRef.isReceiver) return;
      state.isPressBeforeSelected = containerRef.findDragItemIndex(itemRef) !== -1;
      if (containerRef.isMultiple) {
        containerRef.addDragItem(itemRef);
      } else {
        containerRef.flushDragItem();
        if (!state.isPressBeforeSelected) {
          containerRef.setDragItem(itemRef);
        }
      }
    };

    const onRelease = () => {
      if (containerRef.isReceiver) return;
      if (state.isPressBeforeSelected) {
        containerRef.removeDragItem(itemRef);
      }
    };

    const onStateChange = () => {
      state.isSelected = itemRef.isSelected;
    };

    onMounted(() => {
      containerRef.joinItemRef(itemRef);
      itemRef.setElContainer(elDragEl.value);
      const observeState = itemRef.observeChangeState().subscribe(onStateChange);
      bucketListener.add(observeState);
    });

    onUnmounted(() => {
      bucketListener.unsubscribe();
      containerRef.unjoinItemRef(itemRef);
      itemRef.destroy();
    });

    return {
      elDragEl,
      state,
      classes,
      onPress,
      onRelease
    };
  }
});
</script>

<style lang="scss" scoped>
.jd-bucket-item {
  background-color: #ffffff;
}
</style>
