import gql from "graphql-tag";
export const FETCH_SUPPLIERS_QUERY = gql`
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
