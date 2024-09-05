function solution(num_str) {
    return num_str.split('').map(element => Number(element)).reduce((a,b) => a+b, 0)
}