import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import React, { useContext, useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { AuthContext } from "../context/auth";
import { FETCH_SUPPLIERS_QUERY } from "../util/graphql";
import { useForm } from "../util/hooks";

function AddSupplier(props) {
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(createPostCallback, {
    company: "",
    description: "",
    address: "",
    companyEmail: "",
    phone: "",
  });

  const [createPost, { error }] = useMutation(ADD_SUPPLIER, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_SUPPLIERS_QUERY,
      });

      data.getPosts = [result.data.createPost, ...data.getPosts];

      proxy.writeQuery({ query: FETCH_SUPPLIERS_QUERY, data });
      context.loaddata(data);
    },
    onError(error) {
      console.error("error :>>", error.message);
    },
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <>
      <Header />

      <div className="home__body">
        <Sidebar />
        <div className="body">
          <div className="banner">
            <h2>Ajouter un Fournisseur</h2>
          </div>
          <div className="addsupplier_form">
            <form>
              <input
                error={errors.company ? true : false}
                placeholder="company..."
                name="company"
                value={values.company}
                onChange={onChange}
                type="text"
              />
              <input
                error={errors.description ? true : false}
                placeholder="description..."
                name="description"
                value={values.description}
                onChange={onChange}
                type="text"
              />
              <input
                error={errors.address ? true : false}
                placeholder="address..."
                name="address"
                value={values.address}
                onChange={onChange}
                type="text"
              />
              <input
                error={errors.companyEmail ? true : false}
                placeholder="companyEmail..."
                name="companyEmail"
                value={values.companyEmail}
                onChange={onChange}
                type="email"
              />
              <input
                error={errors.phone ? true : false}
                placeholder="phone..."
                name="phone"
                value={values.phone}
                onChange={onChange}
                type="text"
              />

              <button type="submit">Enregistrer</button>
            </form>
            {error && (
              <div className="ui error message" style={{ marginBottom: 20 }}>
                <ul className="list">
                  <li>{error.graphQLErrors[0].message}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const ADD_SUPPLIER = gql`
  mutation createSupplier(
    $company: String!
    $description: String!
    $address: String!
    $companyEmail: String!
    $phone: String!
  ) {
    createFournisseur(
      company: $company
      description: $description
      address: $address
      companyEmail: $companyEmail
      phone: $phone
    ) {
      id
      company
      description
      address
      companyEmail
      phone
      createdAt
    }
  }
`;

export default AddSupplier;
