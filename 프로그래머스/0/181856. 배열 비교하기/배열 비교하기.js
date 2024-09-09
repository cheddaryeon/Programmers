function solution(arr1, arr2) {
    if(arr1.length < arr2.length){
        return -1;
    }
    else if(arr1.length > arr2.length){
        return 1;
    }
    else{
        if(arr1.reduce((a,b) => a+b,0) < arr2.reduce((a,b) => a+b,0)){
            return -1;
        }
        else if(arr1.reduce((a,b) => a+b,0) > arr2.reduce((a,b) => a+b,0)){
            return 1;
        }
        else{
            return 0;
        }
        
    }
}