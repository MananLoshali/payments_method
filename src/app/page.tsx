"use client";

import { useEffect } from "react";
import Image from "next/image";
import { products } from "./data";
import { usePaymentGateway } from "./hooks/usePaymentGateway";

export default function Home() {
  const provider = process.env.NEXT_PUBLIC_PAYMENT_PROVIDER;
  console.log("Using payment provider:", provider);

  useEffect(() => {
    if (provider === "razorpay") {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [provider]);

  const { handlePayment } = usePaymentGateway();

  return (
    <>
      <p className="text-gray-600 text-3xl mb-5">
        This is doing payment using Razorpay SDK.
      </p>
      <div className="min-h-screen flex flex-wrap items-center gap-2 bg-gray-50 p-6">
        {products?.map((item) => (
          <div
            key={item.name}
            className="bg-white shadow-xl rounded-2xl p-6 max-w-sm text-center space-y-4"
          >
            <p className="text-gray-600 text-lg">{item?.name}</p>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="https://img.icons8.com/ios-filled/100/buy.png"
                alt="Buy Logo"
                width={100}
                height={100}
                className="object-contain"
              />
              <p className="text-gray-600 text-lg">{item?.desc}</p>
              <p className="text-2xl font-semibold text-gray-800">
                ₹{item?.amount}
              </p>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                onClick={() => handlePayment(item.amount * 100, item?.name)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
