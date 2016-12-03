export interface BTree<T> {
	setRoot(e: T);
	setLeftSubTree(e: T);
	setRightSubTree(e: T);
	//setElement(e: T);
	getRoot();
	getParent();
	getElement();
	getLeftSubTree();
	getRightSubTree();
	dropLeftSubTree();
	dropRightSubTree();
	dropRoot();
	EmptyTree();
}