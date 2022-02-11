function sumOfDigitS(n){
    var sum=0; 
    while(n>0){
        var reminder = n%10;
        sum+=reminder;
        n = parseInt(n/10);
    }
        console.log(sum);
        return sum;
    }
sumOfDigitS(456);
sumOfDigitS(789);
