import {sumParams} from "./myMath.js";

export function getLetterValues(s, A = 1) {
    return s.toUpperCase().split('').map(c => c.charCodeAt() - "A".charCodeAt() + A);
}

export function getWordScore(s) {
    return getLetterValues(s).reduce(...sumParams);
}

export function isPalindrom(n) {
    const s = "" + n;
    let isP = true;
    for (let i = 0; i < s.length / 2 && isP; i++) {
        isP = s[i] == s[s.length - 1 - i];
    }
    return isP;
}