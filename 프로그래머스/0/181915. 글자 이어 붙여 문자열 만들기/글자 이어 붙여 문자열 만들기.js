function solution(my_string, index_list) {
    var answer = '';
    index_list.forEach(i => {
        answer += my_string[i]
    });
    // index_list.map(i => {
    //     answer += my_string[i]
    // })
    // map은 배열의 각 요소를 변환하여 새 배열을 만드는 데 사용된다
    // map은 결과를 바로 문자열로 결합하지 않고 배열을 반환하는 경우이기에
    // 아래와 같이 사용하는게 바람직하다
    // return index_list.map(i => my_string[i]).join('');
    return answer;
}