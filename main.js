//  console.log('Hello World');

//  alert('The Man');

// Variables

let car = 'VW';
let age = '10 9 8 7 4';
console.log(age);

let total = 5 * 3;
console.log(total);

// const firstName = document.getElementById('first-name');
 let it = 'Major';
let firstName = 'My name is ';
let combine = firstName.concat('Vergil');
document.getElementById('first-name').innerHTML= 'Good Bye ' + it;

function letsClick() {
    document.getElementById('button').addEventListener('click', 
    function() {
      let textColor = document.getElementById('first-name').style.color = 'green';
     
     
     
    })
    this.classList.toggle('green');
// if(textColor ==='green') {
//     let textColor = document.getElementById('first-name').style.color = 'black'; 
//     console.log ('my name');
//     }
    
}

console.log ('My name is ', it);

