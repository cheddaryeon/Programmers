function solution(n, k) {
    var answer = [];
    for(i=0; i<Math.floor(n/k); i++){
        answer.push(k+k*i)
    }
    return answer;
}