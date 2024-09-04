function solution(myString, pat) {
    return myString.split('').map(element => element === "A" ? element = "B" : element ="A").join('').includes(pat) ? 1 : 0;
    
}