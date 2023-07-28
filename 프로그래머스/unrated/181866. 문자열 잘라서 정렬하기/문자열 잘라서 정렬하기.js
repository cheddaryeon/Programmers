function solution(myString) {
    let newlist = []
    let list = myString.split("x").sort()
    list.map((i)=>{
        if(i !== ""){
            newlist.push(i)
        }
    })
    return newlist
}