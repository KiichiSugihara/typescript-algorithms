import LinkedList from "../linked-list";

test("LinkedList INSPECTION", () => {
  // LinkedList インスタンス作成
  const list = new LinkedList<string>();
  // 空のときのisEmpty
  expect(list.isEmpty()).toBe(true);
  // 空のときのsize
  expect(list.size()).toBe(0);
  // 追加済みのisEmpty
  list.addFront("one");
  // 追加済みのisEmpty
  expect(list.isEmpty()).toBe(false);
  // 追加済みのsize
  expect(list.size()).toBe(1);
});
test("addFront & addBack", () => {
  const list = new LinkedList<string>();
  list.addFront("one");
  expect(list.isEmpty()).toBe(false);
  expect(list.get(0)).toBe("one");
  // addBack
  list.addBack("two");
  expect(list.get(1)).toBe("two");
  // addFront
  list.addFront("zero");
  expect(list.get(0)).toBe("zero");
});
