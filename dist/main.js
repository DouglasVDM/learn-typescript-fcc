var User = /** @class */ (function () {
    function User(firstnName, lastName) {
        this.firstName = firstnName;
        this.lastName = lastName;
        this.unchangableName = firstnName;
    }
    User.prototype.changeUnchangableName = function () {
        this.unchangableName = "foo";
    };
    User.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user = new User("Monster", "lessons");
console.log(user.firstName);
