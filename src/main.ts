const addId = <T extends object>(obj: T) => {  //  T is a Generic Type
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

//  Generic Interface 
interface UserInterface<T> {
  name: string;
  data: T;
}

const user: UserInterface<{ meta: string }> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
};

const user2: UserInterface<string[]> = {
  name: "John",
  data: ["foo", "bar", "baz"],
}

const result = addId<UserInterface>(user);
console.log(`result, ${result}`) 