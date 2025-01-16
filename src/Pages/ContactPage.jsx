import back from "../assets/images/page-heading-bg.jpg";
import phone from "../assets/images/phone-icon.png";
import email from "../assets/images/email-icon.png";

export const ContactPage = () => {
  return (
    <div>
      {/* <!-- Contact Page Heading --> */}
      <div
        className="bg-gray-100 py-10 bg-cover bg-no-repeat bg-center h-[349px]"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col">
            <span className="text-gray-600 bg-white px-3 py-2 mb-[30px]">
              <a href="#" className="text-[#1E1E1E]">
                Home
              </a>{" "}
              / Contact Us
            </span>
            <h3 className="text-[48px] font-bold mt-4 text-white">Contact Us</h3>
          </div>
        </div>
      </div>

      {/* <!-- Contact Section --> */}
      <div className="py-16 bg-white mt-[120px]">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* <!-- Contact Information --> */}
            <div>
              <div className="mb-10">
                <h6 className="text-xl font-semibold uppercase text-[#f35525] ">
                  | Contact Us
                </h6>
                <h2 className="text-4xl font-bold text-gray-800 mt-5">
                  Get In Touch With Our Agents
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                When you really need to download free CSS templates, please
                remember our website TemplateMo. Also, tell your friends about
                our website. Thank you for visiting. There is a variety of
                Bootstrap HTML CSS templates on our website. If you need more
                information, please contact us.
              </p>

              {/* <!-- Contact Details --> */}
              <div className="space-y-6">
                <div className="flex items-center shadow-2xl p-8 rounded-xl">
                  <img src={phone} alt="Phone" className="w-12 h-12 mr-4" />
                  <h6 className="text-lg font-semibold">
                    010-020-0340
                    <br />
                    <span className="text-sm text-gray-500">Phone Number</span>
                  </h6>
                </div>
                <div className="flex items-center bg-white shadow-2xl p-8 rounded-xl">
                  <img src={email} alt="Email" className="w-12 h-12 mr-4" />
                  <h6 className="text-lg font-semibold">
                    info@villa.co
                    <br />
                    <span className="text-sm text-gray-500">
                      Business Email
                    </span>
                  </h6>
                </div>
              </div>
            </div>

            {/* <!-- Contact Form --> */}
            <div>
              <form
                id="contact-form"
                action=""
                method="post"
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name..."
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your E-mail..."
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject..."
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1E1E1E] text-white font-semibold rounded-lg hover:bg-orange-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <!-- Google Map --> */}
          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.063549741016!2d28.029322625414796!3d-26.1946109270825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1b6c0d6957%3A0xfbe0d8fbd0b2ad62!2sTshimologong%20Precinct!5e0!3m2!1sen!2sza!4v1726061548298!5m2!1sen!2sza"
              width="100%"
              height="500"
              className="w-full h-96 border-0 rounded-lg shadow-lg"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
