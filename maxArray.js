let num=new Array{3,4,5,2,7,9,22,33};

let max=num[0];

for(number i=0;i<num.length;i++){

    if(num[i]>max){
        max=num[i];
    }
}
console.log(max);