type Result<T> = {
  min: T;
  max: T;
};

const findMinAndMaxInternal = <T>(
  collection: T[],
  left: number,
  right: number
): Result<T> => {
  if (left === right) {
    // one element only
    return { min: collection[left], max: collection[left] };
  } else if (left === right - 1) {
    // two elements
    return collection[right] > collection[left]
      ? { min: collection[left], max: collection[right] }
      : { min: collection[right], max: collection[left] };
  }
  // more elements - divide into two sets and calculate recirsively
  const mid = Math.floor((left + right) / 2);
  const { min: minL, max: maxL } = findMinAndMaxInternal(collection, left, mid);
  const { min: minR, max: maxR } = findMinAndMaxInternal(collection, mid + 1, right);
  return {
    min: minL < minR ? minL : minR,
    max: maxR > maxL ? maxR : maxL,
  };
};

// useful for adjusting dashboard width and height so that the line remains visible
const findMinAndMax = <T>(collection: T[]): Result<T> => {
    return findMinAndMaxInternal(collection, 0, collection.length - 1);
}

export default findMinAndMax;