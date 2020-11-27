import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@material-ui/core/Input";
import Navifation from "./Navigation";
import Decoration from "./Decoration";
import { Validate } from "../validators";
import { HashLink as Link } from "react-router-hash-link";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSubmit, register, errors, getValues } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <div className="register">
      <Navifation />
      <div className="form">
        <h1>Załóż konto</h1>

        <Decoration />
        <form className="form__register" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__registerGrey">
            <label>Email</label>
            <Input
              name="email"
              inputRef={register({
                required: "Email jest wymagany!",
                pattern: {
                  value: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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

            <label>Powtórz hasło</label>
            <Input
              inputRef={register({
                required: true,
                minLength: 6,
                validate: { Validate: Validate(getValues, "password") },
              })}
              name="passwordConfirmation"
              className="input is-large"
              type="password"
              autoComplete="current-password"
            />
            {errors.passwordConfirmation && (
              <div className="form-error">
                {errors.passwordConfirmation.type === "required" && (
                  <span>Hasło jest wymagane! </span>
                )}
                {errors.passwordConfirmation.type === "minLength" && (
                  <span>Hasło jest za krótkie!</span>
                )}
                {errors.passwordConfirmation.type === "Validate" && (
                  <span>Hasło musi być takie same!</span>
                )}
              </div>
            )}
          </div>
          <div className="register__buttons">
            <Link to="/logowanie">
              <button>Zaloguj</button>
            </Link>
            <button type="submit">Załóż konto</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
