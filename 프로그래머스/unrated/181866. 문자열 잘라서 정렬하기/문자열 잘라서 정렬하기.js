function solution(myString) {
    let newlist = []
    let list = myString.split("x").sort()
    list.map((i)=>{
        i ===""? null : newlist.push(i)
    })
    return newlist
}