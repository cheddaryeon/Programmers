function solution(a, b) {
    var num1 = parseInt(a.toString()+b.toString());
    var num2 = parseInt(b.toString()+a.toString());
    return num1 > num2 ? num1 : num2;
}