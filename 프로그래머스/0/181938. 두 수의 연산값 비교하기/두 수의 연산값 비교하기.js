function solution(a, b) {
    var first = parseInt(a.toString() + b.toString());
    var second = 2*a*b;
    return first > second ? first : second ;
}