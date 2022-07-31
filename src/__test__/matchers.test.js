describe("toBe 확인하기", () => {
    // type 엄격하게 체크한다.
    // Object.is() 사용하여 참조값의 주소도 확인한다.
    test("1 === 1", () => expect(1).toBe(1));
    test("'1' === '1'", () => expect('1').toBe('1'));
    test.skip("1 === '1'", () => expect(1).toBe('1'));
    test.skip("true === 1", () => expect(true).toBe(1));
    test.skip("[1,2,3] === [1,2,3]", () => expect([1, 2, 3]).toBe([1, 2, 3]));
    test.skip("{ id: 1 } === { id: 1 }", () => expect({ id: 1 }).toBe({ id: 1 }));
});

describe("toEqual 확인하기", () => {
    // type 엄격하게 체크한다.
    // 참조값은 깊은 복사하여 값을 비교한다.
    test("1 === 1", () => expect(1).toEqual(1));
    test("'1' === '1'", () => expect('1').toEqual('1'));
    test.skip("1 === '1'", () => expect(1).toEqual('1'));
    test.skip("true === 1", () => expect(true).toEqual(1));
    test("[1,2,3] === [1,2,3]", () => expect([1, 2, 3]).toEqual([1, 2, 3]));
    test("{ id: 1 } === { id: 1 }", () => expect({ id: 1 }).toEqual({ id: 1 }));
    test("[1, 2], 3] === [1, 2], 3]", () => expect([[1, 2], 3]).toEqual([[1, 2], 3]));
});

describe("toBeTruthy 확인하기", () => {
    // 비교하는 값이 Truthy 한지 체크한다.
    test("true", () => expect(true).toBeTruthy());
    test("1", () => expect(1).toBeTruthy());
    test("'true'", () => expect("true").toBeTruthy());
    test("[1]", () => expect([1]).toBeTruthy());
    test("{ id: 1 }", () => expect({ id: 1 }).toBeTruthy());
});

describe("toBeFalsy 확인하기", () => {
    // 비교하는 값이 Falsy 한지 체크한다.
    test("false", () => expect(false).toBeFalsy());
    test("0", () => expect(0).toBeFalsy());
    test("''", () => expect('').toBeFalsy());
    test("null", () => expect(null).toBeFalsy());
    test("undefined", () => expect(undefined).toBeFalsy());
    test("NaN", () => expect(NaN).toBeFalsy());
});

describe("toMatch 확인하기", () => {
    // 값에 정규식이나 문자가 올 수 있다.
    // 값에 문자가 들어오면 비교할려는 문자에 포함만 되어도 테스트를 통과한다.
    // 정확하게 일치하는 문법을 사용하려면 정규 표현식을 사용해야 한다.
    test("string", () => expect("string").toMatch("str"));
    test.skip("string", () => expect("string").toMatch(/^ing/));
    test.skip("string", () => expect("string").toMatch(/^str$/));
});

describe("toContain 확인하기", () => {
    // 배열 문자열 set 가능
    // 이터러블 프로토콜을 지킨 Map에서도 불가능
    // 값만 가능
    test("string contain", () => expect("string contain").toContain("contain"));
    test("[1,2,3]", () => expect([1, 2, 3]).toContain(1));
    test.skip("{ id: 1, pw: 2 }", () => expect({ id: 1, pw: 2 }).toContain(2));
    test("new Set([1])", () => expect(new Set([1])).toContain(1));
    test.skip("new Map([[id: 1]])", () => expect(new Map([["id", 1]])).toContain(1));
    test.skip("[[1,2,3], { id: 1 }]", () => expect([[1, 2, 3], { id: 1 }]).toContain([1, 2, 3]));
});

describe("toContainEqual 확인하기", () => {
    // 배열의 구조만 확인 가능
    // 배열 안의 요소가 객체나 배열도 비교 가능
    test.skip("string contain", () => expect("string contain").toContainEqual("contain"));
    test("[1,2,3]", () => expect([1, 2, 3]).toContainEqual(1));
    test("[[1,2,3], { id: 1 }]", () => expect([[1, 2, 3], { id: 1 }]).toContainEqual([1, 2, 3]));
});