import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const CustomerBillForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const htmlContent = `
      <div>
        <h1>Name: ${name}</h1>
        <h1>Phone Number: ${phoneNumber}</h1>
      </div>
    `;

    const element = document.createElement("div");
    element.innerHTML = htmlContent;

    html2pdf().from(element).save();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 w-1/4 p-2 border border-gray-800"
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="bg-gray-100 w-1/4 p-2 border border-gray-800"
        />
      </label>
      <br />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download PDF
      </button>
    </form>
  );
};

export default CustomerBillForm;
