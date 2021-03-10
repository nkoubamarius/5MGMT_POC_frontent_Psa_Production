import React from "react";
import "./SupplierCard.css";
import moment from "moment";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

function SupplierCard({
  supplier: {
    company,
    description,
    address,
    companyEmail,
    phone,
    createdAt,
    username,
  },
}) {
  return (
    <div className="supplierCard">
      <div className="">
        <div className="">
          <div className="header__suppliers"></div>
          <h2>{company}</h2>
          <img
            alt="bobine"
            className="supplierCard__img"
            height="150"
            src="https://images.ssstatic.com/serpentin-en-fer-blanc-bobine-etp-880150z1-00000075.jpg"
          />
          <p>{companyEmail}</p>
          <h4>{description}</h4>
        </div>
        <hr></hr>
        <div className="buttons">
          <button className="green">
            <AddShoppingCartOutlinedIcon />
          </button>
          <button className="blue">
            <InfoOutlinedIcon />
          </button>
          <button className="orange">
            <EditOutlinedIcon />
          </button>

          <button className="red">
            <DeleteOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupplierCard;
