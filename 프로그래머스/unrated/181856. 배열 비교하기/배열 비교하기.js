function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length < arr2.length){
        answer = -1
    }
    else if(arr1.length > arr2.length){
        answer = 1
    }
    else{
        let arr1_sum = arr1.reduce((a,b)=>a+b,0)
        let arr2_sum = arr2.reduce((a,b)=>a+b,0)
        if(arr1_sum < arr2_sum){
            return answer = -1
        }
        else if(arr1_sum > arr2_sum){
            return answer = 1
        }
        else{
            return answer = 0
        }
    }
    return answer;
}