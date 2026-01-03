import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Shyam Prasath",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Get in Touch" />
      <Contact />
    </>
  );
};

export default ContactPage;
