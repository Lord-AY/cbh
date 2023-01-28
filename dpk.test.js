const {
  deterministicPartitionKey,
  createSha3512Hash,
  stringify,
  checkLength,
} = require("./dpk");

const crypto = jest.requireActual("crypto")

describe("checkLength", () => {
  it("Returns false when input is not given ", () => {
    const result = checkLength();
    expect(result).toBe(false);
  });

  it("Returns false when input is less than the max partition", () => {
    const result = checkLength(3);
    expect(result).toBe(false);
  });

  it("Returns true when input is greater than the max partition", () => {
    const result = checkLength(crypto.randomBytes(256).toString("hex"));
    expect(result).toBe(true);
  });
});

describe("stringify", () => {
  it("Returns a string when input given", () => {
    const stringLiteral = stringify(20);
    expect(typeof stringLiteral).toBe("string");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns string when input is given", () => {
    const result = createSha3512Hash("test");
    expect(typeof result).toBe("string");
  });
});
