import React, { Component } from "react";

import Clothes from "../assets/Background-Contact-Form.jpg";
import Decoration from "./Decoration";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <section className="contact" id="section_5">
       <img className="clothes__picture" src={Clothes} alt="Clothes" />
        <div className="contact__form">
          <h1 className="contact__title">Skontaktuj się z nami</h1>
          <Decoration />
          <form onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form__data">
              <div className="form">
                <label className="form__input">Wpisz swoje imię</label>
                <br />
                <input
                  type="text"
                  className="form__input"
                  placeholder="Krzysztof"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className="form">
                <label className="form__input">Wpisz swój email</label>
                <br />

                <input
                  type="email"
                  className="form__input"
                  placeholder="abc@xyz.pl"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
            </div>
            <div className="contact__message">
              <label className="form__inputMessage">Wpisz swoją wiadomość</label>
              <textarea
                className="form__inputMessage"
                cols="20"
                rows="10"
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur excepturi beatae nostrum magnam praesentium pariatur voluptatem officiis odit harum perferendis quas possimus eveniet nam, at obcaecati optio corporis temporibus?"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
              <br />
              <button type="submit" className="btn__submit">
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default Contact;
