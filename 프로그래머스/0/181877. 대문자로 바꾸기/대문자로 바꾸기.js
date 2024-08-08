function solution(myString) {
    var answer = '';
    for (let i=0; i<myString.length; i++){
        if(myString[i]>='a' && myString<='z'){
            answer += myString[i].toUpperCase()
        }
        else{
            answer += myString[i]
        }
    }
    return answer;
}