module.exports = function check(str, bracketsConfig) {
    let regexp = /\(\)|\{\}|\[\]|\|\||[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/;
    let flag;
    const trim = function (str) {
        const newStr = str.replace(regexp, "");
        if ((newStr.length !== 0) && (regexp.test(str))) {
            trim(newStr);
        } else if (newStr.length == 0) {
            return (flag = true);
        } else {
            return (flag = false);
        }
    };
    trim(str);
    return flag;
}
