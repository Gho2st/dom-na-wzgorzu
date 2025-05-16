"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Form() {
  const [formData, setFormData] = useState({
    text: "",
    fullName: "",
    email: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);
  const recaptchaRef = useRef(null); // Ref dla reCAPTCHA

  // Funkcja walidacji pól formularza
  function validateForm(data) {
    const errors = [];
    if (!data.fullName.trim()) errors.push("fullName");
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.push("email");
    if (!data.text.trim()) errors.push("text");

    setErrorFields(errors);
    return errors.length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    if (!validateForm(formData)) {
      setFormError("Uzupełnij wymagane pola");
      return;
    }

    // Pobranie tokena reCAPTCHA
    const recaptchaToken = recaptchaRef.current.getValue();
    if (!recaptchaToken) {
      setFormError("Potwierdź, że nie jesteś robotem.");
      return;
    }

    // console.log("Wysyłanie danych:", { ...formData, recaptchaToken }); // Dodaj logowanie danych

    setIsSending(true);
    setFormError(null);

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          text: "",
          fullName: "",
          email: "",
        });
        recaptchaRef.current.reset(); // Zresetuj CAPTCHA po wysłaniu
      } else {
        const errorData = await response.json();
        setFormError(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setFormError("Wystąpił nieoczekiwany błąd podczas wysyłania wiadomości");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      {/* contact container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:mt-12">
        {/* form container */}
        <div className="">
          {formSubmitted ? (
            <div className="mt-10 lg:mt-20 ">
              <span className="text-2xl ">t</span>
              <p className="font-light text-lg mt-6 ">dsadsa</p>
            </div>
          ) : (
            <form onSubmit={sendMail} className="mt-10">
              <div>
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-lg text-neutral-700  font-medium"
                  >
                    Imię i Nazwisko
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={handleChange}
                    value={formData.fullName}
                    placeholder="Wpisz swoje Imię i Nazwisko"
                    style={{
                      border: errorFields.includes("fullName")
                        ? "1px solid red"
                        : "0",
                    }}
                    className="w-full mt-3 mb-5 bg-neutral-100 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-lg text-neutral-700 font-medium"
                  >
                    Adres e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Wpisz swój adres e-mail"
                    style={{
                      border: errorFields.includes("email")
                        ? "1px solid red"
                        : "0",
                    }}
                    className="w-full mt-3 mb-5 bg-neutral-100 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
                  />
                </div>
              </div>
              <label
                htmlFor="text"
                className="text-lg text-neutral-700  font-medium"
              >
                Twoja Wiadomość
              </label>
              <textarea
                id="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
                style={{
                  border: errorFields.includes("text") ? "1px solid red" : "0",
                }}
                className="w-full h-40 mt-3 bg-neutral-100 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
              />
              <div className="flex gap-8">
                <ReCAPTCHA
                  className="mt-4"
                  ref={recaptchaRef}
                  sitekey="6LetqpUqAAAAABRwX_slcBybtlkC7S4X4QZZEYUo" // Wstaw swój Site Key
                />
                {formError && (
                  <p
                    className="mt-5 text-xl font-bold"
                    style={{ color: "red" }}
                  >
                    {formError}
                  </p>
                )}
              </div>
              <button
                disabled={isSending}
                type="submit"
                className="flex border-yellow-600 bg-yellow-500/10 hover:bg-yellow-500/30 duration-300 cursor-pointer justify-center items-center gap-2 text-yellow-600 border-2 font-semibold text-xl rounded-lg p-4 w-full mt-6"
              >
                {isSending ? "wysyłanie" : "Wyślij wiadomość!"}
                <FaLongArrowAltRight className="text-xl" />
              </button>
            </form>
          )}
        </div>

        <div className="p-6 py-10 rounded-xl">
          <div className="">
            <h2 className="text-2xl font-bold text-yellow-600">
              Przywróć energię w sercu uzdrowiskowej natury!
            </h2>
            <ul className="flex flex-col gap-8 mt-10">
              <li className="flex gap-2 items-center">
                <FaPhoneAlt className="text-2xl text-yellow-600" />
                <Link className="underline text-xl" href={"tel:48573850203"}>
                  +48 573 850 203{" "}
                </Link>
              </li>
              <li className="flex text-xl  gap-2 items-center">
                <IoMail className="text-2xl text-yellow-600" />
                <Link
                  className="underline"
                  href={"mailto:domnawzgorzu@m-decor.eu"}
                >
                  domnawzgorzu@m-decor.eu
                </Link>
              </li>
              <li className="flex text-xl gap-2 items-center">
                <FaLocationDot className="text-2xl text-yellow-600" />
                Złockie 172, 33-370 Muszyna
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
