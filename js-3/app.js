// function handleClick(e) {
//     console.log(e);
// }
// function handleContextMenu(e) {
//     console.log(e);
// }

// function handleSpanClick() {
//     console.log(" handleSpanClick : ")

// }

// function handleKeyDown() {
//     console.log('key down');
// }

// function handleKeyUp(e) {
//     if (e.key === 'Enter') {
//         console.log(e.target.value);
//     }
// }
// function handleChange(e) {
//     console.log(e);
// }
// function handleMouseEnter() {
//     //
//     console.log('mouse enter');
// }
// function handleMouseLeave() {
//     console.log('mouse leave');
// }
// function handleMouseMove() {
//     console.log('mouse move ');
// }
// function handleMouseOver() {
//     console.log('mouse over');
// }
// function handleMouseOut() {
//     console.log('mouse out');
// }

function handleClick() {
  // console.log(document.getElementsByName('myInput'))
  // console.log(document.getElementsByClassName('box'));
  // var pElement = document.createElement('p')
  // pElement.setAttribute('id', 'p-tag')
  // pElement.innerText = 'this is p'
  // console.log(pElement)
  var pTag = document.createElement("p");
  var inputValue = document.getElementById("input-name").value;
  pTag.innerText = inputValue;
  //   pTag.setAttribute("class", "text-white     ll");
  pTag.className = "text-white     ll";
  document.getElementById("box").appendChild(pTag);
}

function addBlueClass() {
  var box = document.getElementById("red-box");
  box.classList.remove("bg-red");
  box.classList.add("bg-blue");
}

function addRedClass() {
  var box = document.getElementById("red-box");
  box.classList.remove("bg-blue");
  box.classList.add("bg-red");
}
