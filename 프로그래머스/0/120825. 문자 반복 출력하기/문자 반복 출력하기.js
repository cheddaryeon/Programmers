function solution(my_string, n) {
    let arr = my_string.split('')
    let answer = [];
    for(i=0; i<arr.length; i++){
        for(j=0; j<n; j++){
            answer.push(arr[i])
        }
    }
    return answer.join('');
}