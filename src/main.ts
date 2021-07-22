interface UserInterface {
  name: string;
  surname: string;
}
let username: string = 'Alex';

let pageName: string | number = '1';

let errorMessage: string | null = null;

let user: UserInterface | null = null;  //  Use Unions with Caution because it can become Unsafe