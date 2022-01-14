class Assertions {
    constructor(expected) {
        this.expected = expected;
    }

    toEqual(actual) {
        if (this.expected === actual) return new Assertions(true);

        throw new Error(`Expected ${this.expected} and ${actual} to be strictly equal.`);
    }

    toThrow() {
        if (typeof this.expected !== 'function')
            throw new Error('Assertions.toThrow expects a test function.');

        try {
            this.expected();
        } catch (err) {
            return new Assertions(true);
        }

        throw new Error(`Expected ${this.expected} to throw.`);
    }
}

class Case {
    expect(expected) {
        return new Assertions(expected);
    }
}

class Test {
    constructor(description, suite) {
        this.description = description;
        this.cases = [];
        suite(this);
    }

    static describe(description, suite) {
        return new Test(description, suite);
    }

    it(description, testCase) {
        try {
            testCase(new Case());
            this.cases.push({ description, err: null });
        } catch (err) {
            this.cases.push({
                description,
                err,
            });
        }
    }

    report() {
        const { failing, passing } = this.cases.reduce(
            (acc, curr) => {
                if (curr.err === null) {
                    acc.passing.push(curr);
                } else {
                    acc.failing.push(curr);
                }
                return acc;
            },
            { failing: [], passing: [] },
        );

        const suiteName = `${this.description}: Tests Passing: ${passing.length}/${this.cases.length}`;

        console.log(`${suiteName}\n${'-'.repeat(suiteName.length)}\n`);

        failing.forEach(({ description, err }) =>
            console.log(`X - ${description}\n${err}\n\n`),
        );

        passing.forEach(({ description }) => console.log(`✓ - ${description}\n`));
    }
}

module.exports = Test;
