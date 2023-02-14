function RemoveSame(num){
    let arr=[];
    for(let i=0;i<num.length;i++){
        if(arr.indexOf(num[i])===-1){
            arr.push(num[i])
        }
    }
    return arr;
}


console.log(RemoveSame([1,2,2,3,3,4]))