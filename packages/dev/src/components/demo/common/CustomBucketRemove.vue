<template>
  <div class="custom-bucket-remove">
    <v-btn class="action" color="#e85c5c" fab dark x-small @click="onClickRemove">
      <v-icon class="first">close</v-icon>
    </v-btn>
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
  }
}
</style>
