import { BTree } from './BTree';

export class BTreeImpl<T> /*implements BTree<T>*/ {

	private elto: T;

	private root: BTreeImpl<T>;
	private parent: BTreeImpl<T>;
	private left: BTreeImpl<T>;
	private right: BTreeImpl<T>;

	constructor(btree)
	{
	}

	setRoot(e: T) {
		
		this.elto = e;
		//this.tree.parent = this.tree;
	}

	setLeftSubTree(e: T) {

		this.tree.left = new BTreeImpl<T>();
		this.tree.left.setRoot(e);

	}

	setRightSubTree(e: T) {

		this.tree.right = new BTreeImpl<T>();
		this.tree.right.setRoot(e);
	}

	getRoot() {

		return this.tree.root;
	}

	getParent(): BTreeImpl<T> {
		
		return this.tree.parent;
	}

	get getElement(): T {
		return this.tree.elto;
	}

	get getLeftSubTree(): BTreeImpl<T> {
		return this.tree.left;
	}

	get getRightSubTree(): BTreeImpl<T> {
		return this.tree.right;
	}

	dropLeftSubTree() {

	}

	dropRightSubTree() {

	}

	dropRoot() {

	}

	EmptyTree() {

	}
}