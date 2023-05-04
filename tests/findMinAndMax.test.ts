import findMinAndMax from "../src/algorithms/findMinAdnMax";

describe("Finding minimum and maximum in a set", () => {
  it("Should find proper min and max values in a numbers collection", () => {
    const set = [1, 5, 2, 6, 3, 8, 4, 11, 7, 5, 3, 6, -1, 7, 7, 8, 9, 0];

    const result = findMinAndMax(set);

    expect(result.min).toEqual(-1);
    expect(result.max).toEqual(11);
  });

  it("Should find proper min and max values in a char collection", () => {
    const set = ['y', 'g', 'z', 'b', 'r', 'a', 'c', 'd'];

    const result = findMinAndMax(set);

    expect(result.min).toEqual('a');
    expect(result.max).toEqual('z');
  });
});
