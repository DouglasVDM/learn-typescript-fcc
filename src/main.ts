// With Never, You cannot have a Reachable Endpoint
const doSomething = (): never => {
  console.log("doSomething")
}

// No Endpoint and the Error goes away
const doNothing = (): never => {
  throw "never"
}

