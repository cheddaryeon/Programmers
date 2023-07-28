function solution(intStrs, k, s, l) {
    let newintStrs = []
    intStrs.map((i) => {
        let slice = Number(i.slice(s,s+l))
        slice > k ? newintStrs.push(slice):null
    })
    return newintStrs
}