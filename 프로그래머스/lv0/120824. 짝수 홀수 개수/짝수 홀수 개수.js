function solution(num_list) {
    var answer = [0,0];
    num_list.map((i)=>{answer[i%2] += 1})
    return answer;
}