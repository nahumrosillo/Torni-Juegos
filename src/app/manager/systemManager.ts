import { BD } from '../bd/bd';
import { User, Rol } from '../shared/user/user';

export abstract class SystemManager  {
	protected dataBase: BD;
	protected userLogged: User;

	abstract get getManager(): SystemManager;
}