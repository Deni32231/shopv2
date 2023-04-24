import { filterByType } from ".";
import { useProductsTypes } from "../hooks/useProductsTypes";

describe("filterByType", () => {
  const mockAllTypes = useProductsTypes();
  const products = [
    {
      urlImg: "/img/product1.png",
      name: "Ср-во для мытья посуды Апельсин+мята",
      sizeType: "bottle",
      size: "450 мл",
      barcode: 146045404909,
      manufacturer: "Нэфис1",
      brand: "AOS",
      description:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum",
      price: 1301,
      typeOfCare: [
        "Уход за руками",
        "Уход за руками",
        "Уход за ногами",
        "Средства для бритья",
      ],
    },
    {
      urlImg: "/img/product2.png",
      name: "Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
      sizeType: "bottle",
      size: "450 мл",
      barcode: 246045404909,
      manufacturer: "Нэфис1",
      brand: "1AOS",
      description:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum",
      price: 100,
      typeOfCare: ["Уход за руками", "Уход за ногами"],
    },
    {
      urlImg: "/img/product3.png",
      name: "аСр-во для мытья посуды Апельсин+мята",
      sizeType: "bottle",
      size: "450 мл",
      barcode: 346045404909,
      manufacturer: "Нэфис2",
      brand: "AOS qee",
      description:
        "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum",
      price: 424,
      typeOfCare: ["Уход за руками"],
    },
    {
      urlImg: "/img/product4.png",
      name: "аСр-во для мытья посуды Апельсин+мята",
      sizeType: "bottle",
      size: "450 мл",
      barcode: 446045404909,
      manufacturer: "Нэфис2",
      brand: "AOS",
      description:
        "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum",
      price: 258,
      typeOfCare: ["Уход за руками", "Бумажная продукция"],
    },
    {
      urlImg: "/img/product1.png",
      name: "аСр-во для мытья посуды Апельсин+мята",
      sizeType: "bottle",
      size: "450 мл",
      barcode: 546045404909,
      manufacturer: "Нэфис3",
      brand: "AOS",
      description:
        "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum",
      price: 1301,
      typeOfCare: ["Уход за руками"],
    },
  ];

  test("Empty products", () => {
    expect(filterByType(mockAllTypes, [])).toEqual([]);
  });

  test("Empty types", () => {
    expect(filterByType([], products)).toEqual(products);
  });

  test("Empty products and types", () => {
    expect(filterByType([], [])).toEqual([]);
  });

  test("All types", () => {
    expect(filterByType(mockAllTypes, products)).toEqual(products);
  });

  test("Valid products and types", () => {
    expect(
      filterByType(["Уход за ногами", "Бумажная продукция"], products)
    ).toEqual([
      {
        urlImg: "/img/product1.png",
        name: "Ср-во для мытья посуды Апельсин+мята",
        sizeType: "bottle",
        size: "450 мл",
        barcode: 146045404909,
        manufacturer: "Нэфис1",
        brand: "AOS",
        description:
          "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum",
        price: 1301,
        typeOfCare: [
          "Уход за руками",
          "Уход за руками",
          "Уход за ногами",
          "Средства для бритья",
        ],
      },
      {
        urlImg: "/img/product2.png",
        name: "Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        sizeType: "bottle",
        size: "450 мл",
        barcode: 246045404909,
        manufacturer: "Нэфис1",
        brand: "1AOS",
        description:
          "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum",
        price: 100,
        typeOfCare: ["Уход за руками", "Уход за ногами"],
      },
      {
        urlImg: "/img/product4.png",
        name: "аСр-во для мытья посуды Апельсин+мята",
        sizeType: "bottle",
        size: "450 мл",
        barcode: 446045404909,
        manufacturer: "Нэфис2",
        brand: "AOS",
        description:
          "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum",
        price: 258,
        typeOfCare: ["Уход за руками", "Бумажная продукция"],
      },
    ]);
  });
});
