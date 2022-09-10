// To add a new section on click event
const addSectionFunc = function () {
  let newSect = document.createElement("section");
  newSect.innerHTML = `
    <h1>Section 1</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi nihil, quae, ipsam recusandae aperiam officiis maiores iure commodi vero et distinctio laudantium tempore eum adipisci iste ea corporis alias. Dolorem possimus aspernatur provident nihil iste commodi molestias odio officia impedit dolor earum voluptas nobis beatae magnam sint magni id, labore laudantium suscipit fugiat repellat quae, eligendi voluptates recusandae. Corrupti architecto, optio distinctio officiis numquam voluptatum asperiores odit. Veritatis accusantium architecto magnam, sed molestiae harum maiores quis vel libero excepturi eius neque aperiam pariatur nihil ratione quos nostrum iusto eum porro! Dolore nobis maiores corporis eius officiis dignissimos mollitia alias!</p>
    `;
  mainSect.appendChild(newSect);
  
};

// Create main element to contain the sections
const mainSect = document.createElement("main");
mainSect.setAttribute("class", "main");
document.body.appendChild(mainSect);

// Create a button to add sections
const addButton = document.createElement("button");
addButton.textContent = "Add Section";
addButton.setAttribute("class", "addSection");
mainSect.appendChild(addButton);
addButton.addEventListener("click", addSectionFunc);


