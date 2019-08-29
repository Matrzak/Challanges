'use strict';

let sisTriangle = (a,b,c) => {
    const max = a < b ? (b <= c ? c : b) : (a <= c ? c : a);
    return max === a ? (b + c > a) : (max === b ? (a + c > b) : (max === c ? (a + b > c) : null));
};

/* Better way */

let isTriangle = (a,b,c) => {
    return a + b > c && a + c > b && c + b > a;
};