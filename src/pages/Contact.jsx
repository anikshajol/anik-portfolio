import Title from "../components/Title/Title";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nkrci5c",
        "template_sygihgc",
        form.current,
        "-5ltwejXjnA__miNk"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="flex justify-center">
      <div className="mt-28 mb-16">
        <Title heading={"Get In Touch"}></Title>
        <form className="" ref={form} onSubmit={sendEmail}>
          <label className="text-white">Name</label>
          <br />
          <input
            type="text"
            placeholder="Name"
            className="mb-6 input input-bordered w-full max-w-xs"
            name="from_name"
          />{" "}
          <br />
          <label className="text-white">Email</label> <br />
          <input
            placeholder="Email"
            className="mb-6 input input-bordered w-full max-w-xs"
            type="email"
            name="user_email"
          />
          <br />
          <label className="text-white">Message</label>
          <br />
          <textarea
            className="textarea mb-6 w-full textarea-primary"
            placeholder=""
            name="message"
          />
          <input type="submit" className="btn bg-[#03a9f4] " value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
