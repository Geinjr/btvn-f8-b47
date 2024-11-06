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
// Lớp trừu tượng
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
// Lớp con: SMSMessage
var SMSMessage = /** @class */ (function (_super) {
    __extends(SMSMessage, _super);
    function SMSMessage(phoneNumber, message) {
        var _this = _super.call(this) || this;
        _this.phoneNumber = phoneNumber;
        _this.message = message;
        return _this;
    }
    SMSMessage.prototype.send = function () {
        console.log("Sending SMS to ".concat(this.phoneNumber, ": ").concat(this.message));
    };
    return SMSMessage;
}(Message));
// Lớp con: EmailMessage
var EmailMessage = /** @class */ (function (_super) {
    __extends(EmailMessage, _super);
    function EmailMessage(emailAddress, subject, body) {
        var _this = _super.call(this) || this;
        _this.emailAddress = emailAddress;
        _this.subject = subject;
        _this.body = body;
        return _this;
    }
    EmailMessage.prototype.send = function () {
        console.log("Sending Email to ".concat(this.emailAddress, ": Subject: ").concat(this.subject, ", Body: ").concat(this.body));
    };
    return EmailMessage;
}(Message));
// Lớp User
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.sendMessage = function (message) {
        message.send(); // Gọi phương thức send() của đối tượng message
    };
    return User;
}());
// Sử dụng chương trình
var user = new User();
// Tạo một tin nhắn SMS và gửi
var sms = new SMSMessage("0123456789", "Hello, this is a test SMS!");
user.sendMessage(sms); // In ra: Sending SMS to 0123456789: Hello, this is a test SMS!
// Tạo một tin nhắn Email và gửi
var email = new EmailMessage("example@example.com", "Test Subject", "Hello, this is a test Email!");
user.sendMessage(email); // In ra: Sending Email to example@example.com: Subject: Test Subject, Body: Hello, this is a test Email!
