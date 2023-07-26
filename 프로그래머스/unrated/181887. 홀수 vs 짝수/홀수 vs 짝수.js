function solution(num_list) {
    let odd =0, even = 0
    for (i=0; i< num_list.length; i++){
        if(i%2 == 0){
            odd = odd + num_list[i]
        }
        else{
            even = even + num_list[i]
        }
    }
    return odd > even ? odd : even
}