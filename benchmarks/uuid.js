const { hrtime } = require('process');
const { v4: uuidA } = require('uuid');
const { randomUUID: uuidB } = require('crypto');

let res = undefined;

// uuid -------------------------------------
let start = hrtime.bigint();
for (let i = 0; i < 1e7; i += 1) {
  res = uuidA();
}
let elapsed = hrtime.bigint() - start;
console.log(`uuid: ${elapsed} ns`);

// native -----------------------------------
start = hrtime.bigint();
for (let i = 0; i < 1e7; i += 1) {
  res = uuidB();
}
elapsed = hrtime.bigint() - start;
console.log(`native: ${elapsed} ns`);
