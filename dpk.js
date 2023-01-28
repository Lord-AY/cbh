const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

// Function to create a sha3-512 hash that is being reused
const createSha3512Hash = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

// Function to stringify data if type is not a string
const stringify = (data) => JSON.stringify(data);

// Function to check length of data passed against the max partition key length
const checkLength = (candidate = "") => candidate.length > MAX_PARTITION_KEY_LENGTH;

const deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = stringify(event);
      candidate = createSha3512Hash(data);
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (checkLength(candidate)) {
    candidate = createSha3512Hash(candidate);
  }
  return candidate;
};

//Group all exports
exports.stringify = stringify;
exports.checkLength = checkLength;
exports.createSha3512Hash = createSha3512Hash;
exports.TRIVIAL_PARTITION_KEY = TRIVIAL_PARTITION_KEY;
exports.MAX_PARTITION_KEY_LENGTH = MAX_PARTITION_KEY_LENGTH;
exports.deterministicPartitionKey = deterministicPartitionKey