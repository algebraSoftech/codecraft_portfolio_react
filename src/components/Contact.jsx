import React, { useRef , useState } from "react";
import ContactImage from "../assets/3641599.jpg";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Type } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    // Loader alert
    Swal.fire({
      title: "Sending message...",
      text: "Please wait a moment",
      allowOutsideClick: false,
      allowEscapeKey: false,
      background: "#1e1e2f",
      color: "#ffffff",
      didOpen: () => Swal.showLoading(),
    });

    try {
      await emailjs.sendForm(
        "service_iojgqfi",      // Service ID
        "template_w7nglsu",     // Template ID
        formRef.current,
        "-gXSPSPUHiQbqse4i"     // Public Key
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent 🎉",
        text: "Thank you for reaching out. We’ll contact you soon.",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        background: "#1e1e2f",
        color: "#ffffff",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      Swal.fire({
        icon: "error",
        title: "Failed to Send 😕",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#ef4444",
        background: "#1e1e2f",
        color: "#ffffff",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full h-auto bg-gradient-to-r from-[#1e1e2f] to-[#2b2d42] p-6 sm:p-12 overflow-hidden">
      <div className="flex justify-center">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 text-transparent bg-clip-text">
            Contact Us
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </motion.div>

          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Have a project in mind? Let’s build something amazing together 🚀
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row w-full items-center gap-10">
        <div className="md:w-2/5 flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            src={ContactImage}
            alt="Contact"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-2xl"
          />
        </div>

        <div className="md:w-3/5 flex justify-center items-center">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="text-white w-full max-w-lg space-y-5"
          >
            {/* Name */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <label className="block mb-2 font-semibold">Name</label>
              <div className="flex items-center border border-gray-400 rounded-xl px-3">
                <User className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="bg-transparent w-full py-2 px-1 focus:outline-none"
                  required
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
            >
              <label className="block mb-2 font-semibold">Email</label>
              <div className="flex items-center border border-gray-400 rounded-xl px-3">
                <Mail className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-full py-2 px-1 focus:outline-none"
                  required
                />
              </div>
            </motion.div>

            {/* Subject */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.6 }}
            >
              <label className="block mb-2 font-semibold">Subject</label>
              <div className="flex items-center border border-gray-400 rounded-xl px-3">
                <Type className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  type="text"
                  name="title"
                  placeholder="Enter subject"
                  className="bg-transparent w-full py-2 px-1 focus:outline-none"
                />
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.9 }}
            >
              <label className="block mb-2 font-semibold">Message</label>
              <div className="flex items-start border border-gray-400 rounded-xl px-3">
                <MessageSquare className="text-gray-400 w-5 h-5 mt-2 mr-2" />
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  className="bg-transparent w-full py-2 px-1 focus:outline-none resize-none"
                  rows="5"
                  required
                ></textarea>
              </div>
            </motion.div>

            {/* Submit */}
            <motion.button
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2.2 }}
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl w-full shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
