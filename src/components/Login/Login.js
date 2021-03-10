import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useForm } from "../../util/hooks";
import "./Login.css";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Login = (props) => {
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginrUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push("/home");
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginrUserCallback() {
    loginUser();
  }

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Groupe_PSA_logo.svg/1200px-Groupe_PSA_logo.svg.png"
        alt=""
      />
      <form onSubmit={onSubmit} className={loading ? "loading" : ""}>
        <input
          error={errors.username ? true : false}
          placeholder="username..."
          name="username"
          value={values.username}
          onChange={onChange}
          type="text"
        />
        <input
          error={errors.password ? true : false}
          placeholder="Password..."
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
        <button type="submit">Connexion</button>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="error__message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    admin_login(username: $username, password: $password) {
      id
      username
      token
      createdAt
    }
  }
`;

export default Login;
