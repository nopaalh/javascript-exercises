const palindromes = function (str) {
    let strNoPunct = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let strNoSpaces = strNoPunct.replaceAll(' ', '');

    let left = 0;
    let right = strNoSpaces.length - 1;

    while (left < right) {
        if (strNoSpaces[left] !== strNoSpaces[right]) {
            return false;
        }
        left++;
        right--;

    }
    return true;


};

// Do not edit below this line
module.exports = palindromes;
