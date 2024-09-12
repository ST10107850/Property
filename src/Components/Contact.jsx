import back from "../assets/images/page-heading-bg.jpg";
import phone from "../assets/images/phone-icon.png";
import email from "../assets/images/email-icon.png";

const Contact = () => {
  return (
    <div className="contact section py-12 ">
      <div
        className="w-full bg-cover bg-center bg-no-repeat h-[600px]"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="flex justify-center ">
          <div className="w-full lg:w-1/3 text-center flex justify-center flex-col items-center mt-20">
            <h6 className="text-[#f35525] text-base font-bold uppercase">
              | Contact Us
            </h6>
            <h2 className="text-5xl font-bold mt-4 text-white w-1/1 ">
              Get In Touch With Our Agents
            </h2>
          </div>
        </div>
      </div>

      <div className="contact-content mt-[-250px] py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-7/12 px-4">
              <div id="map" className="mb-16">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.063549741016!2d28.029322625414796!3d-26.1946109270825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1b6c0d6957%3A0xfbe0d8fbd0b2ad62!2sTshimologong%20Precinct!5e0!3m2!1sen!2sza!4v1726061548298!5m2!1sen!2sza"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  className="border-0 rounded-lg shadow-lg"
                  allowFullScreen=""
                ></iframe>
              </div>

              <div className="flex flex-wrap mx-4 ">
                <div className="w-full md:w-1/2 rounded-lg shadow-2xl mb-5">
                  <div className="item phone flex items-center px-4 py-8 ">
                    <img src={phone} alt="" className="w-12 h-12 mr-4" />
                    <h6 className="text-lg font-medium max-w-full">
                      (079) 945-3446
                      <br />
                      <span className="text-sm text-gray-500">
                        Phone Number
                      </span>
                    </h6>
                  </div>
                </div>
                <div className="w-full md:w-1/2 mb-[45px]">
                  <div className="item email flex items-center px-4 py-8 bg-white rounded-lg shadow-2xl">
                    <img src={email} alt="email" className="w-12 h-12 mr-4" />
                    <h6 className="md:text-lg text-sm font-medium break-words max-w-full">
                      samuelnhlakanipho08@gmail.com
                      <br />
                      <span className="text-sm text-gray-500">
                        Business Email
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-5/12 rounded-lg shadow-md bg-white px-8 py-7 md:mx-0 mx-12">
              <form
                id="contact-form"
                action=""
                method="post"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name..."
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your E-mail..."
                    pattern="[^ @]*@[^ @]*"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject..."
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    id="form-submit"
                    className="w-full py-3 bg-[#1e1e1e] text-white rounded-md hover:bg-orange-600 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
