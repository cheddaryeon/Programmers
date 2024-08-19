function solution(num_list) {
    var even = 0 , odd = 0;
    for(i=0; i<num_list.length; i++){
        if(i%2 === 0){
            odd += num_list[i]
        }
        else{
            even += num_list[i]
        }
    }
    return even < odd? odd: even;
}