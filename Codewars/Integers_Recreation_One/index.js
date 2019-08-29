const reducer = (accumulator, currentValue) => accumulator + currentValue;

function listSquared(m, n) {
    let result=[],array=[],squared=[];
    for(let i = m; i <= n; i++) array.push(i);
    array.map((element) => {
        let rv = checkInt(element);
        if(rv[0]) result.push([element, rv[1]]);
    });
    return result;
}
function checkInt(m){
    let divisors = [];
    for(let i = 0; i <= m; i++) if(m % i === 0) divisors.push(Math.pow(i,2));
    let x = divisors.reduce(reducer);
    return [Math.sqrt(x) % 1 === 0, x];
}
