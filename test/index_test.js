const mocha = require("mocha")
const cod = require("../index").chooseOptimalDistance;
const assert = require("assert")
let randomstring = require("randomstring")
describe("Index.js test", function () {
    it("check that chooseOptimalDistance method returns correct value", done => {
        // GIVEN
        let expectedOptimalDistance = 173;

        // WHEN
        let actualOptimalDistance = cod(174, 3, [51, 56, 58, 59, 61]);

        // THEN
        assert.equal(actualOptimalDistance, expectedOptimalDistance, "Wrong distance");
        done();
    })
    it("сheck if undefined values are passed to the chooseOptimalDistance method", done => {
        //WHEN
        let undef_values = cod();

        //THEN
        assert.equal(undef_values, null, "Undefined values, must return null")
        done();
    })
    it("check that chooseOptimalDistance method returns null", done => {
        //WHEN
        let returns_null = cod(163, 3, [50]);

        //THEN
        assert.equal(null, returns_null, "ls length < k, must return null");
        done();
    })

    it("check correct entry of t value in chooseOptimalDistance method (t < 0)", done => {
        // WHEN
        let negativeT = cod(-1, 3, [51, 56, 58, 59, 61]);

        // THEN
        assert.equal(negativeT, null, "t < 0, must return null");
        done();
    })
    it("check correct entry of t value in chooseOptimalDistance method (t - string)", done => {
        // WHEN
        let randomStringT = cod(randomstring.generate(7), 3, [51, 56, 58, 59, 61]);

        // THEN
        assert.equal(randomStringT, null,"t - string, must return null");
        done();
    })
    it("check correct entry of k value in chooseOptimalDistance method (k <= 0)", done => {
        // WHEN
        let negativeK = cod(174, 0, [51, 56, 58, 59, 61]);

        //THEN
        assert.equal(negativeK, null, "k <= 0, must return null")
        done();
    })
    it("check correct entry of k value in chooseOptimalDistance method (k - string)", done => {
        // WHEN
        let randomStringK = cod(174, randomstring.generate(20), [51, 56, 58, 59, 61])

        //THEN
        assert.equal(randomStringK, null, "k - string, must return null")
        done();
    })

    it("check correct entry of ls value in chooseOptimalDistance method (ls length check)", done => {
        //WHEN
        let  nullLS = cod(174, 3, []);
        let lsLengthLessK = cod(174, 3, [51, 56]);
        let lsLengthEqualK = cod(174, 3, [51, 56, 58]);

        //THEN
        assert.equal(nullLS, null, "Must return null");
        assert.equal(lsLengthLessK, null, "Must return null");
        assert.equal(lsLengthEqualK, 165, "Wrong distance");

        done();
    })
    it("check correct entry of ls value in chooseOptimalDistance method (ls >= 0)", done => {
        //GIVEN
        let expectedOptimalDistance = 171

        //WHEN
        let lsZero = cod(174, 3, [51, 0, 58, 59, 61]);

        //THEN
        assert.equal(lsZero, expectedOptimalDistance, "Wrong distance")
        done();
    })
    it("check correct entry of ls value in chooseOptimalDistance method (ls - string)", done => {
        //WHEN
        let randomstringLS = cod(174, 3, [51, 0, randomstring.generate(5), 59, 61]);

        //THEN
        assert.equal(randomstringLS, null, "ls - string, must return null")
        done();

    })
    it("check when t value < minimal sum of distances in chooseOptimalDistance method", done => {
        //WHEN
        let tLessSum = cod(10, 3, [100, 50, 70])

        //THEN
        assert.equal(tLessSum, null, "t < sum, must return null")
        done();
    })
    it("check when t value > max sum of distances in chooseOptimalDistance method", done => {
        //GIVEN
        let expectedOptimalDistance = 134;

        //WHEN
        let tBiggerMaxSum = cod(174, 4, [10, 11, 45, 56, 22])
        assert.equal(tBiggerMaxSum, expectedOptimalDistance, "Wrong distance")

        done();
    })
    it("check that chooseOptimalDistance method returns correct value (t = 122, k = 2)", done => {
        //GIVEN
        let expectedOptimalDistance = 122;

        //WHEN
        let actualOptimalDistance = cod(122, 2, [10, 11, 45, 56, 22, 67, 77, 94, 23])

        //THEN
        assert.equal(actualOptimalDistance, expectedOptimalDistance, "Wrong distance")
        done();
    })
    it("check that chooseOptimalDistance method returns correct value (t = 254, k = 5)", done => {
        //GIVEN
        let expectedOptimalDistance = 245;

        //WHEN
        let actualOptimalDistance = cod(254, 5, [10, 11, 45, 56, 22, 32, 45, 67])

        //THEN
        assert.equal(actualOptimalDistance, expectedOptimalDistance, "Wrong distance")
        done();
    })
    it("check that chooseOptimalDistance method returns correct value (t = 512, k = 8)", done => {
        //GIVEN
        let expectedOptimalDistance = 512;

        //WHEN
        let actualOptimalDistance = cod(512, 8, [10, 110, 45, 56, 32, 23, 44, 110, 66, 43, 50, 2])

        //THEN
        assert.equal(actualOptimalDistance, expectedOptimalDistance, "Wrong distance")
        done();

    })
})