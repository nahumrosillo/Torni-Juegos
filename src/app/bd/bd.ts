import { User } from '../user/user';

export interface BD {

	addUser(user: User);

	removeUser(user: User);

	getUser(user: User): User;
}