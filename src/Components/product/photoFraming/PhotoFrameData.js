import f1 from "../../../assets/photoframe/f1.jpg";
import f2 from "../../../assets/photoframe/f2.jpg";
import f3 from "../../../assets/photoframe/f3.jpg";
const photoFrameData = [
  {
    id: "1",
    name: "Honeycomb Frame",
    description: "A stylish black frame perfect for any decor",
    size: "A4",
    frameColor: [
      { name: "Black", colorCode: "bg-black" },
      { name: "White", colorCode: "bg-white" },
      { name: "Wood", colorCode: "bg-amber-600" },
      { name: "Golden", colorCode: "bg-yellow-500" },
    ],
    customizableText: false,
    price: 799.0,
    discount: 150,
    image: f1,
  },
  {
    id: "2",
    name: "Modern Black Frame",
    description: "A stylish black frame perfect for any decor",
    size: "A4",
    frameColor: [
      { name: "Black", colorCode: "bg-black" },
      { name: "White", colorCode: "bg-white" },
      { name: "Wood", colorCode: "bg-amber-600" },
      { name: "Golden", colorCode: "bg-yellow-500" },
    ],
    customizableText: false,
    price: 799.0,
    discount: 150,
    image: f2,
  },
  {
    id: "3",
    name: "Modern Black Frame",
    description: "A stylish black frame perfect for any decor",
    size: "8*10",
    frameColor: [
      { name: "White", colorCode: "bg-white" },
      { name: "Black", colorCode: "bg-black" },
      { name: "Wood", colorCode: "bg-amber-600" },
      { name: "Golden", colorCode: "bg-yellow-500" },
    ],
    customizableText: false,
    price: 799.0,
    discount: 150,
    image: f3,
  },
];

export default photoFrameData;
