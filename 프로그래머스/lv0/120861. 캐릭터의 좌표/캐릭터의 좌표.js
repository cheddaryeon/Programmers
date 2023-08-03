// function solution(keyinput, board) {
//     let center=[0,0]
//     keyinput.map((i)=>{
//         i === "left"? center[0]-=1 : i === "right"? center[0] += 1 : i==="up" ? center[1] += 1 : center[1] -=1
//     })
//     if(center[0] < -(board[0]/2) || (board[0]/2) < center[0]){
//         center[0]>0 ? center[0] = Math.trunc(board[0]/2) : center[0] =  -Math.trunc(board[0]/2)
//     }
//     if(center[1] < -(board[1]/2) || (board[1]/2) < center[1]){
//         center[1]>0 ? center[1] =  Math.trunc(board[1]/2) : center[1] =  -Math.trunc(board[1]/2)
//     }
//     return center
// }
function solution(keyinput, board) {
    let center=[0,0]
    keyinput.map((i)=>{
        if(i === "left" && -(board[0]/2)<center[0]-1 && center[0]-1<(board[0]/2)){
            center[0]-=1
        }
        else if(i === "right" && -(board[0]/2)<center[0]+1 && center[0]+1<(board[0]/2)){
            center[0] += 1
        }
        else if(i === "up" && -(board[1]/2)<center[1]+1 && center[1]+1<(board[1]/2)){
            center[1] += 1
        }
        else if(i === "down" && -(board[1]/2)<center[1]-1 && center[1]-1<(board[1]/2)){
            center[1] -= 1
        }
    })
    return center
}