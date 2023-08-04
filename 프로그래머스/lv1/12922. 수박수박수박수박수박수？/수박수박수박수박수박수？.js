function solution(n) {
    let name = ""
    for(i=0;i<=n/2;i++){
        name += "수박"
    }
    return n%2? name.slice(0,-1) : name.slice(0,-2);
}