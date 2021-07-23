interface UserInterface{
  getFullname(): string;
}
  class User implements UserInterface{
  firstName: string;
  lastName: string;
  readonly unchangableName: string; //  Read-only property
  static maxAge = 50 

  constructor(firstnName: string, lastName: string) {
    this.firstName = firstnName;
    this.lastName = lastName;
    this.unchangableName = firstnName;
  }

  changeUnchangableName(): void {
    // this.unchangableName = "foo";
  }

  getFullname(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user = new User("Monster", "lessons");
console.log(user.firstName);
console.log(User.maxAge); //  Static properties are accessible only on class itself