// function solution(start_num, end_num) {
//     var answer = [];
//     for (let i=0; i<=start_num-end_num; i++){
//         answer.push(start_num-i)
//     }
//     return answer;
// }
function solution(start_num, end_num){
    var answer = [];
    for (let i=start_num; i>=end_num; i--){
        answer.push(i)
    }
    return answer;
}