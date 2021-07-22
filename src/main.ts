interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: 'Monster',
  age: 40,
  getMessage() {
    return 'Hello' + name;
  },
};

const user2: UserInterface = { 
  name: 'Jack',
    getMessage() {
    return 'Hello' + name;
  },
};

console.log(user.name)