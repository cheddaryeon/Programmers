function solution(num_list, n) {
    var answer = 0;
    if(num_list.find(i => i == n) != undefined){
        answer=1
    }
    return answer;
}