function solution(myString) {
    return myString.split('').map(element => element < "l"?  element = "l" : element = element).join('');
}