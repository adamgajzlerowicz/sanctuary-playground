const S = require('sanctuary');

const log = x => {
    console.log(x);
    return x;
}
const a = 1;
const b = {b: 'b'};
const c = null;
const d = null;

const inc = x => {
    return x + 1;
};

const checkIsTrue = S.and(S.isJust(S.toMaybe(a)), S.isJust(S.toMaybe(b)));
const checkIsFalse = S.and(S.isJust(S.toMaybe(c)), S.isJust(S.toMaybe(d)));

const result = S.pipe([
    S.map(inc),
    S.eitherToMaybe,
    log,
], checkIsTrue ? S.Right(a) : S.Left(b));


console.log(S.fromMaybe(null, S.Just(42)));
// console.log(result);


