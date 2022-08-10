// describe는 테스트를 그룹화하는 역할을 담당한다.
// test는 테스트 파일에 필요한 테스트를 진행하며 꼭 있어야 하는 메소드이다.

describe("테스트 그룹화", () => {
  // test와 it은 동일하며 it을 제공하는 이유는 다른 테스트 라이브러리에서 it을 사용하기 때문에 편의성으로 jest에서 제공한다.
  const animals = ["Cat", "Dog"];
  test("고양이가 animals 배열에 존재합니다.",() => expect(animals).toContain("Cat"));
  it("개가 animals 배열에 존재합니다.",() => expect(animals).toContain("Dog"));
});

describe("Skip", () => {
  // skip 메소드를 사용하면 테스트를 건너 뛸 수 있다.
  const animals = ["Lion", "Tiger", "Fox"];
  test("사자가 animals 배열에 존재합니다.", () => expect(animals).toContain("Lion"));
  test("호랑이가 animals 배열에 존재합니다.", () => expect(animals).toContain("Tiger"));
  test.skip("늑대가 animals 배열에 존재합니다.", () => expect(animals).toContain("Wolf"));
});

describe("Only", () => {
  // only 메소드를 사용하면 해당 메소드만 테스트를 실행한다.
  const animals = ["Lion", "Tiger", "Fox"];
  test.only("사자가 animals 배열에 존재합니다.", () => expect(animals).toContain("Lion"));
  test("호랑이가 animals 배열에 존재합니다.", () => expect(animals).toContain("Tiger"));
  test("늑대가 animals 배열에 존재합니다.", () => expect(animals).toContain("Wolf"));
});