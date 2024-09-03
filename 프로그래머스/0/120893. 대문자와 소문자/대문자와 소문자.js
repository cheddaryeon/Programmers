function solution(my_string) {
    return my_string.split("").map(element => element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()).join('')
}