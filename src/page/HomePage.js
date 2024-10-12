import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import pic from "../assets/Untitled.jpg" 
// Note: In a JSX environment, you might need to adjust these imports based on your project structure
import { Button } from "../components/UI/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/UI/select";
import cardDec from "../assets/Images/cardecoration - 24999rs.jpg";
import CarDec2 from "../assets/Images/cardecoration 2- 24999rs.jpg";
import flowers from "../assets/Images/Flower - 149rs.jpg";
import flowerBoquet from "../assets/Images/Flower bouquet - 799rs.jpg";
import flowerJewellery from "../assets/Images/flower jewelery - 1999rs.jpg";
import flowerjewellery2 from "../assets/Images/flower jewelery2 - 1999rs.jpg";
import flowerjewelery3 from "../assets/Images/flower jewelery 3- 1999rs.jpg";
import necklace from "../assets/Images/flower necklace - 999rs.jpg";
import gerbera from "../assets/Images/gerbera - 299rs.jpg";
import haldi from "../assets/Images/haldi-and-mehndi-decoration - 49999rs.jpg";
import lotus from "../assets/Images/lotus - 99rs.jpg";
import lotusVase from "../assets/Images/lotusVase- 99rs.jpg";
import rose from "../assets/Images/mixRoseBouquet - 649rs.jpg";
import pinkrose from "../assets/Images/pinkRoseVase - 399rs.jpg";
import daisy from "../assets/Images/smalldaisy - 49rs.jpg";
import tulip from "../assets/Images/smalltulip - 49rs.jpg";
import sunFlowerVase from "../assets/Images/sunflower vase - 599rs.jpg";
import warmala from "../assets/Images/warmala - 1499rs (1).jpg"
import warmala2 from "../assets/Images/warmala2 - 1999rs.jpg"
const categories = [
  "All",
  "Bouquet",
  "Jaimala",
  "Jewellery",
  "Car Decoration",
  "Gajra",
];

const products = [
  { id: 1, name: "Car Decoration", category: "Car Decoration", price: 24999, image: cardDec },
  { id: 2, name: "Car Decoration 2", category: "Car Decoration", price: 24999, image: CarDec2 },
  { id: 3, name: "Flower", category: "Bouquet", price: 149, image: flowers },
  { id: 4, name: "Flower Bouquet", category: "Bouquet", price: 799, image: flowerBoquet },
  { id: 5, name: "Flower Jewellery", category: "Jewellery", price: 1999, image: flowerJewellery },
  { id: 6, name: "Flower Jewellery 2", category: "Jewellery", price: 1999, image: flowerjewellery2 },
  { id: 7, name: "Flower Jewellery 3", category: "Jewellery", price: 1999, image: flowerjewelery3 },
  { id: 8, name: "Flower Necklace", category: "Jewellery", price: 999, image: necklace },
  { id: 9, name: "Gerbera", category: "Gajra", price: 299, image: gerbera },
  { id: 10, name: "Haldi Mehendi Decoration", category: "Event Decoration", price: 4999, image: haldi },
  { id: 11, name: "Flower", category: "Bouquet", price: 149, image: flowers },
  { id: 12, name: "Lotus", category: "Bouquet", price: 99, image: lotus },
  { id: 13, name: "Lotus Vase", category: "Bouquet", price: 149, image: lotusVase },
  { id: 14, name: "Rose Bouquet", category: "Bouquet", price: 699, image: rose },
  { id: 15, name: "Pink Roses", category: "Bouquet", price: 399, image: pinkrose },
  { id: 16, name: "Daisy", category: "Bouquet", price: 49, image: daisy },
  { id: 17, name: "Tulip", category: "Bouquet", price: 149, image: tulip },
  { id: 18, name: "Sunflower Vase", category: "Bouquet", price: 149, image: sunFlowerVase },
  { id: 19, name: "Jai mala", category: "Jaimala", price: 1499, image: warmala },
  { id: 20, name: "Sunflower Vase", category: "Jaimala", price: 1999, image: warmala2 },
];


// const products = [
//   { id: 1, name: "Car Decoration", category: "Car Decoration", price: 249.99, image: "/placeholder.svg" },
//   { id: 2, name: "Car Decoration 2", category: "Car Decoration", price: 249.99, image: "/placeholder.svg" },
//   { id: 3, name: "Flower", category: "Bouquet", price: 1.49, image: "/placeholder.svg" },
//   { id: 4, name: "Flower Bouquet", category: "Bouquet", price: 7.99, image: "/placeholder.svg" },
//   { id: 5, name: "Flower Jewellery", category: "Jewellery", price: 19.99, image: "/placeholder.svg" },
//   { id: 6, name: "Flower Jewellery 2", category: "Jewellery", price: 19.99, image: "/placeholder.svg" },
//   { id: 7, name: "Flower Jewellery 3", category: "Jewellery", price: 19.99, image: "/placeholder.svg" },
//   { id: 8, name: "Flower Necklace", category: "Jewellery", price: 9.99, image: "/placeholder.svg" },
//   { id: 9, name: "Gerbera", category: "Bouquet", price: 2.99, image: "/placeholder.svg" },
//   { id: 10, name: "Haldi Mehendi Decoration", category: "Event Decoration", price: 499.99, image: "/placeholder.svg" },
//   { id: 11, name: "Flower", category: "Bouquet", price: 1.49, image: "/placeholder.svg" },
//   { id: 12, name: "Lotus", category: "Bouquet", price: 0.99, image: "/placeholder.svg" },
//   { id: 13, name: "Lotus Vase", category: "Bouquet", price: 1.49, image: "/placeholder.svg" },
//   { id: 14, name: "Rose Bouquet", category: "Bouquet", price: 6.99, image: "/placeholder.svg" },
//   { id: 15, name: "Pink Roses", category: "Bouquet", price: 3.99, image: "/placeholder.svg" },
//   { id: 16, name: "Daisy", category: "Bouquet", price: 0.49, image: "/placeholder.svg" },
//   { id: 17, name: "Tulip", category: "Bouquet", price: 1.49, image: "/placeholder.svg" },
//   { id: 18, name: "Sunflower Vase", category: "Bouquet", price: 1.49, image: "/placeholder.svg" },
// ];

// const products = [
//   {
//     id: 1,
//     name: "Pink Rose Bouquet",
//     category: "Bouquet",
//     price: 20.0,
//     image: "/placeholder.svg",
//   },
//   {
//     id: 2,
//     name: "Red Rose Jaimala",
//     category: "Jaimala",
//     price: 30.0,
//     image: "/placeholder.svg",
//   },
//   {
//     id: 3,
//     name: "Floral Necklace",
//     category: "Jewellery",
//     price: 50.0,
//     image: "/placeholder.svg",
//   },
//   {
//     id: 4,
//     name: "Car Door Floral Decor",
//     category: "Car Decoration",
//     price: 40.0,
//     image: "/placeholder.svg",
//   },
//   {
//     id: 5,
//     name: "Jasmine Gajra",
//     category: "Gajra",
//     price: 15.0,
//     image: "/placeholder.svg",
//   },
//   {
//     id: 6,
//     name: "Mixed Flower Bouquet",
//     category: "Bouquet",
//     price: 25.0,
//     image: "/placeholder.svg",
//   },
// ];

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const orderOnWhatsApp = (productName, price) => {
    const message = `Hello, I'm interested in ordering ${productName} for ${price.toFixed(
      2
    )}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919266315117?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row">
          {/* Side Panel - Categories */}
          <div className="md:w-1/6 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2 text-2xl">
              {categories.map((category) => (
                <li key={category}>
                  <Button
                    variant={
                      selectedCategory === category ? "default" : "ghost"
                    }
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Central Panel - Products */}
          <div className="md:w-5/6 md:pl-8">
            <h2 className="text-4xl font-bold mb-6">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[450px]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-3xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-2 text-md">{product.category}</p>
                    <div className="mt-auto">
                      <span className="text-2xl font-bold block mb-4">
                        ₹{product.price.toFixed(2)}
                      </span>
                      <Button
                        size="lg"
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                        onClick={() =>
                          orderOnWhatsApp(product.name, product.price)
                        }
                      >
                        <MessageCircle className="mr-2 h-5 w-5" /> Order on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



export default ProductPage;
