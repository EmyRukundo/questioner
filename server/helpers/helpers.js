import bcryptjs from 'bcryptjs';

class Helper {
  constructor() {
    this.hashPassword = (password, salt = 10) => bcryptjs.hashSync(password, parseInt(salt, 10));

    this.comparePassword = (password, hashedPassword) => bcryptjs.compareSync(password,
      hashedPassword);
  }
}
export default new Helper();