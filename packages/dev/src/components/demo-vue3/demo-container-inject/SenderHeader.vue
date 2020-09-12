<template>
  <div class="sender-header">
    <div
      class="test-all"
      :style="{ backgroundColor: state.isAll ? '#2f93ce' : '#cccccc' }"
      @click="onToggleAll"
    >
      <i class="icon material-icons">check_circle</i>
      <span class="label">All ({{ state.isAll }})</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdBucketContainerRef } from '@jood/v-bucket';

export default defineComponent({
  setup() {
    const containerRef = useJdBucketContainerRef();
    const containerListener = new Subscription();
    const state = reactive({
      list: containerRef.getList(),
      isAll: false
    });

    const onChangeState = () => {
      state.list = containerRef.getList();
      const itemRefMap = containerRef.getItemRefs();
      const itemRefs = Array.from(itemRefMap.values());
      const len = itemRefs.length;
      let allSelected = null;
      for (let i = 0; i < len; i++) {
        const isSelected = itemRefs[i].isSelected;
        if (allSelected !== null && allSelected !== isSelected) {
          allSelected = null;
          break;
        }
        allSelected = isSelected;
      }
      state.isAll = !!allSelected;
    };

    const onToggleAll = (evt: any) => {
      evt.preventDefault();
      evt.stopPropagation();
      const checked = !state.isAll;
      const itemRefMap = containerRef.getItemRefs();
      const itemRefs = Array.from(itemRefMap.values());
      if (checked === true) {
        itemRefs.forEach(itemRef => {
          containerRef.addDragItem(itemRef);
        });
      } else {
        itemRefs.forEach(itemRef => {
          containerRef.removeDragItem(itemRef);
        });
      }
    };

    onMounted(() => {
      const observeState = containerRef.observeChangeState().subscribe(onChangeState);
      containerListener.add(observeState);
    });

    onUnmounted(() => {
      containerListener.unsubscribe();
    });

    return {
      state,
      onToggleAll
    };
  }
});
</script>

<style lang="scss" scoped>
.sender-header {
  margin-bottom: -20px;
  padding: 10px 20px;
  .test-all {
    display: inline-flex;
    align-items: center;
    margin: 2px;
    padding: 5px 8px;
    color: #ffffff;
    box-sizing: border-box;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>
