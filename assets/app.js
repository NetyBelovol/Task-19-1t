
let height = +prompt ('Yor height (sm)');
height = height / 100;
console.log(`Height: ${height} m.`);

let mass = +prompt('Your mass (kg)');
console.log(`Mass ${mass} kg.`);

let index = mass / (height * height);
console.log(`Your index mass is ${index}`);



if((index >=16) && (index <=18.54)) {
    alert('not enough');
}

if((index >=18.55) && (index <=25)) {
    alert('normal');
}

if((index >=25.01) && (index <=30)) {
    alert('overweight');
}

if((index >=30.01) && (index <=35)) {
    alert('obesity degree 1');
}

if((index >=35.01) && (index <=40)) {
    alert('obesity degree 2');
}

if(index164 >=40.01) {
    alert('obesity degree 3');
} 

//else {
  //alert('incorrect data, try again');
//}