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
