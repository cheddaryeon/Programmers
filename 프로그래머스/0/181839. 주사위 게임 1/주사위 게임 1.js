function solution(a, b) {
    let n = a%2 + b%2;
    switch (n){
        case 2:
            return a*a + b*b;
        case 1:
            return 2*(a+b);
        case 0:
            return a<b? b-a: a-b;
    }
    
}