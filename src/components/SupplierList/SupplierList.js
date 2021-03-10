import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { AuthContext } from "../../context/auth";
import SupplierCard from "../SupplierCard/SupplierCard";
import { Link } from "react-router-dom";

function SupplierList() {
  const context = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_SUPPLIERS_QUERY);

  useEffect(() => {
    context.loaddata(data);
  }, [data]);

  console.log(data);

  return (
    <div className="supplier">
      <div className="">
        <div className="page-title">
          <h1>Fournisseurs</h1>

          <div className="buttons">
            <button className="green">
              <Link to="/addsupplier">Ajouter un fournisseur</Link>
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="">
          {loading ? (
            <h1>
              Loading....
              {/* <Loader active /> */}
            </h1>
          ) : (
            <div className="supplier__list">
              {data?.getFournisseurs &&
                data?.getFournisseurs.map((supplier) => (
                  <div key={supplier.id} style={{ marginBottom: 20 }}>
                    <SupplierCard key={supplier.id} supplier={supplier} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const FETCH_SUPPLIERS_QUERY = gql`
  {
    getFournisseurs {
      company
      description
      address
      companyEmail
      phone
      createdAt
      username
    }
  }
`;

export default SupplierList;
