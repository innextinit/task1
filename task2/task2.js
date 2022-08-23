const array = [2, 45, 6, 32, 45, 6, 43, 9];

let largNum = array[0]
for(i=0;i<array.length;i++){
    largNum = largNum > array[i] ? largNum : array[i] 
}
alert(largNum);