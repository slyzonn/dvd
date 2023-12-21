// Create a dot element
const dot = document.createElement('div');

// Set the class name without the dot (.)
dot.className = "dot";

// Set the position of the dot based on the DVD logo's position
dot.style.left = `${dvdLogoX}px`;
dot.style.top = `${dvdLogoY}px`;

// Append the dot to the body of the document
document.body.appendChild(dot);