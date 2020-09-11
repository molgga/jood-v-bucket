import { provide, inject } from 'vue';
import { IBucketRef, IBucketContainerRef, IBucketItemRef } from './types';
import { JdBucketRef } from './JdBucketRef';
import { JdBucketContainerRef } from './JdBucketContainerRef';
import { JdBucketItemRef } from './JdBucketItemRef';

export * from './types';
export { JdBucketRef, JdBucketContainerRef, JdBucketItemRef };
export const JD_BUCKET_REF = Symbol('JD_BUCKET_REF');
export const JD_BUCKET_CONTAINER_REF = Symbol('JD_BUCKET_CONTAINER_REF');
export const JD_BUCKET_ITEM_REF = Symbol('JD_BUCKET_ITEM_REF');

export function provideJdBucketRef(): IBucketRef {
  const bucketRef = new JdBucketRef();
  provide(JD_BUCKET_REF, bucketRef);
  return bucketRef;
}

export function useJdBucketRef(): IBucketRef {
  return inject<IBucketRef>(JD_BUCKET_REF) as IBucketRef;
}

export function provideJdBucketContainerRef(): IBucketContainerRef {
  const bucketContainerRef = new JdBucketContainerRef();
  provide(JD_BUCKET_CONTAINER_REF, bucketContainerRef);
  return bucketContainerRef;
}

export function useJdBucketContainerRef(): IBucketContainerRef {
  return inject<IBucketContainerRef>(JD_BUCKET_CONTAINER_REF) as IBucketContainerRef;
}

export function provideJdBucketItemRef(): IBucketItemRef {
  const bucketItemRef = new JdBucketItemRef();
  provide(JD_BUCKET_ITEM_REF, bucketItemRef);
  return bucketItemRef;
}

export function useJdBucketItemRef(): IBucketItemRef {
  return inject<IBucketItemRef>(JD_BUCKET_ITEM_REF) as IBucketItemRef;
}
