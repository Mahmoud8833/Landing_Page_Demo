// To add a new section on click event
let counter = 1;
const addSectionFunc = function () {
  let newSect = document.createElement("section");
  newSect.setAttribute("class", "section");
  let navItem = document.createElement("li");
  newSect.innerHTML = `
    <h1 id="${counter}">Section ${counter}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi nihil, quae, ipsam recusandae aperiam officiis maiores iure commodi vero et distinctio laudantium tempore eum adipisci iste ea corporis alias. Dolorem possimus aspernatur provident nihil iste commodi molestias odio officia impedit dolor earum voluptas nobis beatae magnam sint magni id, labore laudantium suscipit fugiat repellat quae, eligendi voluptates recusandae. Corrupti architecto, optio distinctio officiis numquam voluptatum asperiores odit. Veritatis accusantium architecto magnam, sed molestiae harum maiores quis vel libero excepturi eius neque aperiam pariatur nihil ratione quos nostrum iusto eum porro! Dolore nobis maiores corporis eius officiis dignissimos mollitia alias!</p>`;

  navItem.innerHTML = `<a href="#${counter}">
    <li>Section ${counter}</li></a>`;
  navBar.appendChild(navItem);
  mainSect.appendChild(newSect);
  counter++;
  console.log(counter);
};

const navBar = document.createElement("nav");
navBar.setAttribute("class", "navBar");
document.body.appendChild(navBar);

// Create main element to contain the sections
const mainSect = document.createElement("main");
mainSect.setAttribute("class", "main");
document.body.appendChild(mainSect);

// Create welcome section
const welcomeSect = document.createElement("section");
welcomeSect.setAttribute("class", "welcome");
welcomeSect.innerHTML = `<p>Landing Page</p>`;
mainSect.appendChild(welcomeSect);


// Create a button to add sections
const addButton = document.createElement("button");
addButton.textContent = "Add Section";
addButton.setAttribute("class", "addSection");
navBar.appendChild(addButton);
addButton.addEventListener("click", addSectionFunc);
