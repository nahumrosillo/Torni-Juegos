import {BD} from './bd';
import { User } from './user'


export class Memory implements BD
{
	private map: Map<string, User>;

	constructor() {
		this.map = new Map<string, User>();
	}

	addUser(user: User) {
		this.map.set(user.getNick, user);
	}

	removeUser(user: User) {
		this.map.delete(user.getNick);
	}

	getUser(user: User): User {
		return this.map.get(user.getNick); 
	}

	get length(): number {
		return this.map.size;
	}

	showUser() {
		let iterator: IterableIterator<string>;
		iterator = this.map.keys();

		console.log(iterator.next().value);
		iterator.next();
		console.log(iterator.next().done);

		let i: IterableIterator<string> = this.map.keys();
		console.log(i.next().value);




	}
}