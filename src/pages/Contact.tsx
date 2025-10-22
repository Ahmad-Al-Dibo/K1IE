import { useRef } from "react";
import emailjs from "@emailjs/browser";



const Importsection = () => {
  return (
    <>
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/global.css" rel="stylesheet" />
  <link href="css/contact.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />

</>
  )
};



const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
      () => alert("Bericht verzonden!"),
      (err) => alert("Fout bij verzenden: " + err.text)
      );
      };

      return (
        <>
        <Importsection/>
      <section className="p-10 text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">Contacteer ons</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto flex flex-col gap-4">
      <input type="text" name="user_name" placeholder="Naam" className="p-3 rounded border border-gray-300" required />
      <input type="email" name="user_email" placeholder="Email" className="p-3 rounded border border-gray-300" required />
      <textarea name="message" placeholder="Bericht" className="p-3 rounded border border-gray-300" rows={5} required />
      <button type="submit" className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-secondary transition">Verstuur</button>
      </form>
      </section>
      </>
      );
      };

      export default Contact;