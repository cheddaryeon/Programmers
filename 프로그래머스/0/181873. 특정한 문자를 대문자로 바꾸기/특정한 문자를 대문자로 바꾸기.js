function solution(my_string, alp){
    var answer = '';
    for (let i=0; i<my_string.length; i++){
        if(my_string[i] == alp){
            answer += alp.toUpperCase()
        }
        else{
            answer += my_string[i]
        }
    }
    return answer;
}

// function solution(my_string, alp) {
//     var answer = '';
//     answer = my_string.replace(alp,alp.toUpperCase())
//     return answer;
// }
//replace는 원본 문자열을 변경하지 않는다. 첫번째 발견 문자만 수행.
//toUpperCase(), toLowerCase()