function printPyramid(rows){
if(rows<=0){
    return;
}

for(let i=0;i<=rows;i++){
    let space= rows-i;
    let spaceString="";
    while(space>0){
       spaceString+=" ";
       space--;
    }
    let stars=2*i-1;
    let startString="";
    while(stars>0){
        startString+="*";
        stars--;
    }
    const val=spaceString+startString;
    console.log(val)
}
}

const num=5;
printPyramid(num)