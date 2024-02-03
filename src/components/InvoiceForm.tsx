import React from "react";
import html2pdf from "html2pdf.js";
const InvoiceForm = () => {
  const handleDownload = () => {
    const element = document.getElementById("invoice-form");
    html2pdf(element);
  };

  return (
    <div className="flex items-center justify-center bg-slate-100">
      <section className="bg-white gap-5 w-[1200px] p-9" id="invoice-form">
        <div className="flex justify-between">
          <div className="w-[380px]">
            <h1 className="text-slate-800 font-bold text-3xl mb-5">
              Your company name
            </h1>
            <div className="flex gap-2 ">
              <span className="w-[180px]">
                Building name 123 Your Street City/State, Country Zip Code
              </span>
              <span className="w-[180px]">
                + 1-541-754-3010 you@email.comyourwebsite.comGSTIN
              </span>
            </div>
          </div>
          <div className="w-[380px] ">
            <h1 className="text-slate-500 font-bold text-xl mb-3">Invoice</h1>
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Date:
              </th>
              <td className="bg-slate-200  w-[50%] ml-2">MM/DD/YYYY</td>
            </tr>
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Invoice #.
              </th>
              <td className="bg-slate-200  w-[50%]">#12345</td>
            </tr>
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Customer #
              </th>
              <td className="bg-slate-200 w-[50%]">CUST123</td>
            </tr>
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Purchase order #
              </th>
              <td className="bg-slate-200  w-[50%] ml-2">0002</td>
            </tr>
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Payment due by
              </th>
              <td className="bg-slate-200  w-[50%] ml-3">MM/DD/YYYY</td>
            </tr>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <div className="w-[380px]">
            <h1 className="bg-slate-800 text-white  text-xl mb-5 p-2">
              Billed to
            </h1>
            <div className="flex gap-2 ">
              <span className="w-[180px]">
                Client name 123 Your Street City, State, Country Zip Code Phone
              </span>
            </div>
          </div>
          <div className="w-[380px] ">
            <h1 className="bg-slate-800 text-white font-bold text-xl p-2">
              Ship to (if different)
            </h1>
            <div className="flex gap-2 mb-3">
              <span className="w-[180px]">
                Client name 123 Your Street City, State, Country Zip Code Phone
              </span>
            </div>
          </div>
        </div>
        <table className="mt-6">
          <thead>
            <tr className="w-[1126px] flex gap-1 bg-slate-800 p-2 ">
              <th className="text-start text-white font-bold w-[50%]">
                Description
              </th>
              <th className="text-start text-white  font-bold w-[10%]">
                Unit cost
              </th>
              <th className="text-start text-white  font-bold w-[20%]">
                QTY/HR
              </th>
              <th className="text-start text-white  font-bold w-[20%]">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-[1126px] flex gap-1 mb-1 p-2 bg-slate-100">
              <td className="text-start text-slate-800 font-bold w-[50%]">
                Item name
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">1</td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
            </tr>
            <tr className="w-[1126px] flex gap-1 mb-1 p-2 bg-slate-100">
              <td className="text-start text-slate-800 font-bold w-[50%]">
                Item name
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">1</td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
            </tr>
            <tr className="w-[1126px] flex gap-1 mb-1 p-2 bg-slate-100">
              <td className="text-start text-slate-800 font-bold w-[50%]">
                Item name
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">1</td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
            </tr>
            <tr className="w-[1126px] flex gap-1 mb-1 p-2 bg-slate-100">
              <td className="text-start text-slate-800 font-bold w-[50%]">
                Item name
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">1</td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
            </tr>
            <tr className="w-[1126px] flex gap-1 mb-1 p-2 bg-slate-100">
              <td className="text-start text-slate-800 font-bold w-[50%]">
                Item name
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">1</td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
            </tr>
            <tr className="w-[1126px] flex gap-1 mb-1 p-2 bg-slate-100">
              <td className="text-start text-slate-800 font-bold w-[50%]">
                Item name
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">1</td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
            </tr>
            <tr className="w-[1126px] flex gap-1 mb-1 p-2 bg-slate-100">
              <td className="text-start text-slate-800 font-bold w-[50%]">
                Item name
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">1</td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
            </tr>
            <tr className="w-[1126px] flex gap-1 mb-1 p-2 bg-slate-100">
              <td className="text-start text-slate-800 font-bold w-[50%]">
                Item name
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
              <td className="text-start text-slate-800 font-bold w-[20%]">1</td>
              <td className="text-start text-slate-800 font-bold w-[20%]">
                $100.00
              </td>
            </tr>
          </tbody>
        </table>
        <section className="flex gap-4 mt-5 items-start">
          <div className="w-full">
            <h1 className="bg-slate-800 text-white p-2 font-bold  mb-5 mt-8">
              Special notes and instructions
            </h1>
            <div>
              <span className="w-[150px]">Lorem ipsum dolor sit </span>
            </div>
          </div>
          <div className="w-[380px] mt-6">
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Date:
              </th>
              <td className="  w-[50%] ml-2">MM/DD/YYYY</td>
            </tr>
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Invoice #.
              </th>
              <td className="  w-[50%]">#12345</td>
            </tr>
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Customer #
              </th>
              <td className=" w-[50%]">CUST123</td>
            </tr>
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Purchase order #
              </th>
              <td className="  w-[50%] ml-2">0002</td>
            </tr>
            <tr className="w-full flex gap-1">
              <th className="text-start text-slate-800 font-bold w-[50%]">
                Payment due by
              </th>
              <td className="  w-[50%] ml-3">MM/DD/YYYY</td>
            </tr>
          </div>
        </section>
      </section>
      <button
        className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDownload}
      >
        Download PDF
      </button>
    </div>
  );
};

export default InvoiceForm;
