var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length;

    let subString = s[0];

    let i = 1;
    let start = 0;
    let temp = s[start];

    while (start < s.length && i < s.length) {
        if (!temp.includes(s[i])) {
            temp += s[i];
            if (temp.length > subString.length) {
                subString = temp;
            }
        } else {
            start++;
            temp = s[start];
        }
        i++;
    }

    return subString.length;
};

const s = "dvdf";
console.log(lengthOfLongestSubstring(s));
