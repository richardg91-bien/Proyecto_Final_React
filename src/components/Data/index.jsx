const products = [
  {
    id: 1,
    name: "Brown Shirt",
    description: "Brown T-Shirt for Women",
    price: 16.99,
    gender: "women",
    type: "shirt",
    img: "https://placehold.co/400x400/8B6F47/white?text=Brown+Shirt",
    inCart: false,
    category: "clothes"
  },
  {
    id: 2,
    name: "Light Brown Shirt",
    description: "Light Brown Shirt for Women",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "https://placehold.co/400x400/D2B48C/white?text=Light+Brown",
    inCart: false,
    category: "clothes"
  },
  {
    id: 3,
    name: "Women Grey Shirt",
    description: "Grey Shirt for Women",
    price: 14.99,
    gender: "women",
    type: "shirt",
    img: "https://placehold.co/400x400/808080/white?text=Grey+Shirt",
    inCart: false,
    category: "clothes"
  },
  {
    id: 4,
    name: "Warm Shirt Women",
    description: "Woolen Hoodie Women",
    price: 20.00,
    gender: "women",
    type: "shirt",
    img: "https://placehold.co/400x400/A0522D/white?text=Warm+Hoodie",
    inCart: false,
    category: "clothes"
  },
  {
    id: 5,
    name: "Women Grey Shirt",
    description: "Light Grey Shirt for Women",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "https://placehold.co/400x400/C0C0C0/333?text=Light+Grey",
    inCart: false,
    category: "clothes"
  },
  {
    id: 6,
    name: "Women Red/Brown Shirt",
    description: "Red/Brown Blouse for Women",
    price: 19.99,
    gender: "women",
    type: "blouse",
    img: "https://placehold.co/400x400/A52A2A/white?text=Red+Blouse",
    inCart: false,
    category: "clothes"
  },
  {
    id: 7,
    name: "Dark Grey Shirt Women",
    description: "Dark Grey Shirt for Women",
    price: 6.00,
    gender: "women",
    type: "shirt",
    img: "https://placehold.co/400x400/505050/white?text=Dark+Grey",
    inCart: false,
    category: "clothes"
  },
  {
    id: 8,
    name: "White Shirt Women",
    description: "White Shirt for Women",
    price: 14.99,
    gender: "women",
    type: "shirt",
    img: "https://placehold.co/400x400/FFFFFF/333?text=White+Shirt",
    inCart: false,
    category: "clothes"
  },
  {
    id: 9,
    name: "Black Shirt Women",
    description: "Black Shirt for Women",
    price: 20.99,
    gender: "women",
    type: "shirt",
    img: "https://placehold.co/400x400/000000/white?text=Black+Shirt",
    inCart: false,
    category: "clothes"
  },
  {
    id: 10,
    name: "No Shoulder Hoodie",
    description: "Hoodie for Women",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "https://placehold.co/400x400/FF69B4/white?text=Hoodie",
    inCart: false,
    category: "clothes"
  },
  {
    id: 11,
    name: "Women Watch Gold",
    description: "Golden Watch for Women",
    price: 45.99,
    gender: "women",
    type: "watch",
    img: "https://placehold.co/400x400/FFD700/333?text=Gold+Watch",
    inCart: false,
    category: "accessories"
  },
  {
    id: 12,
    name: "Black Pearl Necklace",
    description: "Black Pearl Necklace for Women",
    price: 14.99,
    gender: "women",
    type: "necklace",
    img: "https://placehold.co/400x400/2F4F4F/white?text=Necklace",
    inCart: false,
    category: "accessories"
  },
  {
    id: 13,
    name: "Man Black Shirt",
    description: "Black T-Shirt for Men",
    price: 10.99,
    gender: "men",
    type: "shirt",
    img: "https://placehold.co/400x400/000000/white?text=Black+TShirt",
    inCart: false,
    category: "clothes"
  },
  {
    id: 14,
    name: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    price: 14.99,
    gender: "men",
    type: "shirt",
    img: "https://placehold.co/400x400/808080/white?text=Grey+Tanktop",
    inCart: false,
    category: "clothes"
  },
  {
    id: 15,
    name: "Man White Shirt",
    description: "White Shirt for Men",
    price: 20.99,
    gender: "men",
    type: "shirt",
    img: "https://placehold.co/400x400/F5F5F5/333?text=White+Shirt",
    inCart: false,
    category: "clothes"
  },
  {
    id: 16,
    name: "Man Brown Shirt",
    description: "Brown Shirt for Men",
    price: 13.99,
    gender: "men",
    type: "shirt",
    img: "https://placehold.co/400x400/8B4513/white?text=Brown+Shirt",
    inCart: false,
    category: "clothes"
  },
  {
    id: 17,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 13.99,
    gender: "men",
    type: "tie",
    img: "https://placehold.co/400x400/1C1C1C/white?text=Black+Tie",
    inCart: false,
    category: "accessories"
  },
  {
    id: 18,
    name: "Black Shirt Men",
    description: "Black Shirt for Men",
    price: 9.99,
    gender: "men",
    type: "shirt",
    img: "https://placehold.co/400x400/0F0F0F/white?text=Black+Shirt",
    inCart: false,
    category: "clothes"
  },
  {
    id: 19,
    name: "4-Pack Man Ties",
    description: "Ties for Men",
    price: 35.99,
    gender: "men",
    type: "tie",
    img: "https://placehold.co/400x400/2C3E50/white?text=4Pack+Ties",
    inCart: false,
    category: "accessories"
  },
  {
    id: 20,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 15.99,
    gender: "men",
    type: "tie",
    img: "https://placehold.co/400x400/34495E/white?text=Black+Tie",
    inCart: false,
    category: "accessories"
  },
];

export default products;