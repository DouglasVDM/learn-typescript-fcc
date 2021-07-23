//<-----Read Data Types Specified in Libraries like Ramda(Functional Programming)----->


const updateArray = append<string>("bar", ["foo", "bar"]);

const searchStr = "foo";
const_hasSearchString = any<string>((el: string) => el.contains(searchStr), [
  "fooooo",
  "bar",
  ,
])
//<------Read Data Types Specified in Libraries like Ramda(Functional Programming)----->

const addId = <T extends object>(obj: T) => {  //  T is a Generic Type
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

//  Generic Interface 
interface UserInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user: UserInterface<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const user2: UserInterface<string[]> = {
  name: "John",
  data: ["foo", "bar", "baz"],
}

const result = addId<UserInterface>(user);
console.log(`result, ${result}`) 