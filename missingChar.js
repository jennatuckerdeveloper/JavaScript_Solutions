/*
missingChar('kitten', 1) → 'ktten'
missingChar('kitten', 0) → 'itten'
missingChar('kitten', 4) → 'kittn'
*/

const missingChar = function(str, n) {
    return str.replace(str.charAt(n), "")
};
