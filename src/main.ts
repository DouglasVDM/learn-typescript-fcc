// Custom Types
type ID = string;
type PopularTag = string;

// Interfaces
interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ['dragon', 'coffee'];

let username: string = 'Alex';

let pageName: string | number = '1';

let errorMessage: string | null = null;

let user: UserInterface | null = null;  //  Use Unions with Caution because it can become Unsafe