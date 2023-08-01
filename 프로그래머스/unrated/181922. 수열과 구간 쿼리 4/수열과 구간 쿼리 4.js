function solution(arr, queries) {
    queries.map((i)=>{
        for(x=i[0]; x <= i[1]; x++){
            x%i[2] === 0? arr[x] +=1 : null
        }
    })
    return arr;
}