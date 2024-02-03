import React from "react";
import { PDFDocument, rgb } from "pdf-lib";

function Form() {
  const handleDownload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const inputs = formElement.querySelectorAll("input");

    const name = inputs[0].value;
    const address = inputs[1].value;
    const contactNumber = inputs[2].value;
    const email = inputs[3].value;
    const model = inputs[4].value;
    const suffix = inputs[5].value;
    const color = inputs[6].value;
    const tdms = inputs[7].value;
    const mtg = inputs[8].value;
    const termsOfPayment = inputs[9].value;
    const showroomPrice = inputs[10].value;
    const lifeTax = inputs[11].value;
    const insurancePremium = inputs[12].value;
    const tcs = inputs[13].value;
    const extendedWarranty = inputs[14].value;
    const fastTag = inputs[15].value;
    // const grandTotal = inputs[16].value;

    const path = "src/assets/template/Vox Motors.pdf";

    try {
      // Fetch the PDF file
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }

      const templateBuffer = await response.arrayBuffer();

      // Load the PDF document
      const pdfDoc = await PDFDocument.load(templateBuffer);

      // Create a new page or select an existing one
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      const secondPage = pages[1];

      // Draw text on the page
      const { width, height } = firstPage.getSize();

      const firstPageVariants = {
        name: {
          x: 160,
          y: height / 2 + 100,
          size: 10,
          color: rgb(0, 0, 0),
        },
        address: {
          x: 160,
          y: height / 2 + 40,
          size: 10,
          color: rgb(0, 0, 0),
        },
        contactNumber: {
          x: 160,
          y: height / 2 - 20,
          size: 10,
          color: rgb(0, 0, 0),
        },
        email: {
          x: 160,
          y: height / 2 - 55,
          size: 10,
          color: rgb(0, 0, 0),
        },
        model: {
          x: 160,
          y: height / 2 - 120,
          size: 10,
          color: rgb(0, 0, 0),
        },
        suffix: {
          x: 160,
          y: height / 2 - 175,
          size: 10,
          color: rgb(0, 0, 0),
        },
        color: {
          x: 160,
          y: height / 2 - 210,
          size: 10,
          color: rgb(0, 0, 0),
        },
        tdms: {
          x: 160,
          y: height / 2 - 255,
          size: 10,
          color: rgb(0, 0, 0),
        },
        mtg: {
          x: 160,
          y: height / 2 - 295,
          size: 10,
          color: rgb(0, 0, 0),
        },
        termsOfPayment: {
          x: 160,
          y: height / 2 - 340,
          size: 10,
          color: rgb(0, 0, 0),
        },
      };

      const secondPageVariants = {
        showroomPrice: {
          x: 215,
          y: height / 2 + 335,
          size: 10,
          color: rgb(0, 0, 0),
        },
        lifeTax: {
          x: 215,
          y: height / 2 + 300,
          size: 10,
          color: rgb(0, 0, 0),
        },
        insurancePremium: {
          x: 215,
          y: height / 2 + 265,
          size: 10,
          color: rgb(0, 0, 0),
        },
        tcs: {
          x: 215,
          y: height / 2 + 215,
          size: 10,
          color: rgb(0, 0, 0),
        },
        extendedWarranty: {
          x: 215,
          y: height / 2 + 185,
          size: 10,
          color: rgb(0, 0, 0),
        },
        fastTag: {
          x: 215,
          y: height / 2 + 150,
          size: 10,
          color: rgb(0, 0, 0),
        },
      };

      firstPage.drawText(name, firstPageVariants.name);

      firstPage.drawText(address, firstPageVariants.address);

      firstPage.drawText(contactNumber, firstPageVariants.contactNumber);

      firstPage.drawText(email, firstPageVariants.email);

      firstPage.drawText(model, firstPageVariants.model);

      firstPage.drawText(suffix, firstPageVariants.suffix);

      firstPage.drawText(color, firstPageVariants.color);

      firstPage.drawText(tdms, firstPageVariants.tdms);

      firstPage.drawText(mtg, firstPageVariants.mtg);

      firstPage.drawText(termsOfPayment, firstPageVariants.termsOfPayment);

      secondPage.drawText(showroomPrice, secondPageVariants.showroomPrice);

      secondPage.drawText(lifeTax, secondPageVariants.lifeTax);

      secondPage.drawText(
        insurancePremium,
        secondPageVariants.insurancePremium
      );

      secondPage.drawText(tcs, secondPageVariants.tcs);

      secondPage.drawText(
        extendedWarranty,
        secondPageVariants.extendedWarranty
      );

      secondPage.drawText(fastTag, secondPageVariants.fastTag);

      // Save the modified PDF document
      const modifiedPdfBytes = await pdfDoc.save();

      // Create a Blob from the PDF bytes
      const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });

      // Create a download link and trigger the download
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${name}.pdf`;
      document.body.appendChild(link); // Append the link to the body
      link.click();
      document.body.removeChild(link); // Remove the link from the body after the download
    } catch (error) {
      console.error("Error handling download:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleDownload}>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="text" name="address" placeholder="Enter address" />
        <input
          type="text"
          name="contactNumber"
          placeholder="Enter contact number"
        />
        <input type="text" name="email" placeholder="Enter email" />
        <input type="text" name="model" placeholder="Enter model" />
        <input type="text" name="suffix" placeholder="Enter suffix" />
        <input type="text" name="color" placeholder="Enter color" />

        <input type="text" name="tdms" placeholder="Enter TDMS" />
        <input type="text" name="mtg" placeholder="Enter MTG" />
        <input
          type="text"
          name="termsOfPayment"
          placeholder="Enter terms of payment"
        />
        <input
          type="text"
          name="showroomPrice"
          placeholder="Enter showroom price"
        />
        <input type="text" name="lifeTax" placeholder="Enter life tax" />
        <input
          type="text"
          name="insurancePremium"
          placeholder="Enter insurance premium"
        />
        <input type="text" name="tcs" placeholder="Enter TCS" />
        <input
          type="text"
          name="extendedWarranty"
          placeholder="Enter extended warranty"
        />
        <input type="text" name="fastTag" placeholder="Enter fast tag" />
        <button
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Download
        </button>
      </form>
    </div>
  );
}

export default Form;
