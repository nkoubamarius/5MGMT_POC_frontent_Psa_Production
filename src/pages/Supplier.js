import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import SupplierList from "../components/SupplierList/SupplierList";

function Supplier() {
  return (
    <>
      <Header />

      <div className="home__body">
        <Sidebar />
        <div className="body">
          <SupplierList />
        </div>
      </div>
    </>
  );
}

export default Supplier;
