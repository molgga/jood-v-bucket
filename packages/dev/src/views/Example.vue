<template>
  <div class="example-view">
    <template v-if="exampleState.component">
      <component :is="exampleState.component" />
    </template>
    <template v-else>
      -
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { ExampleApps } from '@/components/example';

export default defineComponent({
  props: {
    example: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const importComponent: any = ExampleApps;
    const exampleState = computed(() => {
      const exampleKey = props.example;
      let component: any;
      if (importComponent[exampleKey]) {
        component = importComponent[exampleKey].component;
      }
      return {
        component
      };
    });

    return {
      exampleState
    };
  }
});
</script>

<style lang="scss" scoped></style>
