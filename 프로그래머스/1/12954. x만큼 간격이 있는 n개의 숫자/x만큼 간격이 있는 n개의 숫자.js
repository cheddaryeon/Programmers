function solution(x, n) {
    var answer = [];
    for (i=0; i<n; i++){
        answer.push(x+i*x)
    }
    return answer;
}