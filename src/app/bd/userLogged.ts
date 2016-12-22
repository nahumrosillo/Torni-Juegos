import { User } from '../shared/user/user';

export class UserLogged
{
	private static instance: UserLogged;
	private user: User;

	static get getInstance() {

    	if (this.instance === null || this.instance === undefined) 
    	{
            this.instance = new UserLogged();
            this.instance.user = new User();
        }

        return this.instance;
    }

	private constructor() {}

	getUser(): User 
	{
		return this.user;
	}

	setUser(item: User) 
	{
		this.user = item;
	}

	clear()
	{
		this.user = undefined;
	}

}
