<template>
  <div class="jd-bucket-container" :class="classes">
    <slot name="header"></slot>
    <slot name="indicate" :state="indicateState">
      <jd-bucket-container-indicate
        :isBlock="indicateState.isBlock"
        :isInsertable="indicateState.isInsertable"
        :isEnter="indicateState.isEnter"
      />
    </slot>
    <slot name="empty" :state="indicateState" v-if="indicateState.isEmpty"></slot>
    <div
      class="bucket-container"
      @mousedown="onContainerPress"
      @mouseenter="onContainerEnter"
      @mouseleave="onContainerLeave"
    >
      <draggable
        ref="elDragEl"
        class="bucket-draggable"
        v-bind="safeDragOptions"
        :group="draggerState.group"
        :sort="draggerState.sort"
        :list="list"
        :disabled="state.isForceDisabled"
        :clone="onDraggerClone"
        @choose="onDraggerChoose"
        @unchoose="onDraggerUnchoose"
        @start="onDraggerStart"
        @end="onDraggerEnd"
      >
        <slot></slot>
      </draggable>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable';
import { Subscription } from 'rxjs';
import {
  defineComponent,
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch
} from '@vue/composition-api';
import {
  provideJdBucketContainerRef,
  useJdBucketRef,
  BucketEventType,
  BucketEvent,
  BucketSortableEvent,
  BucketDragDrop
} from '../../composables/bucket';
import JdBucketContainerIndicate from './JdBucketContainerIndicate.vue';

export default defineComponent({
  name: 'JdBucketContainer',
  components: {
    draggable,
    JdBucketContainerIndicate
  },
  model: {
    prop: 'list',
    event: 'change'
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    groupName: {
      type: String
    },
    max: {
      type: Number,
      default: -1
    },
    multiple: {
      type: Boolean,
      default: true
    },
    receiver: {
      type: Boolean,
      default: true
    },
    lazyChangeStateDelay: {
      type: Number,
      default: 0
    },
    rangeSelection: {
      type: Boolean,
      default: true
    },
    dropBefore: {
      type: Function,
      default: null
    },
    dragOptions: {
      type: Object,
      default: () => ({
        animation: 200
      })
    },
    useGhostBar: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const { emit } = context;
    const elDragEl = ref<any>(null); // sortable DOM 으로 다루는것 제어용
    const bucketRef = useJdBucketRef();
    const containerRef = provideJdBucketContainerRef();
    containerRef.setGroupName(props.groupName || '');
    containerRef.setList(props.list);
    containerRef.setReceiver(props.receiver);
    containerRef.setMultiple(props.multiple);
    containerRef.setMax(props.max);
    containerRef.setDropBefore(props.dropBefore);
    containerRef.setLazyStateChangeDelay(props.lazyChangeStateDelay);

    const bucketListener = new Subscription();
    const state = reactive({
      isDragChoose: false,
      isGroupInsertable: false,
      isDragging: false,
      isDraggingMe: false,
      isForceDisabled: false
    });
    const indicateState = reactive({
      isBlock: false,
      isInsertable: false,
      isEnter: false,
      isEmpty: !containerRef.getList().length
    });

    const classes = computed(() => {
      console.log('classes');
      return {
        'use-ghost-bar': props.useGhostBar,
        'is-insertable': indicateState.isInsertable
      };
    });

    const allowRangeSelection = computed(() => {
      return props.rangeSelection && props.multiple && !props.receiver;
    });

    const draggerState = computed(() => {
      const groupName = props.groupName;
      const isReceiver = props.receiver || false;
      const sort = isReceiver;
      const group = isReceiver
        ? { name: groupName, pull: 'clone', put: true }
        : { name: groupName, pull: 'clone', put: false };
      return {
        group,
        sort
      };
    });

    const safeDragOptions = computed(() => {
      const bucketFallback = bucketRef.isFallbackIndicate;
      return {
        forceFallback: bucketFallback && !props.receiver,
        ghostClass: '__jd-bucket-ghost',
        chosenClass: '__jd-bucket-chosen',
        fallbackClass: '__jd-bucket-fallback',
        ...props.dragOptions
      };
    });

    const forceIndicateUpdate = () => {
      const isGroupInsertable = state.isGroupInsertable;
      const isDragging = state.isDragging;
      const isDraggingMe = state.isDraggingMe;
      const isInsertable = isDragging && isGroupInsertable && !isDraggingMe;
      const isBlock = isDragging && !isGroupInsertable && !isDraggingMe;
      const isEmpty = !containerRef.getList().length;
      indicateState.isBlock = isBlock;
      indicateState.isInsertable = isInsertable;
      indicateState.isEmpty = isEmpty;
    };

    // @see https://github.com/SortableJS/Vue.Draggable#events
    const onDraggerChoose = (evt: BucketSortableEvent) => {
      bucketRef.dispatchDragChoose({
        fromContainer: containerRef,
        sortableEvent: evt
      });
    };

    const onDraggerUnchoose = (evt: BucketSortableEvent) => {
      bucketRef.dispatchDragUnchoose({
        sortableEvent: evt
      });
    };

    const onDraggerStart = (evt: BucketSortableEvent) => {
      bucketRef.dispatchDragStart({
        fromContainer: containerRef,
        sortableEvent: evt
      });
    };

    const onDraggerEnd = (evt: BucketSortableEvent) => {
      const toContainer = bucketRef.findContainerRefByElement(evt.to);
      bucketRef.dispatchDragEnd({
        toContainer,
        sortableEvent: evt
      });
    };

    const onDraggerClone = () => {
      return containerRef.createCloneModel();
    };

    const onBucketDropped = async (evt: BucketDragDrop) => {
      if (!evt.fromContainer) return;
      const { toContainer, fromContainer, sortableEvent } = evt;
      const insertIndex = sortableEvent.newIndex;
      containerRef.mergeToDrop(insertIndex, fromContainer, ({ changeList }: any) => {
        emit('change', changeList);
      });
    };

    const onBucketEvent = (evt: BucketEvent) => {
      const fromContainer = evt.fromContainer;
      switch (evt.type) {
        case BucketEventType.DRAG_CHOOSE:
          state.isDragChoose = true;
          break;
        case BucketEventType.DRAG_UNCHOOSE:
          state.isDragChoose = false;
          state.isForceDisabled = false;
          break;
        case BucketEventType.DRAG_START:
          state.isDragging = true;
          if (fromContainer) {
            state.isDraggingMe = fromContainer === containerRef;
            state.isGroupInsertable = containerRef.isGroupInsertable(fromContainer);
            state.isForceDisabled =
              !containerRef.isGroupSame(fromContainer) ||
              (fromContainer !== containerRef && fromContainer.isReceiver);
          }
          forceIndicateUpdate();
          break;
        case BucketEventType.DRAG_END:
          state.isGroupInsertable = false;
          state.isDragging = false;
          state.isDraggingMe = false;
          state.isDragChoose = false;
          state.isForceDisabled = false;
          forceIndicateUpdate();
          break;
      }
    };

    const onContainerPress = (evt: MouseEvent) => {
      if (!allowRangeSelection.value) return;
      if (state.isDragChoose) return;
      if (evt.which !== 1) return; // left-click
      bucketRef.dispatchRangeSelectionStart({
        x: evt.pageX,
        y: evt.pageY,
        container: containerRef
      });
    };

    const onContainerEnter = () => {
      indicateState.isEnter = true;
    };

    const onContainerLeave = () => {
      indicateState.isEnter = false;
    };

    watch(
      () => props.list,
      current => {
        containerRef.setList(current);
        forceIndicateUpdate();
      }
    );

    onMounted(() => {
      if (elDragEl.value) {
        containerRef.setElContainer(elDragEl.value.$el);
      }
      bucketRef.joinContainerRef(containerRef);
      const observe1 = bucketRef.observeDragger().subscribe(onBucketEvent);
      const observe2 = containerRef.observeDropped().subscribe(onBucketDropped);
      bucketListener.add(observe1);
      bucketListener.add(observe2);
    });

    onUnmounted(() => {
      bucketListener.unsubscribe();
      bucketRef.unjoinContainerRef(containerRef);
      containerRef.destroy();
    });

    return {
      state,
      classes,
      elDragEl,
      safeDragOptions,
      indicateState,
      draggerState,
      onDraggerChoose,
      onDraggerUnchoose,
      onDraggerStart,
      onDraggerEnd,
      onDraggerClone,
      onContainerPress,
      onContainerEnter,
      onContainerLeave
    };
  }
});
</script>

<style lang="scss">
.__jd-bucket-ghost {
  opacity: 1;
}
.__jd-bucket-fallback {
  opacity: 0 !important;
}
</style>

<style lang="scss" scoped>
.jd-bucket-container {
  position: relative;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  .bucket-container {
    padding: 20px;
    min-height: 10px;
  }
  .bucket-draggable {
    min-height: 10px;
    height: 100%;
  }

  &.use-ghost-bar.is-insertable {
    ::v-deep .__jd-bucket-ghost {
      position: relative;
      overflow: hidden;
      padding: 0;
      margin: 10px -10px;
      height: 20px;
      min-height: initial;
      border: none;
      border-radius: 0;
      opacity: 1;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
        z-index: 990;
      }
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -2px;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background-color: rgba(255, 38, 38, 1);
        animation: ghost-bar-ripple 360ms linear;
        animation-iteration-count: infinite;
        z-index: 1000;
      }
    }
  }
}

@keyframes ghost-bar-ripple {
  0% {
    opacity: 0.7;
    transform: scale(1, 1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.95, 0.95);
  }
  100% {
    opacity: 0.7;
    transform: scale(1, 1);
  }
}
</style>
