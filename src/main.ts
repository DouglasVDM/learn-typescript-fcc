const addId = <T extends object>(obj: T) => {  //  T is a Generic Type
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};
interface UserInterface {
  name: string;
}

const user: UserInterface = {
  name: "Jack"
};

const result = addId<UserInterface>(user);
console.log(`result, ${result}`) 