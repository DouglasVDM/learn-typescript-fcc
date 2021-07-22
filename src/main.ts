const someElememt = document.querySelector(".foo");

// Using Typescript with DOM, just use "as" Operator to say what Type you have
someElememt.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement;
  console.log('event', target.value)
});