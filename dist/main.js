var someElememt = document.querySelector(".foo");
// Using Typescript with DOM, just use "as" Operator to say what Type you have
someElememt.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
