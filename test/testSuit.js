class Callable extends Function {
    constructor() {
        super('...args', 'return this._bound._call(...args)')
        this._bound = this.bind(this)

        return this._bound
    }

    _call(...args) {
        console.log(this, args)
    }
}

class TestSuit extends Function {
    constructor() { // https://medium.com/@adrien.za/creating-callable-objects-in-javascript-fbf88db9904c makes returned instances callable

        // callable wizardry
        super('...args', 'return this._bound._call(...args)'); this._bound = this.bind(this);

        // emulates this.tests = []
        this._bound.tests = [];
        return this._bound;
    }

    reset() {
        this.tests = [];
        return this;
    }

    clear() {
        return this.reset();
    }

    _call(expr) {
        this.expr = expr;
        return this;
    }

    with(...args) {
        this.args = args;
        return this;
    }

    given(...args) {
        return this.with(...args);
    }


    isNull() {
        return this.equals(null);
    }

    isUndefined() {
        return this.equals(undefined);
    }

    isFalse() {
        return this.equals(false);
    }

    isNaN() {
        const value = this.evaluate();
        const result = Number.isNaN(value);
        this.tests.push({
            type: 'equals isNaN',
            message: `value: ${value}`,
            exprName: this.expr.name,
            result,
        });
        return result;
    }

    isTrue() {
        return this.equals(true);
    }

    equals(expectedValue) {
        try {
            const value = this.evaluate();
            const result = value === expectedValue;
            this.tests.push({
                type: `equals ${expectedValue}`,
                message: `value: ${value}`,
                exprName: this.expr?.name,
                result,
            });
            return result;
        }
        catch (thrownErr) {
            this.tests.push({
                type: `equals ${expectedValue}`,
                message: `threw unexpected error ${thrownErr}`,
                exprName: this.expr?.name,
                result: false,
            });
            return false; // failure
        }
    }

    throws(expectedErrorType) {
        let result = false;
        let message;
        try {
            this.expr(...this.args);
        }
        catch (thrownErr) {
            //console.log(thrownErr);
            if (thrownErr instanceof expectedErrorType) {
                result = true;
                message = "success";
            } else {
                message = `threw unexpected error ${thrownErr}`;
            }
        }
        if (!message) {
            message = `no error thrown`;
        }
        this.tests.push({
            type: `throws ${expectedErrorType}`,
            message,
            exprName: `${this.expr?.name}(${this.args})`,
            result,
        });
        return result;
    }

    stats() {
        return `${this.tests.length} tests ran, ${this.tests.filter(x => x.result).length}/${this.tests.length} passed\n`;
    }

    showStats() {
        console.log(this.stats());
    }

    failures() {
        let output = "";
        this.tests.forEach((test, testIndex) => {
            if (!test.result) {
                const line = `Test ${testIndex + 1} of type '${test.type}' failed with message ${test.message}`;
                output += line + "\n";
            }

        });
        return output;
    }

    showFailures() {
        console.log(this.failures);
    }


    summary() {
        let output = this.stats();
        if (this.tests.every(test => test.result)) {
            const success_phrase = "All PASSED";
            output += success_phrase + "\n";
        }
        else {
            output += this.failures();
        }
        return output;
    }

    showSummary() {
        console.log(this.summary());
    }

    evaluate() {
        if (this.expr instanceof Function) { // possibly in the future could allow overriding of this to allow comparing function objects.
            return this.expr(...this.args);
        }
        return this.expr; // assume the expression has already been evaluated to a value
    }
}

// Sacrilegious behaviour, but allows for multiple imports within one file to be consistent
delete require.cache[require.resolve("./testSuit.js")];

const path = require("path");
console.log(path.relative(module.path, module.parent.filename));

module.exports = {
    TestSuit,
    test: new TestSuit(),
}

// PS D:\Everything else\Digital Futures\Workspace\TDD Activity\test> New-Item -ItemType SymbolicLink -Path ".\testSuit.js" -Target "D:\Everything else\Digital Futures\Workspace\TestingFramework\src\testSuit.js"

// Better to use> New-Item -ItemType HardLink -Path ".\testSuit.js" -Target "D:\Everything else\Digital Futures\Workspace\TestingFramework\src\testSuit.js"