function solution(keyinput, board) {
    let center=[0,0]
    let half_x = board[0]/2-1
    let half_y = board[1]/2-1
    keyinput.map((i)=>{
        if(i === "left" && -half_x<center[0]){
            center[0]-=1
        }
        else if(i === "right" && center[0]<half_x){
            center[0] += 1
        }
        else if(i === "up" && center[1]<half_y){
            center[1] += 1
        }
        else if(i === "down" && -half_y<center[1]){
            center[1] -= 1
        }
    })
    return center
}