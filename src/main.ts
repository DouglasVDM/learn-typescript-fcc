interface IUser {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: IUser = {
  name: 'Monster',
  age: 40,
  getMessage() {
    return 'Hello' + name;
  },
};

const user2: IUser = { 
  name: 'Jack',
    getMessage() {
    return 'Hello' + name;
  },
};

console.log(user.name)