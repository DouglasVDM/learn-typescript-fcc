class User {
  firstName: string;
  lastName: string;
  readonly unchangableName: string; //  Read-only property

  constructor(firstnName: string, lastName: string) {
    this.firstName = firstnName;
    this.lastName = lastName;
    this.unchangableName = firstnName;
  }

  changeUnchangableName(): void {
    this.unchangableName = "foo";
  }

  getFullname(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user = new User("Monster", "lessons");
console.log(user.firstName);