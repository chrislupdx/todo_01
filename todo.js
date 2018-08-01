page = {} //where front and back are naturally the fronts and backs of the paper
let front = prompt("input")
let back = [] //this is literally just supposed to be text. This will be 2/10 obnoxious if I have to do actually make this an object for assumed reasons.
back.push(front) //now it's stored into a list internally.  I think there's an extra div that goes into the html for some fucking reason.
// (make a div element and attach to ) select a container, then append item to the new html element. parent.appendChild

document.body.onload = addElement;
function addElement () {
let newDiv = document.createElement("div");
let newContent = document.createTextNode(back);
newDiv.appendChild(newContent);
let currentDiv = document.getElementById("div1");
  document.body.appendChild(newDiv, currentDiv);
}
let element = document.createElement('div1');

//display the item in a box
//diplay and store multiple entries (we could store the back, there are a bunch of ways to do this)
// change line two to enable the box
