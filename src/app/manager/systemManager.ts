import { BD } from '../bd/bd';
import { User, Rol } from '../shared/user/user';

export abstract class SystemManager  {
	protected static dataBase: BD;
	protected static userLogged: User;

}