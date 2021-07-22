class User {
  firstName: string //  Public by Default, can use Outside Class
  private lastName: string //  Only use Inside Class

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