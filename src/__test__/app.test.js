import app from '../app.js';

test("1 + 1 = 2", () => {
    expect(app(1, 2)).toBe(3);
});