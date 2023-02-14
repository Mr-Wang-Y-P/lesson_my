// function ReverseHalfList(list){
    
//     if(list%2===0){
//         let i=(list/2)+1;
//         let len=Math.floor(list.length+i);
//         let temp=0;
//         let t=0;
//         for(;i<len;i++){
//             temp=list[i];
//             list[i]=list[list.length-1-t];
//             list[list.length-1-t]=temp;
//             t++;
//         }
//     }
//     else{

//     }
//     return list
// }

// var Palindrome =function(s){
//     let len=s.length;
//     for(let i=0;i<(len/2);i++){
//         if(s.charAt(i)!==s.charAt(len-1-i)){
//             return false;
//         }
//     }
//     return true;
// }
// let s='s'
// console.log(Palindrome(s))
// console.log(s.substring(0,1))



var prefixCount = function(words, pref) {
    let count=0;
    let len=pref.length;
    for(let i=0;i<words.length;i++){
        if(words[i].substring(0,len)===pref){
            count++;
        }
    }
    return count;
};