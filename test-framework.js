const test = {
	assertEquals(actual, expected) {
		if (actual !== expected) throw new Error("Test failed");
	},

	assertNotEquals(actual, expected) {
		if (actual === expected) throw new Error("Test failed");
	},

	it(testMessage, testFunc) {
		try {
			testFunc();
			console.log(testMessage);
		} catch (err) {
			console.log(testMessage);
			console.log(err.message);
			console.log(err.stack);
		}
	},

	xit(message) {
		console.log("Test skipped");
	}
}

module.exports = test;
