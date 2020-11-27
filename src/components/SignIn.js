import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";

import Navigation from "./Navigation";
import Decoration from "./Decoration";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <>
      <div className="login">
        <Navigation />

        <div className="form">
          <h1>Zaloguj się</h1>
          <Decoration />
          <form className="form__login" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__loginGrey">
              <label>Email</label>
              <Input
                name="email"
                inputRef={register({
                  required: "Email jest wymagany!",
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Podany email jest nieparwidłowy!",
                  },
                })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>
                {errors.email && errors.email.message}
                <br />
              </span>
              <label>Hasło</label>
              <Input
                inputRef={register({ required: true, minLength: 6 })}
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div>
                  {errors.password.type === "required" && (
                    <span>Hasło jest wymagane!</span>
                  )}
                  {errors.password.type === "minLength" && (
                    <span>Hasło jest za krótkie! </span>
                  )}
                </div>
              )}
            </div>
            <div className="login__buttons">
              <button type="submit">Zaloguj się</button>
              <Link to="/register">
                <button>Załóż konto</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
