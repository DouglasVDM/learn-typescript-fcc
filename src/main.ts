let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;
//  This is Type Assertion, To change Type, First change it to Unknown then to the Type you want.

/*
  Stick to Only to Type of Unknown and Void
  Ignore usning Any in any case
*/
