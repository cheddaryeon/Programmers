function solution(my_string) {
    var answer = 0;
    for(i=0; i< my_string.length; i++){
        if(my_string[i] > 0){
            answer += my_string[i]*1
        }
    }
    return answer;
}