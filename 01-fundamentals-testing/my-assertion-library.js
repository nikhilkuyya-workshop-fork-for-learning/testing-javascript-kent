global.test = async function test(title, callback) {
    try {
        await callback();
        console.log(`✓ ${title}`);
    } catch (err) {
        console.warn(`Χ ${title}`);
        console.error(err.message);
    }
}

global.expect = function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    };
}