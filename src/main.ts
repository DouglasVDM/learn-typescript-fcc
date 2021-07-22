const someElememt = document.querySelector(".foo") as HTMLInputElement;

// Typescript does not See our Markup(HTML)
console.log('someElememt', someElememt.value)