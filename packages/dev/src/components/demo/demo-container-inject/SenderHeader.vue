<template>
  <div class="sender-header">
    <v-chip
      class="test-all"
      :color="state.isAll ? 'teal' : '#cccccc'"
      text-color="white"
      @click="onToggleAll"
    >
      <v-avatar left>
        <v-icon>check_circle</v-icon>
      </v-avatar>
      All ({{ state.isAll }})
    </v-chip>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
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
    cursor: pointer;
  }
}
</style>
