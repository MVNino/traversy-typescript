var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.attachRole = function (role) {
        console.log("This attach role method is from parent class which is User: " + role);
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.getAttachRole = function (role) {
        _super.prototype.attachRole.call(this, role);
    };
    return Member;
}(User));
// let john = new User('marlon', 'nimarsjkd@sjdk', 23)
// console.log(john.getName())
// Not working on accessing attach role
// let salesRep: User = new Member(3, 'Marlon Nino', 'mvnino.halcyondigital@gmail.com', 23)
// Working
var salesRep = new Member(3, 'Marlon Nino', 'mvnino.halcyondigital@gmail.com', 23);
salesRep.getAttachRole('Sale Representative');
