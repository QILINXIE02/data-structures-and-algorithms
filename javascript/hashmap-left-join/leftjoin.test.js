const { leftJoin } = require('./leftjoin');

test('should return combined data structure with synonyms and antonyms', () => {
    const synonyms = {
        "diligent": "employed",
        "fond": "enamored",
        "guide": "usher",
        "outfit": "garb",
        "wrath": "anger"
    };
    const antonyms = {
        "diligent": "idle",
        "fond": "averse",
        "guide": "follow",
        "flow": "jam",
        "wrath": "delight"
    };

    const result = leftJoin(synonyms, antonyms);
    expect(result).toEqual([
        ["diligent", "employed", "idle"],
        ["fond", "enamored", "averse"],
        ["guide", "usher", "follow"],
        ["outfit", "garb", null],
        ["wrath", "anger", "delight"]
    ]);
});

test('should handle case with no matching keys in antonyms hashmap', () => {
    const synonyms = { "happy": "joyful" };
    const antonyms = { "sad": "unhappy" };

    const result = leftJoin(synonyms, antonyms);
    expect(result).toEqual([["happy", "joyful", null]]);
});

test('should handle case with some matching and some non-matching keys', () => {
    const synonyms = { "a": "1", "b": "2" };
    const antonyms = { "a": "one", "c": "three" };

    const result = leftJoin(synonyms, antonyms);
    expect(result).toEqual([["a", "1", "one"], ["b", "2", null]]);
});

test('should handle case with empty synonym hashmap', () => {
    const synonyms = {};
    const antonyms = { "a": "antonym" };

    const result = leftJoin(synonyms, antonyms);
    expect(result).toEqual([]);
});

test('should handle case with empty antonym hashmap', () => {
    const synonyms = { "a": "synonym" };
    const antonyms = {};

    const result = leftJoin(synonyms, antonyms);
    expect(result).toEqual([["a", "synonym", null]]);
});
