import { User } from './user';

export interface BD {
	addUser(user: User);

	removeUser(user: User);

	getUser(user: User): User;
}