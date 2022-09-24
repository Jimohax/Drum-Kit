let  array = [];
let i = 1;
 function newArray(){
    
    // for( i = 0; i<16; i++)
    while (i <= 15) {
        
if (i%3 === 0 && i%5 === 0 ){
        array.push("fizzbuzz");
    } else if (i%3 === 0) {
    array.push("fizz");
    
} else if (i%5 === 0 ){
    array.push("buzz");
}  else{
    array.push(i);
};
i++;
};

    console.log(array);
 }
newArray();


// array = ["Jamie", "Joyce", "Agie", "Serah", "Bless"];

// function whoIspaying(){
//    position = Math.floor(Math.random() * array.length);

   
// //    console.log(array[position] + " is paying for lunch today!");

// };
//  whoIspaying();