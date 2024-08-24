function solution(n) {
    var sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt)? 1 : 2;
}