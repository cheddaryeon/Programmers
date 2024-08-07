function solution(arr) {
    // var answer = [];
    // for (let i=0; i<arr.length; i++){
    //     if(arr[i] >= 50 & arr[i]%2 == 0){
    //         answer.push(arr[i]/2)
    //     }
    //     else if(arr[i] < 50 & arr[i]%2 == 1){
    //         answer.push(arr[i]*2)
    //     }
    //     else{
    //         answer.push(arr[i])
    //     }
    // }
    let answer = arr.map(function(element){
        if(element >= 50 && element%2 == 0){
            return element/2
        }
        else if (element < 50 && element%2 == 1){
            return element*2
        }
        else{
            return element
        }
    });
    return answer;
}