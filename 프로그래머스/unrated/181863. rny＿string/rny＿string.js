function solution(rny_string) {
    var answer = '';
    answer = rny_string.replaceAll('m','rn')
    return answer;
}
//repalce를 사용하려 했으나, progremmers와 같이 m이 2개 사용되는 경우 앞의 m만 rn으로 변경되는 오류 발생