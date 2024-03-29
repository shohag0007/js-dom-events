console.log('This is Separate Js File');

// Option 2 Important: we will Use this maximum time.
//  <button onclick="makeRed()">Make Red</button> 
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// Option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
 document.body.style.backgroundColor = 'blue';
}

// Option 3 another

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
  document.body.style.backgroundColor = 'purple';
}

// Option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// Option 4 another

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
   document.body.style.backgroundColor = 'green';
})

//  Option 5 Final we will use this very often. very important!
  // document.getElementById('make-goldenrod').addEventListener('click', function(){})
  document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
   });
