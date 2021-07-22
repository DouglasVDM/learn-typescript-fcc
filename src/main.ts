class User {
  firstName: string //  Public by Default, can use Outside Class
  protected lastName: string //  Works same as Private,Only use Inside Class

  constructor(firstnName: string, lastName: string) {
    this.firstName = firstnName;
    this.lastName = lastName;
  }

  getFullname(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user = new User("Monster", "lessons");
console.log(user.firstName);