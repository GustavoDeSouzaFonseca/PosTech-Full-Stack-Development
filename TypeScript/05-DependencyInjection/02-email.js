var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (message) {
        console.log("Sending email: ".concat(message));
    };
    return EmailService;
}());
var UserService = /** @class */ (function () {
    function UserService(emailService) {
        this.emailService = emailService;
    }
    UserService.prototype.registerUser = function (user) {
        console.log("Registering new user ".concat(user.name, "!"));
        this.emailService.sendEmail('Welcome to our service!');
    };
    return UserService;
}());
var emailService = new EmailService();
var userService = new UserService(emailService);
var user = { name: 'Gustavo' };
userService.registerUser(user);
