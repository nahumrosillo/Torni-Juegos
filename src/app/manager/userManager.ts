import { SystemManager } from './systemManager';
import { User, Rol, Genre } from '../shared/user/user'

export class UserManager extends SystemManager {

	
	
	get getManager(): SystemManager {

		switch (this.userLogged.getRol) {
			case Rol.SUPERADMIN:
				return this;
			case Rol.ADMINISTRATOR:
				return this;
			
			default:
				return null;
		}
	}
}