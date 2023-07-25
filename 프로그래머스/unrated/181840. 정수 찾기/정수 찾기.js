function solution(num_list, n) {
    var answer = 0;
    if(num_list.find(i => i == n) != undefined){
        answer=1
    }
    return answer;
}
//여부를 생각할 땐 includes로 true/false를 가려내도 좋다
// function solution(num_list, n) {
//     var answer = 0;
//     if(num_list.includes(n) == true){
//         answer=1
//     }
//     return answer;
// }