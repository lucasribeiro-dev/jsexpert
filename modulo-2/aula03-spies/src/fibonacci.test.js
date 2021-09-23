const Fibonacci = require('./fibonacci.js');
const sinon = require('sinon');
const assert = require('assert');


// Fibonnaci: the next value matches the sum of two previous
; (async () => {

    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);

        // need to wait the nexts values of yiled
        for await (const i of fibonacci.execute(3)) { }
        const expectedCallCount = 4;

        assert.deepStrictEqual(spy.callCount, expectedCallCount);
    }
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);

        // Other way to wait
        const [...results] = fibonacci.execute(5) 


        const { args } = spy.getCall(2);
        const expectedResult = [0,1,1,2,3]
        const expectedParams = Object.values({
            input: 3,
            current:1,
            next:2,
        })
        assert.deepStrictEqual(args, expectedParams);
        assert.deepStrictEqual(results, expectedResult);

    }
})();