const S = require('sanctuary');

const a = 1;
const b = {b: 'b'};
const c = null;
const d = null;

const inc = x => x + 1;

const isTrue = S.and(S.isJust(S.toMaybe(a)), S.isJust(S.toMaybe(b)));
const isFalse = S.and(S.isJust(S.toMaybe(c)), S.isJust(S.toMaybe(d)));

const result = S.pipe([
    S.map(inc),
    S.eitherToMaybe,
    S.maybeToNullable
], isFalse ? S.Right(a) : S.Left(a));


console.log(result);


