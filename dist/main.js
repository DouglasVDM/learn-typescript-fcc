// With Never, You cannot have a Reachable Endpoint
var doSomething = function () {
    console.log("doSomething");
};
// No Endpoint and the Error goes away
var doNothing = function () {
    throw "never";
};
