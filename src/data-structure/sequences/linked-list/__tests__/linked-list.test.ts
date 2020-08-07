import LinkedList from "../linked-list";

test("init LinkedList", () => {
  const list = new LinkedList<string>();
  expect(list.isEmpty()).toBe(true);
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
