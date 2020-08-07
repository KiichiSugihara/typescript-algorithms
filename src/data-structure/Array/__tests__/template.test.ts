import Drink from "../Drink";

const drinkNonAlcohol = new Drink(
  {
    productCode: "1001",
    unitPrice: 298,
  },
  { name: "ノンアルコール", isAlcohol: false }
);
const drinkAlcohol = new Drink(
  {
    productCode: "1002",
    unitPrice: 298,
  },
  { name: "アルコール", isAlcohol: true }
);

test("Template Product Class", () => {
  // try Drink
  expect(drinkNonAlcohol.productCode).toBe("1001");
  expect(drinkNonAlcohol.unitPrice).toBe(298);
});

test("Drink Class", () => {
  // unique Property
  expect(drinkNonAlcohol.name).toBe("ノンアルコール");
  expect(drinkNonAlcohol.isAlcohol).toBe(false);
  // アルコールでないドリンクは消費税割引される
  expect(drinkNonAlcohol.getTaxIncludedPrice()).toBe(
    Math.floor(298 * ((100 + 8) / 100))
  );
  expect(drinkAlcohol.name).toBe("アルコール");
  expect(drinkAlcohol.isAlcohol).toBe(true);
  // アルコールは消費税そのまま
  expect(drinkAlcohol.getTaxIncludedPrice()).toBe(
    Math.floor(298 * ((100 + 10) / 100))
  );
});
