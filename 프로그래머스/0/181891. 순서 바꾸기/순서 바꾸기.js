function solution(num_list, n) {
    array = num_list.slice(n)
    const newarray = array.concat(num_list.slice(0,n))
    return newarray;
}