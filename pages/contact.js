import Head from "next/head";
import React from "react";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = (props) => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
