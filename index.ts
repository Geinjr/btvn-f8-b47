abstract class Message {
  abstract send(): void;
}

class SMSMessage extends Message {
  constructor(private phoneNumber: string, private message: string) {
    super();
  }

  send(): void {
    console.log(`Sending SMS to ${this.phoneNumber}: ${this.message}`);
  }
}

class EmailMessage extends Message {
  constructor(
    private emailAddress: string,
    private subject: string,
    private body: string
  ) {
    super(); // Cần gọi super() để khởi tạo lớp cha
  }

  send(): void {
    console.log(
      `Sending Email to ${this.emailAddress}: Subject: ${this.subject}, Body: ${this.body}`
    );
  }
}

class User {
  sendMessage(message: Message) {
    message.send();
  }
}

// Tạo một thể hiện của User
const user = new User();

// Tạo một SMSMessage và gửi
const sms = new SMSMessage("0452616712", "Hello what up bro");
user.sendMessage(sms);

// Tạo một EmailMessage và gửi
const email = new EmailMessage(
  "example@example.com",
  "Test Subject",
  "Hello, this is a test Email!"
);
user.sendMessage(email);
