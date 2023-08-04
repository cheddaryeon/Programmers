function solution(n) {
    let name = ""
    for(i=0;i<n/2;i++){
        name += "수박"
    }
    return n%2? name.slice(0,-1) : name;
}
//"n=2n-n"을 생각했다면 더 간결하게 쓸 수 있을 듯 +repeat
//2는 '수박' 글자 수