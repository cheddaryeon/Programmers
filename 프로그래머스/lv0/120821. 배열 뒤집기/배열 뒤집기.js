function solution(num_list) {
    return num_list.reverse()
}

// function solution(num_list) {
//     var answer = [];
//     let x = num_list.length-1
//     for(i=0; i<x/2; i++){
//         answer = num_list[x-i]
//         num_list[x-i] = num_list[i]
//         num_list[i] = answer
//     }
//     return num_list;
// }