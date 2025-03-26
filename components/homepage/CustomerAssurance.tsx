import React from "react";

const sellingPoints = [
  {
    icon: "📦",
    title: "Fast & Easy Rentals",
    description:
      "No complicated processes—just browse, book, and rent. Whether you need an item for a day or a week, we make it quick and hassle-free.",
  },
  {
    icon: "✅",
    title: "Verified Lenders & Renters",
    description:
      "Every lender and renter is verified, so you can rent with confidence. Plus, user reviews help you choose the best items from trusted owners.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure Transactions",
    description:
      "We use encrypted payments and trusted verification methods to ensure a seamless and secure rental experience. Your safety is our priority.",
  },
  {
    icon: "🛡️",
    title: "Damage Protection & Support",
    description:
      "Worried about accidents? We offer optional protection plans and dedicated customer support to assist you every step of the way.",
  },
];

const CustomerAssurance = () => {
  return (
    <section className="customer-assurance">
      <h2>Why Rent with Us?</h2>

      <ol className="grid grid-cols-4">
        {sellingPoints.map((point, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded-lg p-8 my-4 flex flex-col gap-6"
          >
            <div className="rounded-full bg-secondary/10 h-16 w-16 text-5xl grid place-items-center">
              {point.icon}
            </div>
            <h3 className="font-semibold font-inter text-xl min-h-[60px]">
              {point.title}
            </h3>
            <p className="text-gray-600 flex-grow">{point.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default CustomerAssurance;
