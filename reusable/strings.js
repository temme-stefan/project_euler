import {sumParams} from "./myMath.js";

export function getLetterValues (s,A=1){
    return s.toUpperCase().split('').map(c=>c.charCodeAt()-"A".charCodeAt()+A);
}

export function getWordScore (s){
    return getLetterValues(s).reduce(...sumParams);
}