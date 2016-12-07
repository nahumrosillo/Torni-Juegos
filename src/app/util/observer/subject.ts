import { Observer } from './observer';

export interface Subject {
	add(observer: Observer);
	remove(observer: Observer);
	notify();
}