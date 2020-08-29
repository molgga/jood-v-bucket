<template>
  <div class="custom-bucket-remove">
    <v-btn class="action" color="#e85c5c" fab dark x-small @click="onClickRemove">
      <v-icon class="first">close</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
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
