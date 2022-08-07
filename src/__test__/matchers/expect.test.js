describe("expect 확인하기", () => {
  // 예상하다라는 뜻으로 테스트를 할 때마다 사용되며 expect의 결과와 matcher의 결과값을 비교한다.
  test("expect", () => expect(3).toBe(3));
});

describe("expect.not 확인하기", () => {
  // expect의 결과와 matcher의 결과가 만족하지 않아야 테스트를 통과한다.
  test("1 === 2", () => expect(1).not.toBe(2))
});

describe("resolves 확인하기", () => {
  // promise 함수의 resolve의 값을 측정한다.
  test("promise resolve", () => {
    const promise = new Promise((resolve) => resolve(1));
    expect(promise).resolves.toBe(1);
  });
});

describe("rejects 확인하기", () => {
  // promise 함수의 reject 값을 측정한다.
  test("promise reject", () => {
    const promise = new Promise((resolve, reject) => reject(new Error("error")));
    expect(promise).rejects.toEqual(new Error("error"));
  });
});

describe("toThrow 확인하기", () => {
  // 런타임중 Error를 확인 가능하다.
  test("thorw", () => {
    const createError = () => { throw "Error" };
    expect(createError).toThrow();
  });
});