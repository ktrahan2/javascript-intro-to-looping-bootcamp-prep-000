function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
<<<<<<< HEAD
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  } return array
}


function whileLoop(number) {
  let countdown = number

  while (countdown > 0) {
    console.log(--countdown)
  }

  return "done"
}

function doWhileLoop(integer) {
  let i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless.");
  }  while (incrementVariable() < integer);
=======
      console.log("I am 1 strange loop.")
    }
    else {
      console.log("I am ${i} strange loops.")
    }
  }
>>>>>>> 38ea2c96d32e8d1c53b26b0613b4b1e3dffe875b
}
