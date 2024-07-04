                                            // Functions
                    // 1. Write a js program to find cube of any number using function.

// var cubeNumber=parseFloat(prompt("Please Enter the value and get cube"));
// function cube(cubeNumber) {
//     return cubeNumber*cubeNumber*cubeNumber;
// }
// console.log("The cube of " + cubeNumber + " is " + cube(cubeNumber));

                    //2. Write a js program to find diameter, circumference and area of circle using functions.
// var radius=parseFloat(prompt("please enter the radius of circle"));
// function calculateDiameter(radius) {
//     return radius*2;
// }
// function calculateCircumference(radius) {
//     return 2*Math.PI*radius;
// }
// function calculateArea(radius) {
//     return Math.PI*radius*radius
// }
// var diameter=calculateDiameter(radius);
// var circumference=calculateCircumference(radius);
// var area=calculateArea(radius);
// console.log("The diameter of circle is ",diameter);
// console.log("The circumference of circle is ",circumference);
// console.log("The area of circle is ",area);
                                //3. Write a js program to find maximum and minimum between two numbers using functions.
//     var num1=parseFloat(prompt("please enter the value of number 1"));
//     var num2=parseFloat(prompt("please enter the value of number 2"));
// function max(num1,num2) {
//     return num1>num2 ? num1:num2;
// }
// function min(num1,num2) {
//     return num1<num2 ? num1:num2;
// }
// var max=max(num1,num2);
// var min=min(num1,num2);
// console.log("The Maximum value is",max);
// console.log("The minimum value is",min);

                                //4. Write a js program to check whether a number is even or odd using functions.
// var num=parseFloat(prompt("Please Enter number to check even or odd"));
// function isEven(num) {
//     return num%2==0;
// }
// function isOdd(num){
//     return num%2==1;
// }
// var even=isEven(num);
// var odd=isOdd(num);
// if (even==true) {
//     console.log("The Input number is Even");
// } else {
//     console.log("Number is odd");
// }
                 //5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
    // var num=parseFloat(prompt("Please Enter a number to check prime Number"))
    // //function to check whather number is prime or not?
    // function isPrime(num) {
    //     if (num<=1) 
    //         return false;
    //     for(let i=2;i<=Math.sqrt(num);i++){
    //         if(num%i===0) return false;
    //     }
    //     return true;
        
    // }
    // if (isPrime(num)) {
    //     console.log(num + " is a prime number.");
    // } else {
    //     console.log(num + " is not a prime number.");
    // }
    //function to check whather number is armstrong or not?


                //6. Write a js program to find all prime numbers between given interval using functions.
// var num1=parseFloat(prompt("Please Enter a starting value to find prime number"));
// var num2=parseFloat(prompt("Please Enter a ending value to find prime number"));
// //here we chechk whather number is prime?
// function isPrime(num){
//     if(num<=1)return false;
//     for (let i = 2; i<=Math.sqrt(num); i++) {
//         if(num%i===0)return false;
//     }return true;
// }
// //function to find all prime number between interval
// function allPrime(num1,num2){
//     let primeNumber=[];
//     for(let i=num1;i<=num2;i++){
//         if(isPrime(i)){
//             primeNumber.push(i);
//         }
// }
//     return primeNumber;
// }
// var primeList=allPrime(num1,num2);
// console.log("The List of Prime Numbers between ",num1,"and",num2,"is:",primeList);

                //10. Write a js program to find power of any number using function.
// var num=parseFloat(prompt("Please enter a number for find power"));
// var power=parseFloat(prompt("please enter power "));

// function powerOfNum(num,power){
//     let result=1;
//     for(let i=1;i<=power;i++){
//         result*=num;
//     }
//     return result;
// }
// var result=powerOfNum(num,power);
// console.log(result);

        // 11. Write a js program to print all natural numbers between 1 to n using function.
// var num=parseFloat(prompt("Please enter number to print all natural number upto your number "));

// function printAllNaturalNumber(num) {
// if (num<=0){
//     console.log("please enter the value of number greater than 0");
//     return;
// }
// var allNaturalNumber=[];
// for (let i=1;i<=num;i++){
//     allNaturalNumber.push(i);

// }
// console.log("all natural number up to ",num,"are",allNaturalNumber.join(","));
// }
// printAllNaturalNumber(num);
        //12. Write a js program to print all even or odd numbers in given range using function
// var num1=parseFloat(prompt("Please Enter a start number to get sort even number "));
// var num2=parseFloat(prompt("Please Enter a end number to get sort even number "));
// function printAllEvenNumber(num1,num2){
//         var evenNum=[];
// for (i=num1;i<=num2;i++){
//     if(i%2==0){
//         evenNum.push(i);
//     }
   
//     }
//     console.log("Even number between",num1,"and",num2,"is",evenNum);
// }
// printAllEvenNumber(num1,num2);

// function printAllOddNumber(num1,num2){
//     var oddNum=[];
// for(i=num1;i<=num2;i++) {
//     if(i%2==1){
//         oddNum.push(i);
//     }
// }
// console.log("Odd Number between",num1,"and",num2,"is",oddNum);
// }
// printAllOddNumber(num1,num2);

            //13. Write a js program to find sum of all natural numbers between 1 to n using function.
// var num=parseFloat(prompt("Please Enter n number to find some of all natural number from 1 to n"))

// function someOfAllNaturalNum(num){
//     if(num<=0){
//         console.log("Please enter greater than 0");
//         return
//     }
//     var sum=0;
// for(let i=1;i<=num;i++){
    
//     sum+=i;
// }
// return sum;
// }
// var result=someOfAllNaturalNum(num);
// if (result !== undefined) {
//     console.log("The sum of all natural numbers between 1 and", num, "is:", result);
// }

        // 14. Write a js program to find sum of all even or odd numbers in given range using function.
// var num1=parseFloat(prompt("please enter start number"));
// var num2=parseFloat(prompt("please enter end number"));
// var choice=prompt("Do you Want to sum even or odd number?(Enter Even or Odd)");
// var result;

// if(choice.toLowerCase()==="even"){
//     result=sumOfAllEvenNumber(num1,num2);
// console.log(result);

// }else if(choice.toLowerCase()==="odd"){
//     result=sumOfAllOddNumber(num1,num2);
// console.log(result);

// }else{
//     console.log("invalid choice! Please enter 'even' or 'odd' " );
// }
// function sumOfAllEvenNumber(num1,num2) {
// var sum=0;
    
//     for(let i=num1;i<=num2;i++){


//         if(i%2==0){
//             sum+=i;
//         }
        
//     }
//     return sum;

// }
// function sumOfAllOddNumber(num1,num2){
// var sum=0;

//     for(let i=num1;i<=num2;i++){

//         if(i%2!=0){
//             sum+=i;
//         }
//     }
//     return sum;
// }


                            //15. Write a js program to find reverse of any number using function.
// var startNum=parseFloat(prompt("Please Enter The starting Number to Reverse"));
// var endNum=parseFloat(prompt("Please Enter The ending Number to Reverse"));
// var result;
// function reverseNum(startNum,endNum) {
//     var reverseValue;
//     if(startNum>endNum){
//         for(let i=startNum;i>=endNum;i--){
//             reverseValue=i;
//             console.log(reverseValue);
//         }
//     }else{
//         console.log("Please Enter start Number greater than end number for reverse");
//     }
   
// }
// reverseNum(startNum,endNum);

                            //17. Write a js program to find sum of digits of a given number using function.
// var num=parseFloat(prompt("Please Enter first number"));
// var result=sumOfDigits(num);
// function sumOfDigits(num){
//         var sum=0;
//         var numstr = num.toString();

//         for(let i=0;i<numstr.length;i++){
//             sum += parseInt(numstr[i]);
//         }
//         return sum;
// }
// // sumOfDigits(num);
// console.log(`sum of digits ${num} is ${result}`);

                        // 18. Write a js program to find factorial of any number using function.
// var num=parseFloat(prompt("Enter a number to find factorial"));
// let result=factorial(num);
// function factorial(num){
//     if(num<0){
//         console.log("Please Enter a number greater than 0");
        
//         }else if(num==0||num==1){
//             return 1;
//         }
//     else{
//         let result=1;
//         for(i=num;i>=1;i--){
//             result *= i;
//         }
//         return result;
//     }
// }
// if(result!==null){
// console.log("factorial is ",result);
// }


