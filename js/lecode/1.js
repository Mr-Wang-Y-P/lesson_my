//判断是否为4的幂

function isPowerOfFour(num) {
    num = parseInt(num);
    if(num%4){
        return false;
    }
    else{
        while(num/4!==1){
            num=num/4;
            if(num===0){
                return false;
            }
        }
    }
    return true;
}
console.log(isPowerOfFour(8));
console.log(isPowerOfFour(0));
console.log(isPowerOfFour(-16));
console.log(isPowerOfFour(16));
