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

class Admin extends User{
  private editor: string

  setEditor(editor: string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
   }
}

const user = new User("Monster", "lessons");
console.log(user.firstName);
console.log(User.maxAge);

const admin = new Admin('Foo', 'Bar');
console.log(admin.changeUnchangableName());
console.log(admin.firstName);
console.log(admin.getEditor());
console.log(admin.getFullname());
console.log(admin.lastName);
console.log(admin.setEditor('x'));
console.log(admin.unchangableName());