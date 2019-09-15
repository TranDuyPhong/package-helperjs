const ASCII = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
]

const ASCIIUp = new Proxy(ASCII, {
    get: function(target, index) {
        const ascii = target[index];
        if (ascii) {
            return ascii;
        }
        return '';
    }
});

const ASCIILw = new Proxy(ASCII, {
    get: function(target, index) {
        const ascii = target[index];
        if (ascii) {
            return ascii.toLowerCase();
        }
        return '';
    }
});

module.exports = {
    ASCIIUp,
    ASCIILw,
}