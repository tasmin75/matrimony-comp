import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CustomerBillForm from "./pages/CustomerBillForm";
import InvoiceForm from "./components/InvoiceForm";
import Form from "./components/Form";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer-bill-form" element={<CustomerBillForm />} />
        <Route path="/invoice-form" element={<InvoiceForm />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
