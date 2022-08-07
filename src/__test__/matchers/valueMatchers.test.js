describe("toBe 확인하기", () => {
    // type 엄격하게 체크한다.
    // Object.is() 사용하여 참조값의 주소도 확인한다.
    test("1 === 1", () => expect(1).toBe(1));
    test("'1' === '1'", () => expect('1').toBe('1'));
    test("1 === '1'", () => expect(1).not.toBe('1'));
    test("true === 1", () => expect(true).not.toBe(1));
    test("[1,2,3] === [1,2,3]", () => expect([1, 2, 3]).not.toBe([1, 2, 3]));
    test("{ id: 1 } === { id: 1 }", () => expect({ id: 1 }).not.toBe({ id: 1 }));
});

describe("toEqual 확인하기", () => {
    // type 엄격하게 체크한다.
    // 참조값은 깊은 복사하여 값을 비교한다.
    test("1 === 1", () => expect(1).toEqual(1));
    test("'1' === '1'", () => expect('1').toEqual('1'));
    test("1 === '1'", () => expect(1).not.toEqual('1'));
    test("true === 1", () => expect(true).not.toEqual(1));
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
    test("string", () => expect("string").not.toMatch(/^ing/));
    test("string", () => expect("string").not.toMatch(/^str$/));
});

describe("toContain 확인하기", () => {
    // 배열 문자열 set 가능하다
    // 이터러블 프로토콜을 지킨 Map에서도 불가능하다
    // 값만 가능하다
    test("string contain", () => expect("string contain").toContain("contain"));
    test("[1,2,3]", () => expect([1, 2, 3]).toContain(1));
    test("{ id: 1, pw: 2 }", () => expect({ id: 1, pw: 2 }).not.toContain(2));
    test("new Set([1])", () => expect(new Set([1])).toContain(1));
    test("new Map([[id: 1]])", () => expect(new Map([["id", 1]])).not.toContain(1));
    test("[[1,2,3], { id: 1 }]", () => expect([[1, 2, 3], { id: 1 }]).not.toContain([1, 2, 3]));
});

describe("toContainEqual 확인하기", () => {
    // 배열의 구조만 확인 가능하다
    // 배열 안의 요소가 객체나 배열도 비교 가능하다
    test("string contain", () => expect("string contain").not.toContainEqual("contain"));
    test("[1,2,3]", () => expect([1, 2, 3]).toContainEqual(1));
    test("[[1,2,3], { id: 1 }]", () => expect([[1, 2, 3], { id: 1 }]).toContainEqual([1, 2, 3]));
});

describe("toHaveProperty 확인하기", () => {
    // 객체 안의 키가 있는지 확인한다.
    // 첫 번째 요소는 키를 받으며 두 번째 요소는 값을 받는다.
    test("{ id: 1, pw: 10 }", () => expect({ id: 1, pw: 10 }).toHaveProperty("id"));
    test("{ id: 1, pw: 10 }", () => expect({ id: 1, pw: 10 }).toHaveProperty("pw"));
    test("{ id: 1, pw: 10 }", () => expect({ id: 1, pw: 10 }).toHaveProperty("pw", 10));
});

describe("toMatchObject 확인하기", () => {
    // 객체의 키의 값중 한개라도 일치하는지 확인한다.
    test("{ id: 1 }", () => expect({ id: 1, pw: 10 }).toMatchObject({ pw: 10 }));
    test("{ id: 1 }", () => expect({ id: 1, pw: 10 }).not.toMatchObject({ id: 10 }));
});

describe("toStrictEqual 확인하기", () => {
    // 객체의 키의 값이 모두 일치해야 통과한다.
    test("{ id: 1 }", () => expect({ id: 1, pw: 10 }).toStrictEqual({ id: 1, pw: 10 }));
    test("{ id: 1 }", () => expect({ id: 1, pw: 10 }).not.toStrictEqual({ id: 1, pw: 15 }));
});

describe("toBeCloseTo 확인하기", () => {
    // 부동소수점 숫자를 비교하는데 사용한다.
    // 첫 번째 요소는 값이고 두 번재 요소는 확인할 소수점 자리를 지정할 수 있다.
    // toBe는 엄격하게 관리하기 때문에 실패한다.
    test('0.2 + 0.1 === 0.3', () => expect(0.2 + 0.1).not.toBe(0.3));
    test('0.2 + 0.1 === 0.3', () => expect(0.2 + 0.1).toBeCloseTo(0.3));
    // 소수점 5번째 자리까지 확인해서 반올림한다.
    test('0.2 + 0.1 === 0.3', () => expect(0.2 + 0.1).toBeCloseTo(0.3, 5));
});

describe("toBeGreaterThan 확인하기", () => {
    // A > B
    test("2 > 1", () => expect(2).toBeGreaterThan(1));
    test("2 > 1", () => expect(2).not.toBeGreaterThan(2));
});

describe("toBeGreaterThanOrEqual 확인하기", () => {
    // A >= B
    test("2 >= 1", () => expect(2).toBeGreaterThanOrEqual(1));
    test("2 >= 1", () => expect(2).toBeGreaterThanOrEqual(2));
});
describe("toBeLessThan 확인하기", () => {
    // A < B
    test("1 <= 2", () => expect(1).toBeLessThan(2));
    test("1 <= 2", () => expect(1).not.toBeLessThan(1));
});

describe("toBeLessThanOrEqual 확인하기", () => {
    // A <= B
    test("1 <= 2", () => expect(1).toBeLessThanOrEqual(2));
    test("1 <= 2", () => expect(1).toBeLessThanOrEqual(1));
});