<template>
  <div class="custom-bucket-remove">
    <demo-button class="action" color="#e85c5c" @click="onClickRemove">
      <i class="icon material-icons">close</i>
    </demo-button>
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
    }
  },
  setup(props, context) {
    const { emit } = context;
    const itemRef = useJdBucketItemRef();
    const onClickRemove = () => {
      emit('remove', { itemRef });
    };
    return {
      onClickRemove
    };
  }
});
</script>

<style lang="scss" scoped>
.custom-bucket-remove {
  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 18px;
    height: 18px;
    box-shadow: none;
    cursor: pointer;
    .icon {
      font-size: 12px;
      color: #ffffff;
    }
  }
}
</style>
