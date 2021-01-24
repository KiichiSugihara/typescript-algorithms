/**
 * 連結リスト(linked-list)に使うNodeの定義
 */
export class LinkedListNode<T> {
  val: T;
  next: LinkedListNode<T> | null;
  prev: LinkedListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
