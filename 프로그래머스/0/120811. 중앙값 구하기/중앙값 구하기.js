function solution(array) {
    var sort_array = array.sort((a,b) => a-b)
    return sort_array[Math.floor((sort_array.length)/2)] ;
}