// 테스트 전 전후 처리를 담당한다.

// 테스트 시작 전에 한 번만 수행한다.
beforeAll(() => {
  console.log("beforeAll");
});

// 매회 테스트 케이스 시작 전에 실행된다.
beforeEach(() => {
  console.log("beforeEach");
});

// 테스트 완료 후에 한 번만 수행한다.
afterAll(() => {
  console.log("afterAll");
});

// 매회 테스트 케이스 완료 후에 실행된다.
afterEach(() => {
  console.log("afterEach");
});

describe.skip("테스트 사이클 확인", () => {
  test("전후 작업 1", () => {});
  test("전후 작업 2", () => {});
});

/* 

콘솔 결과:
beforeAll
beforeEach
afterEach
beforeEach
afterEach
afterAll

*/