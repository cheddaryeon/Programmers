function solution(n) {
    let answer = 0
    for(i=0; 2*i <= n; i++){
        answer += 2*i
    }
    return answer
}