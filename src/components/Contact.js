import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Decoration from "./Decoration";
import Footer from "./Footer";

function Contact() {
  const contact = (newContact) => {
    setCont((prevCont) => [...prevCont, newContact]);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cont, setCont] = useState("");

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const newContact = {
      name,
      email,
      message,
    };
    console.log({ newContact });

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((newContact) => {
        console.log({ newContact });
        console.log(`dodana nowa wiadomosć`);
        contact(newContact);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section className="contact" id="section_5">
        <div className="contact__form">
          <div className="contact__title__container">
            <h1 className="contact__title">Skontaktuj się z nami</h1>
            <Decoration />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form__data">
                <div className="form">
                  <label className="form__input">Wpisz swoje imię</label>
                  <br />
                  <Input
                    inputRef={register({
                      required: "Podane imię jest nieprawidłowe!",

                      maxLength: {
                        value: 20,
                        message: "Podane imię jest nieprawidłowe! ",
                      },
                    })}
                    placeholder="Krzysztof"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span>
                    {errors.name && errors.name.message}
                    <br />
                  </span>
                </div>
                <div className="form">
                  <label className="form__input">Wpisz swój email</label>
                  <br />

                  <Input
                    name="email"
                    placeholder="abc@xyz.pl"
                    inputRef={register({
                      required: "Podany email jest nieprawidłowy!",
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
                </div>
              </div>
              <div className="contact__message">
                <label className="form__inputTitle">
                  Wpisz swoją wiadomość
                </label>
                <textarea
                  name="message"
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
                  ref={register({
                    required: "Wiadomosć musi mieć conajmniej 120 znaków!",

                    minLength: {
                      value: 120,
                      message: "Wiadomosć musi mieć conajmniej 120 znaków!",
                    },
                  })}
                  rows={8}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <span>
                  {errors.message && errors.message.message}
                  <br />
                </span>
                <br />

                <button className="btn__submit">Wyślij</button>
              </div>
            </form>
          </div>
        
      </section>
      <Footer />
    </>
  );
}

export default Contact;
