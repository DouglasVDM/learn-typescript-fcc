const addId = <T>(obj: T) => {  //  T is a Generic Type
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const user = {
  name: "Jack"
};

const result = addId(user);
console.log(`result, ${result}`)