const { hrtime } = require('process');
const _ = require('lodash');

let res = undefined;
const obj = { a: [{ b: { c: 0 } }] };

// lodash -----------------------------------
let start = hrtime.bigint();
for (let i = 0; i < 1e8; i += 1) {
  res = _.get(obj, ['a', '0', 'b', 'd'], 'foo');
}
let elapsed = hrtime.bigint() - start;
console.log(`lodash: ${elapsed} ns`);

// native -----------------------------------
start = hrtime.bigint();
for (let i = 0; i < 1e8; i += 1) {
  res = obj.a[0]?.b?.d ?? 'foo';
}
elapsed = hrtime.bigint() - start;
console.log(`native: ${elapsed} ns`);
