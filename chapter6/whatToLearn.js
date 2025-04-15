/*
Selecting Elements
Modifying Elements
Creating & Removing Elements
Handling Events



Selecting Elements

document.getElementById("id") → Selects an element by ID
document.getElementsByClassName("class") → Selects elements by class name
document.getElementsByTagName("tag") → Selects elements by tag name
document.querySelector("selector") → Selects the first matching element
document.querySelectorAll("selector") → Selects all matching elements
element.closest("selector") → Finds the nearest ancestor that matches the selector
element.parentElement → Gets the parent element of the selected element
element.children → Gets the direct children of an element
element.nextElementSibling → Gets the next sibling element
element.previousElementSibling → Gets the previous sibling element

Modifying Elements
element.innerHTML → Changes the HTML inside an element
element.textContent → Changes the text inside an element
element.style.property → Modifies the CSS of an element
element.setAttribute("attribute", "value") → Sets or updates an attribute
element.getAttribute("attribute") → Gets the value of an attribute
element.removeAttribute("attribute") → Removes an attribute
element.classList.add("class") → Adds a class
element.classList.remove("class") → Removes a class
element.classList.toggle("class") → Toggles a class (adds if missing, removes if present)

Creating & Removing Elements
document.createElement("tag") → Creates a new element
parent.appendChild(child) → Adds a new element inside another element
parent.removeChild(child) → Removes an element from the DOM
element.insertAdjacentHTML(position, htmlString) → Inserts HTML at a specific position (beforebegin, afterbegin, beforeend, afterend)
parent.replaceChild(newChild, oldChild) → Replaces an existing child element
element.remove() → Removes an element from the DOM


Handling Events
element.addEventListener("click", function) → Attaches an event listener
element.onclick = function → Another way to handle events
element.addEventListener("mouseover", function) → Runs when the mouse hovers over the element
element.addEventListener("keydown", function) → Runs when a key is pressed
element.addEventListener("keyup", function) → Runs when a key is released
element.addEventListener("submit", function) → Runs when a form is submitted
element.addEventListener("change", function) → Runs when an input/select value changes
event.preventDefault() → Prevents the default action of an event (e.g., stops form submission)
*/