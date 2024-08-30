function solution(array) {
    var biggest = 0;
    var index = 0;
    for(i=0; i<array.length; i++){
        if(biggest < array[i]){
            biggest = array[i]
            index = i
        }
    }
    return [biggest, index];
}