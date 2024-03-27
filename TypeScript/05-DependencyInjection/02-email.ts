class EmailService {
  sendEmail(message: string) {
    console.log(`Sending email: ${message}`);
  }
}

class UserService {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }

  registerUser(user: { name: string }) {
    console.log(`Registering new user ${user.name}!`);
    this.emailService.sendEmail('Welcome to our service!');
  }
}

const emailService = new EmailService();
const userService = new UserService(emailService);

const user = { name: 'Gustavo' };
userService.registerUser(user);