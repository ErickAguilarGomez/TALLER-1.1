function rotateMatrix(matrix) {
    let newArr=[]
    let matrixReversed=matrix.map((item)=>{item.forEach(item => {newArr.push(item)}); })
    let arrOrderAndReversed=newArr.sort().reverse()
    let finalArry=[]
    for(let i=0;i<arrOrderAndReversed.length;i=i+2){
        finalArry.push([arrOrderAndReversed[i],arrOrderAndReversed[i+1]]);
    }


    return  finalArry ;
}

console.log(rotateMatrix([[-1, 4, 5],[2, 3, 4],]));
