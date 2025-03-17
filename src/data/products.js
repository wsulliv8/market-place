import cholula from "../assets/images/bottles/cholula.png";
import habanero from "../assets/images/bottles/habanero.png";
import lolas from "../assets/images/bottles/lolas.png";
import noname from "../assets/images/bottles/noname.png";
import redhot from "../assets/images/bottles/redhot.png";
import taco from "../assets/images/bottles/taco.png";
import thick from "../assets/images/bottles/thick.png";
import tobasco from "../assets/images/bottles/tobasco.png";
import pair1 from "../assets/images/bottles/pair1.png";
import pair2 from "../assets/images/bottles/pair2.png";
import pair3 from "../assets/images/bottles/pair3.png";

const products = [
  {
    id: 0,
    name: "Black Death",
    imageURL: cholula,
    price: 9.99,
    peppers: ["Habanero", "Jalapeno"],
    heatLevel: "Hot",
    ingredients: {
      Salt: 0,
      Garlic: 1,
      Smoke: 2,
      Sweet: 1,
      Vinegar: 2,
    },
    pairs: ["Eggs", "Meat"],
    description:
      "Our first ever hot sauce. It has carrots. It has peppers. What more do you want?",
  },
  {
    id: 1,
    name: "Green Boi",
    price: 11.99,
    imageURL: habanero,
    peppers: ["Jalapeno", "Bell"],
    heatLevel: "Mild",
    ingredients: {
      Salt: 1,
      Garlic: 2,
      Smoke: 0,
      Sweet: 1,
      Vinegar: 1,
    },
    pairs: ["Cereal", "Sauce"],
    description:
      "I bet your grandma could handle this one. Its about as spicy as pepper.",
  },
  {
    id: 2,
    name: "Liquid Pain",
    price: 41.99,
    imageURL: lolas,
    peppers: ["Ghost"],
    heatLevel: "Death",
    ingredients: {
      Salt: 2,
      Garlic: 0,
      Smoke: 0,
      Sweet: 2,
      Vinegar: 1,
    },
    pairs: ["Nothing", "Burial Spices"],
    description:
      "I hope you bought that grave site 10 years ago when it was on sale because youre not surviving this.",
  },
  {
    id: 3,
    name: "Scorching Blaze",
    imageURL: noname,
    price: 12.99,
    peppers: ["Cayenne", "Serrano"],
    heatLevel: "Very Hot",
    ingredients: {
      Salt: 1,
      Garlic: 2,
      Smoke: 1,
      Sweet: 0,
      Vinegar: 3,
    },
    pairs: ["Pizza", "Grilled Chicken"],
    description:
      "Feel the burn with Scorching Blaze. A fiery sauce made with a blend of cayenne and serrano peppers. Perfect for those who like it extra spicy.",
  },
  {
    id: 4,
    name: "Tropical Inferno",
    imageURL: redhot,
    price: 11.49,
    peppers: ["Habanero", "Ghost Pepper"],
    heatLevel: "Extreme",
    ingredients: {
      Salt: 1,
      Garlic: 0,
      Smoke: 1,
      Sweet: 2,
      Vinegar: 2,
    },
    pairs: ["Tacos", "Grilled Shrimp"],
    description:
      "A sweet and fiery tropical explosion, Tropical Inferno combines habanero and ghost peppers with a touch of sweetness to deliver the ultimate heat.",
  },
  {
    id: 5,
    name: "Smokey Tango",
    imageURL: taco,
    price: 10.99,
    peppers: ["Chipotle", "Jalapeno"],
    heatLevel: "Medium",
    ingredients: {
      Salt: 1,
      Garlic: 1,
      Smoke: 3,
      Sweet: 1,
      Vinegar: 1,
    },
    pairs: ["Burgers", "Steak"],
    description:
      "Smokey Tango brings the perfect balance of smoky chipotle and fresh jalapeno heat. Ideal for those who like a mild yet flavorful kick.",
  },
  {
    id: 6,
    name: "Fiery Mango",
    imageURL: thick,
    price: 8.99,
    peppers: ["Habanero", "Bell Pepper"],
    heatLevel: "Medium",
    ingredients: {
      Salt: 0,
      Garlic: 1,
      Smoke: 0,
      Sweet: 3,
      Vinegar: 1,
    },
    pairs: ["Grilled Chicken", "Cheese"],
    description:
      "A sweet and spicy tropical blend. Fiery Mango uses ripe mangoes paired with habanero heat for a delicious sauce that's perfect for a variety of dishes.",
  },
  {
    id: 7,
    name: "The Green Fiend",
    imageURL: tobasco,
    price: 7.99,
    peppers: ["Serrano", "Jalapeno"],
    heatLevel: "Mild",
    ingredients: {
      Salt: 1,
      Garlic: 2,
      Smoke: 0,
      Sweet: 1,
      Vinegar: 2,
    },
    pairs: ["Tacos", "Salads"],
    description:
      "The Green Fiend offers a mild heat with fresh serrano and jalapeno peppers, combined with a tangy vinegar base. A zesty sauce perfect for light meals.",
  },
];

const combos = [
  {
    id: 8,
    name: "Beginner Bundle",
    sauces: ["Mango Tango", "Garlic Blaze"],
    price: 14.99,
    imageURL: pair1,
    description: `Unleash the full force of heat with our Ultimate Heat Lover's Bundle. Featuring a mix of our hottest sauces, this pack will satisfy the most daring chili-heads. Perfect for those who crave spice at every meal!`,
  },
  {
    id: 9,
    name: "Heat Lovers Pack",
    sauces: ["Ghost Fire", "Scorpion Sting", "Carolina Reaper"],
    price: 39.99,
    imageURL: pair2,
    desciption: `Take your taste buds on a tropical adventure with the Tropical Flavor Explosion Pack. This bundle combines sweet, spicy, and smoky flavors for a unique, delicious experience in every bottle. Perfect for adding a dash of summer to your food!`,
  },
  {
    id: 10,
    name: "World Tour",
    sauces: ["Red Devil", "Thai Delight", "Smoky Chipotle"],
    price: 24.99,
    imageURL: pair3,
    description: `Elevate your grilling game with our BBQ Master Collection. This bundle includes a variety of smoky, savory, and tangy sauces that are a perfect match for meats, burgers, and all your favorite BBQ dishes. Get ready to impress at your next cookout!`,
  },
  {
    id: 11,
    name: "Complete Collection",
    sauces: ["All 8 Sauces"],
    price: 79.99,
    imageURL: pair1,
    desciption: `For the perfect balance of flavor and heat, our Everyday Heat Bundle has you covered. Featuring medium-spicy sauces that work with everything from tacos to wings, this pack is a must-have for spice lovers who want a little kick in their everyday meals.`,
  },
];

export { products, combos };
