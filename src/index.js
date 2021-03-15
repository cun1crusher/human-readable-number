module.exports = function toReadable(number) {
    const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numStr = number.toString();

    if (number === 0) {
        return 'zero';
    }

    if (number < 20) {
        return digits[number];
    }

    if (numStr.length == 2) {
        return (tens[numStr[0]] + ' ' + digits[numStr[1]]).trim();
    }

    if (numStr.length == 3) {
        if (numStr[1] == '0' && numStr[2] == '0') {
            return digits[numStr[0]] + ' hundred';
        }
        else {
            return digits[numStr[0]] + ' hundred ' + toReadable(+(numStr[1] + numStr[2]));
        }
    }
}