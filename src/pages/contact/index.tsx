import { Link } from "react-router-dom";
import Banner from "../../components/banner";
import Button from "../../shared/button";
import { useState, FormEvent } from "react";

// Xatoliklar turlarini aniqlash uchun interfeys
interface Errors {
  email?: string;
  telegram?: string;
}

const ContactPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  // Validation funktsiyasi
  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!email) {
      newErrors.email = "E-mail is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      newErrors.email = "Invalid e-mail format";
    }

    if (!telegram) {
      newErrors.telegram = "Telegram is required";
    } else if (telegram.length < 3) {
      newErrors.telegram = "Telegram username must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Formani yuborish uchun handler
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", { email, telegram });

      // Formani tozalash
      setEmail("");
      setTelegram("");
    }
  };

  return (
    <>
      <Banner title={"Contacts"}/>
      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>

        <div className="container">
          <div className="font-normal font-roboto text-[18px] text-[#999d9d] mb-5">
            <Link to={"/"}>Home /</Link>{" "}
            <Link to={"/contact"} className="text-custom-dark-green">
              Contact
            </Link>
          </div>

          <div className="md:grid grid-cols-2 gap-x-[50px] max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-y-5 mb-10 sm:mb-[60px] md:mb-[80px] lg:mb-[100px]">
              <h3 className="font-roboto font-bold text-[24px] sm:text-[32px] lg:text-[40px] mb-2 text-custom-dark-green md:mb-5">
                Get in touch
              </h3>

              <div className="flex gap-x-5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 8.35C19 7.38478 18.806 6.42902 18.4291 5.53728C18.0522 4.64553 17.4997 3.83528 16.8033 3.15277C16.1069 2.47025 15.2801 1.92886 14.3701 1.55949C13.4602 1.19011 12.4849 1 11.5 1C10.5151 1 9.53982 1.19011 8.62987 1.55949C7.71993 1.92886 6.89314 2.47025 6.1967 3.15277C5.50026 3.83528 4.94781 4.64553 4.5709 5.53728C4.19399 6.42902 4 7.38478 4 8.35C4 9.80635 4.43821 11.1608 5.18393 12.3033H5.17536L11.5 22L17.8246 12.3033H17.8171C18.5896 11.1237 19.0001 9.75156 19 8.35ZM11.5 11.5C10.6475 11.5 9.82995 11.1681 9.22716 10.5774C8.62436 9.98665 8.28571 9.18543 8.28571 8.35C8.28571 7.51457 8.62436 6.71335 9.22716 6.12261C9.82995 5.53187 10.6475 5.2 11.5 5.2C12.3525 5.2 13.17 5.53187 13.7728 6.12261C14.3756 6.71335 14.7143 7.51457 14.7143 8.35C14.7143 9.18543 14.3756 9.98665 13.7728 10.5774C13.17 11.1681 12.3525 11.5 11.5 11.5Z"
                      fill="#F0B345"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-roboto font-bold text-[14px] text-custom-dark-green sm:text-[16px] lg:text-[20px]">
                    Our Location
                  </h4>
                  <address className="font-normal text-[14px] text-[#666] sm:text-[16px] lg:text-[20px] not-italic">
                    PO BOX 10026 Pacific Centre 25th Floor, 700 W Georgia Street
                    Vancouver, BC. V7Y 1B3 Canada
                  </address>
                </div>
              </div>

              <div className="flex gap-x-5">
                <span>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.07143 0H5.42857L7.46429 6.78571L5.42857 8.14286C5.42857 10.8571 8.14286 13.5714 10.8571 13.5714L12.2143 11.5357L19 13.5714V14.9286C19 16.0084 18.571 17.044 17.8075 17.8075C17.044 18.571 16.0084 19 14.9286 19C5.42857 19 0 12.2143 0 4.07143C0 2.99162 0.428953 1.95603 1.19249 1.19249C1.95603 0.428953 2.99162 0 4.07143 0Z"
                      fill="#F0B345"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-roboto font-bold text-[14px] text-custom-dark-green sm:text-[16px] lg:text-[20px]">
                    Phone Number
                  </h4>
                  <Link
                    to={"tel:1-833-344-4653"}
                    className="font-normal text-[14px] text-[#666] sm:text-[16px] lg:text-[20px]"
                  >
                    1-833-344-4653
                  </Link>
                </div>
              </div>

              <div className="flex gap-x-5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 4H4.5C3.83718 4.00072 3.2017 4.26913 2.73302 4.74634C2.26433 5.22355 2.00071 5.87058 2 6.54545V17.4545C2.00071 18.1294 2.26433 18.7764 2.73302 19.2537C3.2017 19.7309 3.83718 19.9993 4.5 20H19.5C20.1628 19.9993 20.7983 19.7309 21.267 19.2537C21.7357 18.7764 21.9993 18.1294 22 17.4545V6.54545C21.9993 5.87058 21.7357 5.22355 21.267 4.74634C20.7983 4.26913 20.1628 4.00072 19.5 4ZM18.867 8.21045L12.4384 13.3014C12.313 13.4006 12.1588 13.4545 12 13.4545C11.8412 13.4545 11.687 13.4006 11.5616 13.3014L5.13304 8.21045C5.05751 8.15238 4.99407 8.0796 4.9464 7.99634C4.89873 7.91309 4.86779 7.82102 4.85538 7.72548C4.84296 7.62995 4.84932 7.53285 4.87408 7.43984C4.89884 7.34683 4.9415 7.25975 4.9996 7.18367C5.05769 7.1076 5.13006 7.04403 5.21249 6.99668C5.29492 6.94932 5.38577 6.91912 5.47977 6.90782C5.57376 6.89653 5.66903 6.90436 5.76002 6.93088C5.85102 6.95739 5.93593 7.00206 6.00982 7.06227L12 11.8059L17.9902 7.06227C18.14 6.9471 18.3283 6.89659 18.5143 6.92166C18.7004 6.94673 18.8693 7.04536 18.9845 7.19624C19.0997 7.34711 19.152 7.5381 19.13 7.72789C19.108 7.91769 19.0135 8.09104 18.867 8.21045Z"
                      fill="#F0B345"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-roboto font-bold text-[14px] text-custom-dark-green sm:text-[16px] lg:text-[20px]">
                    Email Address
                  </h4>
                  <Link
                    to={"mailto:info@cunninghammining.com"}
                    className="font-normal text-[14px] text-[#666] sm:text-[16px] lg:text-[20px]"
                  >
                    info@cunninghammining.com
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                 className="bg-white border border-custom-white-100 p-6 lg:py-[46px] lg:px-[42px]"
              >
                <h4 className="text-xl font-medium text-custom-dark-green font-roboto mb-5 md:10">Make Your Request</h4>
                <div className="flex flex-col gap-y-2 mb-5">
                  <input
                    type="text"
                    placeholder="Your E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`rounded-[10px] w-full bg-custom-white border py-[18px] px-5 outline-0 ${
                      errors.email ? "border-red-500" : "border-custom-white-100"
                    }`}
                  />
                  {errors?.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>

                <div className="flex flex-col gap-y-2 mb-[34px]">
                  <input
                    placeholder="Your telegram"
                    type="text"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    className={`rounded-[10px] w-full bg-custom-white border py-[18px] px-5 outline-0 ${
                      errors.telegram ? "border-red-500" : "border-custom-white-100"
                    }`}
                  />
                  {errors.telegram && (
                    <span className="text-red-500 text-sm">
                      {errors.telegram}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  extraClass="w-full outline-0 backdrop-blur-100 bg-custom-gradient transition-all duration-150 hover:bg-custom-gradient-hover active:bg-[#eab24e] rounded-[10px] py-[19px] px-[33px] font-roboto font-bold text-[14px] md:text-[16px]"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          <footer>
            <div className="rounded-[10px] grid grid-cols-1 md:grid-cols-3 align-items-center gap-x-[300px] xl:gap-x-[425px] mt-[30px] p-[27px_42px] overflow-hidden second-bg w-full h-full">
              <p className="w-max text-custom-white font-roboto text-[18px]">
                © 2024. All rights reserved.
              </p>
              <Link
                className="w-max text-custom-white font-roboto text-[18px] "
                to="/"
              >
                политика конфеденциальности
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
