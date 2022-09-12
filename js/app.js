// To add a new section on click event
let counter = 1;
const addSectionFunc = function () {
  let newSect = document.createElement("section");
  newSect.setAttribute("class", "section");
  let navItem = document.createElement("li");
  newSect.innerHTML = `
    <h1 id="${counter}">Section ${counter}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi nihil, quae, ipsam recusandae aperiam officiis maiores iure commodi vero et distinctio laudantium tempore eum adipisci iste ea corporis alias. Dolorem possimus aspernatur provident nihil iste commodi molestias odio officia impedit dolor earum voluptas nobis beatae magnam sint magni id, labore laudantium suscipit fugiat repellat quae, eligendi voluptates recusandae. Corrupti architecto, optio distinctio officiis numquam voluptatum asperiores odit. Veritatis accusantium architecto magnam, sed molestiae harum maiores quis vel libero excepturi eius neque aperiam pariatur nihil ratione quos nostrum iusto eum porro! Dolore nobis maiores corporis eius officiis dignissimos mollitia alias!</p>`;

  // Add nav item to nav menu linked to section
  navItem.innerHTML = `<a href="#${counter}" id="nav_${counter}">
    <li>Section ${counter}</li></a>`;
  navBar.appendChild(navItem);
  mainSect.appendChild(newSect);
  counter++;
};

// Create nav bar => navBar
const header = document.createElement("header");
const navBar = document.createElement("nav");
navBar.setAttribute("class", "navBar");
document.body.appendChild(header);
header.appendChild(navBar);

// Create main element to contain the sections => mainSect
const mainSect = document.createElement("main");
mainSect.setAttribute("class", "main");
document.body.appendChild(mainSect);

// Create welcome section => welcomeSect
const welcomeSect = document.createElement("section");
welcomeSect.setAttribute("class", "welcome");
welcomeSect.innerHTML = `<p>Landing Page</p>`;
mainSect.appendChild(welcomeSect);

// Create a button to add sections => addButton
const addButton = document.createElement("button");
addButton.textContent = "Add Section";
addButton.setAttribute("class", "addSection");
navBar.appendChild(addButton);
addButton.addEventListener("click", addSectionFunc);

// Create footer
const footer = document.createElement("footer");
footer.innerHTML = `<p>Developed By. Mahmoud Abd Alaziz Ali</p>`;
document.body.appendChild(footer);

// Toggle active class according to viewport position for sections and navbar
document.addEventListener("scroll", function () {
  // toggle active class for sections
  let h1Elements = document.querySelectorAll("h1");
  for (h1Element of h1Elements) {
    let h1Position = h1Element.getBoundingClientRect().top;
    if (h1Position <= 350) {
      h1Element.classList.add("activeH1");
    }
    if (h1Position <= 120 || h1Position >= 350) {
      h1Element.classList.remove("activeH1");
    }

    // toggle active class for nav bar
    let myNavList = document.querySelectorAll("a");
    const text = h1Element.innerHTML;
    for (myNav of myNavList) {
      if (h1Position >= 151 && h1Position <= 350) {
        if (myNav.innerText != text) {
          myNav.classList.remove("activeNav");
        }
        if (myNav.innerText == text) {
          myNav.classList.add("activeNav");
        }
      }
    }
  }
});
