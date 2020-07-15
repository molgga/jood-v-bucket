import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';
import { defineComponent } from '@vue/composition-api';
import { compositionShallowMount, compositionMount } from '../../../tests/utils';
import {
  useJdBucketRef,
  provideJdBucketRef,
  provideJdBucketContainerRef,
  useJdBucketContainerRef,
  JdBucketContainerRef,
  JdBucketRef,
  JdBucketItemRef,
  useJdBucketItemRef,
  provideJdBucketItemRef
} from '../bucket';

describe('Vue provide&inject', () => {
  let wrapper: Wrapper<Vue> | null;

  afterEach(() => {
    if (wrapper) {
      wrapper.destroy();
      wrapper = null;
    }
  });

  test('provideJdBucketRef, useJdBucketRef', () => {
    const SomeChild = defineComponent({
      render: h => <div></div>,
      setup() {
        const bucketRef = useJdBucketRef();
        expect(bucketRef).not.toBeNull();
        expect((bucketRef as any).constructor).toBe(JdBucketRef);
        return {};
      }
    });
    wrapper = compositionMount({
      components: { SomeChild },
      render(h: any) {
        provideJdBucketRef();
        return <some-child />;
      },
      setup() {
        return {};
      }
    });
  });

  test('provideJdBucketContainerRef, useJdBucketContainerRef', () => {
    const SomeChild = defineComponent({
      render: h => <div></div>,
      setup() {
        const containerRef = useJdBucketContainerRef();
        expect(containerRef).not.toBeNull();
        expect((containerRef as any).constructor).toBe(JdBucketContainerRef);
        return {};
      }
    });
    wrapper = compositionMount({
      components: { SomeChild },
      render(h: any) {
        provideJdBucketContainerRef();
        return <some-child />;
      },
      setup() {
        return {};
      }
    });
  });

  test('provideJdBucketItemRef, useJdBucketItemRef', () => {
    const SomeChild = defineComponent({
      render: h => <div></div>,
      setup() {
        const itemRef = useJdBucketItemRef();
        expect(itemRef).not.toBeNull();
        expect((itemRef as any).constructor).toBe(JdBucketItemRef);
        return {};
      }
    });
    wrapper = compositionMount({
      components: { SomeChild },
      render(h: any) {
        provideJdBucketItemRef();
        return <some-child />;
      },
      setup() {
        return {};
      }
    });
  });
});
