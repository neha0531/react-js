import React from "react";
import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App= () => {
  const userName = "Neha";
  const FeaturedCard={
    productName:"noise wireless headphones",
    price:25999,
    instock:true,
  }
  return (
    <div>
     <PromoBanner/>
     <main className="p-6">
      <h1 className="px-10 font-black text-2xl">welcome! {userName}</h1>
      <div className=" my-3 max-w-md rounded-xl p-3 shadow-p-4 bg-emerald-100" >
       <h1 className="">🌟FeaturedCard</h1>
       <p><strong>Name:</strong> {FeaturedCard.productName}</p>
       <p><strong>Price:</strong> {FeaturedCard.price}</p>
       <p><strong>Instock:</strong>{' '}
       <span className={FeaturedCard.instock ? "text-green-600":"text-red-500"}>{FeaturedCard.instock ? "Available":"Out Of Stock"}</span></p>
      </div>
     </main>
     
    </div>
  )
}

export default App
