<template>
  <div>
    <span
      class="test-all"
      @click="handleAll"
    >[ {{ state.isAll ? 'V' : '-' }} ] all ({{ state.isAll }})</span>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { useJdBucketContainerRef } from '@/lib-package';

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

    const handleAll = (evt: any) => {
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
      handleAll
    };
  }
});
</script>

<style lang="scss" scoped>
.test-all {
  display: inline-block;
  margin: 2px;
  padding: 4px 8px;
  border-radius: 2px;
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>
