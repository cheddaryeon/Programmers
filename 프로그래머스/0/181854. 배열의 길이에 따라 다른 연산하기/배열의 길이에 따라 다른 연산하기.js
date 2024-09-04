function solution(arr, n) {
    var answer = arr;
    let i = 0;
    if(arr.length % 2 === 0){
        i = 1;   
    }
    for(i; i<answer.length; i += 2){
        answer[i] += n
    }
    return answer;
}