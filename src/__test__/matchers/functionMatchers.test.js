function add(num1, num2, callback) {
  callback(num1, num2);
  return num1 + num2;
}

// functionMatcher는 mock 함수이거나 spy 함수만 가능하다.

describe("toHaveBeenCalled 확인하기", () => {
  // 1번 이라도 호출되면 통과한다.
  test("log 함수 호출 여부", () => {
    const log = jest.fn();
    add(1, 2, log);
    expect(log).toHaveBeenCalled();
  });
});

describe("toHaveBeenCalled 확인하기", () => {
  // 정확한 호출 횟수를 지정하며 해당 횟수가 맞아야 통과한다.
  test("log 함수 호출 여부", () => {
    const log = jest.fn();
    add(1, 2, log);
    expect(log).toHaveBeenCalledTimes(1);
    add(1, 2, log);
    expect(log).toHaveBeenCalledTimes(2);
  });
});

describe("toHaveBeenCalledWith 확인하기", () => {
  // 함수의 파라미터를 확인한다.
  test("log 함수 호출 여부", () => {
    const log = jest.fn();
    add(1, 2, log);
    expect(log).not.toHaveBeenCalledWith(1);
    expect(log).toHaveBeenCalledWith(1, 2);
  });
});

describe("toHaveBeenLastCalledWith 확인하기", () => {
  // 마지막 호출된 파라미터를 확인한다.
  // 호출된 시점을 기억한다 1번 사용할 때 마다 다음 파라미터를 확인한다.
  test("log 함수 호출 여부", () => {
    const log = jest.fn();
    add(1, 2, log);
    add(3, 4, log);
    expect(log).toHaveBeenCalledWith(1, 2);
    expect(log).toHaveBeenCalledWith(3, 4);
  });
});

describe("toHaveBeenNthCalledWith 확인하기", () => {
  // 첫 번째 요소에 정확한 호출 시점을 명시해서 사용하며 해당 함수의 파라미터를 확인한다.
  test("log 함수 호출 여부", () => {
    const log = jest.fn();
    add(1, 2, log);
    add(3, 4, log);
    expect(log).toHaveBeenNthCalledWith(1, 1, 2);
    expect(log).toHaveBeenNthCalledWith(2, 3, 4);
  });
});

describe("toHaveReturned 확인하기", () => {
  // 한번이라도 함수의 결과값이 return 될 경우를 확인한다.
  test("add 함수 return 여부", () => {
    const add = jest.fn();
    add.mockReturnValue(3);
    const log = jest.fn();
    add(1, 2, log);
    expect(add).toHaveReturned();
  });
});

describe("toHaveReturnedTimes 확인하기", () => {
  // 함수가 결과값이 몇번 호출되었는지 확인한다.
  test("add 함수 return 여부", () => {
    const add = jest.fn();
    add.mockReturnValue(3);
    const log = jest.fn();
    add(1, 2, log);
    add(1, 2, log);
    expect(add).toHaveReturnedTimes(2);
  })
});

describe("toHaveReturnedWith 확인하기", () => {
  // 함수의 결과값을 확인한다.
  test("add 함수 return 값 확인", () => {
    const add = jest.fn();
    add.mockReturnValue(3);
    const log = jest.fn();
    add(1, 2, log);
    add(1, 2, log);
    expect(add).toHaveReturnedWith(3);
  });
});

describe("toHaveLastReturnedWith 확인하기", () => {
  // 함수의 마지막 결과값을 확인한다.
  test("add 함수 return 값 확인", () => {
    const add = jest.fn();
    add.mockReturnValueOnce(3).mockReturnValue(7);
    const log = jest.fn();
    add(1, 2, log);
    add(3, 4, log);
    expect(add).toHaveLastReturnedWith(7);
  });
});

describe("toHaveNthReturnedWith 확인하기", () => {
  // 함수의 호출시점을 정확히 명시하여 사용하며 함수의 결과값을 확인한다.
  test("add 함수 return 값 확인", () => {
    const add = jest.fn();
    add.mockReturnValueOnce(3).mockReturnValue(7);
    const log = jest.fn();
    add(1, 2, log);
    add(3, 4, log);
    expect(add).toHaveNthReturnedWith(1, 3);
    expect(add).toHaveNthReturnedWith(2, 7);
  });
});