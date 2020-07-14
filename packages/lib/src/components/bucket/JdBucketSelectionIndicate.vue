<template>
  <div class="jd-bucket-selection-indicate">
    <slot name="drag" :state="dragState">
      <div v-if="dragState.visible" class="drag-selection" :style="dragState.style">
        <div class="pivot">{{ dragState.count }}</div>
      </div>
    </slot>
    <slot name="range" :state="rangeState">
      <div v-if="rangeState.visible" class="range-selection" :style="rangeState.style"></div>
    </slot>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, onMounted, onUnmounted, reactive } from '@vue/composition-api';
import {
  useJdBucketRef,
  BucketEvent,
  BucketEventType,
  SelectionBoundary,
  BucketRangeSelectionEvent,
  IBucketContainerRef,
  BucketDragSelectionState,
  BucketRangeSelectionState
} from '../../composables/bucket';
import { JdBucketSelectionDrag } from '../../composables/bucket/JdBucketSelectionDrag';
import { JdBucketSelectionRange } from '../../composables/bucket/JdBucketSelectionRange';

export default defineComponent({
  setup() {
    const bucketRef = useJdBucketRef();
    bucketRef.setFallbackIndicate(true);

    const dragState = reactive<BucketDragSelectionState>({
      visible: false,
      count: 0,
      style: {
        top: '0',
        left: '0'
      },
      itemRefs: []
    });

    const rangeState = reactive<BucketRangeSelectionState>({
      visible: false,
      style: {
        top: '0',
        left: '0',
        width: '0',
        height: '0'
      }
    });

    const bucketListener = new Subscription();
    const dragSelection = new JdBucketSelectionDrag();
    let dragSelectionListener: Subscription | null;

    const rangeSelection = new JdBucketSelectionRange();
    let rangeSelectionContainer: IBucketContainerRef | null;
    let rangeSelectionListener: Subscription | null;

    const onBucketEvent = (evt: BucketEvent) => {
      switch (evt.type) {
        case BucketEventType.DRAG_START:
          onDragStart(evt);
          break;
        case BucketEventType.DRAG_END:
          onDragEnd();
          break;
      }
    };

    const onDragStart = (evt: BucketEvent) => {
      if (!evt.fromContainer || evt.fromContainer.isReceiver) return;
      destroyDragSelectionListener();
      dragSelectionListener = new Subscription();

      const { sortableEvent, fromContainer } = evt;
      const { originalEvent } = sortableEvent;
      const top = originalEvent.y;
      const left = originalEvent.x;
      const dragCount = fromContainer.getDragItems().length || 0;
      const dragItemRefs = fromContainer.getDragItems();
      dragState.visible = true;
      dragState.count = dragCount;
      dragState.itemRefs = dragItemRefs;
      dragSelection.startSelection({ x: left, y: top });
      onDragBoundary({ x: left, y: top, w: 0, h: 0 });
      const observeBoundary = dragSelection.observeBoundary().subscribe(onDragBoundary);
      dragSelectionListener.add(observeBoundary);
    };

    const onDragBoundary = (boundary: SelectionBoundary) => {
      drawDragSelection(boundary);
    };

    const onDragEnd = () => {
      destroyDragSelectionListener();
      drawDragSelection({ x: 0, y: 0, w: 0, h: 0 });
      dragState.visible = false;
      dragState.count = 0;
      dragState.itemRefs = [];
    };

    const onRangeSelectionStart = (evt: BucketRangeSelectionEvent) => {
      destroyRangeSelectionListener();
      rangeSelectionListener = new Subscription();

      const { container, x, y } = evt;
      rangeState.visible = true;
      rangeSelection.startSelection({ x, y });
      rangeSelectionContainer = container;
      const observeBoundary = rangeSelection.observeBoundary().subscribe(onRangeSelectionBoundary);
      const observeFlushed = rangeSelection.observeFlushed().subscribe(onRangeSelectionFlushed);
      rangeSelectionListener.add(observeBoundary);
      rangeSelectionListener.add(observeFlushed);
    };

    const onRangeSelectionBoundary = (boundary: SelectionBoundary) => {
      drawRangeSelection(boundary);
    };

    const onRangeSelectionFlushed = (boundary: SelectionBoundary) => {
      destroyRangeSelectionListener();
      if (rangeSelectionContainer && boundary) {
        rangeSelectionContainer.addDragItemToBoundary(boundary);
        rangeSelectionContainer = null;
      }
      drawRangeSelection({ x: 0, y: 0, w: 0, h: 0 });
      rangeState.visible = false;
    };

    const drawDragSelection = (boundary: SelectionBoundary) => {
      dragState.style.top = `${boundary.y}px`;
      dragState.style.left = `${boundary.x}px`;
    };

    const drawRangeSelection = (boundary: SelectionBoundary) => {
      rangeState.style.top = `${boundary.y}px`;
      rangeState.style.left = `${boundary.x}px`;
      rangeState.style.width = `${boundary.w}px`;
      rangeState.style.height = `${boundary.h}px`;
    };

    const destroyDragSelectionListener = () => {
      if (dragSelectionListener) {
        dragSelectionListener.unsubscribe();
        dragSelectionListener = null;
      }
    };

    const destroyRangeSelectionListener = () => {
      if (rangeSelectionListener) {
        rangeSelectionListener.unsubscribe();
        rangeSelectionListener = null;
      }
    };

    onMounted(() => {
      const observeDragger = bucketRef.observeDragger().subscribe(onBucketEvent);
      const observeRangeSelection = bucketRef
        .observeRangeSelection()
        .subscribe(onRangeSelectionStart);
      bucketListener.add(observeDragger);
      bucketListener.add(observeRangeSelection);
    });

    onUnmounted(() => {
      destroyDragSelectionListener();
      destroyRangeSelectionListener();
      if (bucketListener) {
        bucketListener.unsubscribe();
      }
      if (dragSelection) {
        dragSelection.destroy();
      }
      if (rangeSelection) {
        rangeSelection.destroy();
      }
    });
    return {
      dragState,
      rangeState
    };
  }
});
</script>

<style lang="scss" scoped>
.drag-selection {
  position: fixed;
  top: 0;
  left: 0;
  user-select: none;
  pointer-events: none;
  z-index: 99999;
  > .pivot {
    position: absolute;
    padding: 7px 12px 5px 12px;
    bottom: 8px;
    left: 0;
    min-width: 12px;
    line-height: 22px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 20px;
    background-color: #ea3d45;
    border: 1px solid #c72d35;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    transform: translateX(-50%);
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -6px;
      margin-left: -7px;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 7px solid #b9252d;
    }
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -4px;
      margin-left: -6px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #ea3d45;
    }
  }
}
.range-selection {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  box-sizing: border-box;
  box-shadow: inset 0 0 1px 1px rgba(25, 125, 220, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.15);
  background-color: rgba(25, 125, 220, 0.25);
  z-index: 99999;
}
</style>
