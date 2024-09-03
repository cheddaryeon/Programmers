function solution(my_string) {
    return my_string.split("").filter(element => element >= 0).sort((a,b) => a-b).map(Number)
}