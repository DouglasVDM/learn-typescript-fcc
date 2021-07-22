let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown;

console.log(vAny.foo());  //  No errors = Start of Problem with Any

console.log(vUnknown.foo());  //  Unknown is a better solution to Any-We have to Convert Type of Unknown to Another Type
