const test = {
    assertEquals(val1, val2) {
        if (val1 !== val2) throw new Error(`Custom error message`);
    }
}