import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = { username: 'Muddasir', email: 'chmudasirbwn775@gmail.com' };
  fetchUsers() {
    return this.users;
  }
}
