/* A function that is called when the add button is clicked. It creates a new section and a new nav
item. */
let counter = 1;
const addSectionFunc = function () {
  /* Creating a new section element and assigning it a class and an id. It is also adding a heading and
  a paragraph to the section. */
  let newSect = document.createElement("section");
  newSect.setAttribute("class", "section");
  newSect.setAttribute("id", `section_${counter}`);
  newSect.innerHTML = `
    <h1 id="section${counter}">Section ${counter}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi nihil, quae, ipsam recusandae aperiam officiis maiores iure commodi vero et distinctio laudantium tempore eum adipisci iste ea corporis alias. Dolorem possimus aspernatur provident nihil iste commodi molestias odio officia impedit dolor earum voluptas nobis beatae magnam sint magni id, labore laudantium suscipit fugiat repellat quae, eligendi voluptates recusandae. Corrupti architecto, optio distinctio officiis numquam voluptatum asperiores odit. Veritatis accusantium architecto magnam, sed molestiae harum maiores quis vel libero excepturi eius neque aperiam pariatur nihil ratione quos nostrum iusto eum porro! Dolore nobis maiores corporis eius officiis dignissimos mollitia alias!</p>`;

  /* Creating a new li element and assigning it an id and an href attribute. It is also adding
 a link to the li element. */
  let navItem = document.createElement("li");
  navItem.innerHTML = `<a href="#section_${counter}" id="nav_${counter}">
    Section ${counter}</a>`;


  /* Checking the width of the window and if it is greater than 769px it will append the navItem to the
  navBar and if it is less than 769px it will append the navItem to the innerDiv. */
  if (window.innerWidth > 769) {
    navBar.appendChild(navItem);
  } else {
    innerDiv.appendChild(navItem);
  }

  mainSect.appendChild(newSect);
  counter++;
};

/* Checking the width of the window and if it is greater than 769px it will append the navItem to the
navBar and if it is less than 769px it will append the navItem to the innerDiv. */
window.addEventListener("resize", function () {
  if (window.innerWidth > 769) {
    while (innerDiv.childNodes.length > 0) {
      navBar.appendChild(innerDiv.childNodes[0]);
    }
  } else {
    while (navBar.childNodes.length > 0) {
      innerDiv.appendChild(navBar.childNodes[0]);
    }
  }
});

/**
 * If the display property of the element with the class "responsive-innerDiv" is set to "block", then
 * set it to "none". Otherwise, set it to "block"
 */
function myFunction() {
  var x = document.querySelector(".responsive-innerDiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Creating a div element and assigning it a class. */
let responsiveList = document.createElement("div");
let innerDiv = document.createElement("div");
responsiveList.setAttribute("class", "responsive-list");
responsiveList.setAttribute("onclick", "myFunction()");
responsiveList.innerHTML = `<i class="fa fa-bars"></i>`;
innerDiv.setAttribute("class", "responsive-innerDiv");
responsiveList.appendChild(innerDiv);

// Create nav bar => navBar
const header = document.createElement("header");
const navBar = document.createElement("nav");
navBar.setAttribute("class", "navBar");
document.body.appendChild(header);
header.appendChild(navBar);
header.appendChild(responsiveList);

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
header.appendChild(addButton);
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
    if (h1Position <= 95 || h1Position >= 350) {
      h1Element.classList.remove("activeH1");
    }

    // toggle active class for nav bar
    let myNavList = document.querySelectorAll("a");
    const text = h1Element.innerHTML;
    for (myNav of myNavList) {
      if (h1Position >= 96 && h1Position <= 350) {
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

/* A function that is called when the add button is clicked. It scrolls to the last section and adds a
click event to the navbar items. */
addButton.addEventListener("click", function () {
  let sections = document.getElementsByTagName("section");
  for (let section of sections) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  let navItems = document.getElementsByTagName("a");
  for (let navItem of navItems) {
    let id = navItem.getAttribute("href");
    let target = document.querySelector(id);
    navItem.addEventListener("click", function (event) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }
});
