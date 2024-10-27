let x = parseInt(prompt("Enter the height of the Christmas tree: "));

const treeContainer = document.createElement("div");
treeContainer.style.textAlign = "center";
document.body.appendChild(treeContainer);

let yellow_star = document.createElement("span");
yellow_star.innerHTML = "✰";
yellow_star.className = "tree-element big-star";
treeContainer.appendChild(yellow_star);

for (let i = 1; i <= x; i++) {
  let row = document.createElement("div");
  let spacesLength = 0;

  for (let j = 0; j < x - i; j++) {
    let space = document.createElement("span");
    space.innerHTML = " ";
    row.appendChild(space);
    spacesLength++;
  }


  let star = document.createElement("span");
  if (i % 2 === 1)
    star.className = "tree-element green-star";
  else
    star.className = "tree-element red-star";
  star.innerHTML = "*";
  row.appendChild(star);

  for (let k = 1; k < x + i - spacesLength; k++) {
    let wood = document.createElement("span");
    wood.className = "tree-element wood";
    wood.innerText = "|";
    row.appendChild(wood);
  }
  row.appendChild(star.cloneNode(true));
  treeContainer.appendChild(row);
}

