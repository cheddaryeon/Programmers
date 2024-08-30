function solution(numbers) {
    var answer = -100000000;
    for(i=0; i<numbers.length-1; i++){
        for(j=i+1; j<numbers.length; j++){
            if(numbers[i]*numbers[j] > answer){
                answer = numbers[i]*numbers[j]
            }
        }
    }
    return answer;
}