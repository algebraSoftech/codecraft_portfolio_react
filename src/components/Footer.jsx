const Footer = () => {
  return (
    <div className="bg-n-8 w-full h-40 flex flex-col items-center justify-center">
      <hr className="w-11/12 border-violet-600 mb-4 border shadow-2xl shadow-violet-700" />
      <p className="text-white mb-4">
        &copy; {new Date().getFullYear()} Algebra. All rights reserved.
      </p>

      {/* <div className="flex space-x-4">
        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0 }} // No delay for the first icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <a href="https://github.com/vinay8962">
            {" "}
            <FaGithub className="text-white" />
          </a>
        </motion.div>

        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }} // 0.2s delay for the second icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <a href="vinay9876_73254">
            <FaDiscord className="text-[#7289DA]" />
          </a>
        </motion.div>

        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }} // 0.4s delay for the third icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <a href="https://www.linkedin.com/in/vinay-kushwah-fe-dev/">
            <FaLinkedin className="text-[#0A66C2]" />
          </a>
        </motion.div>

        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }} // 0.6s delay for the fourth icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <a href="https://x.com/VinayFEDev">
            <FaTwitter className="text-[#1DA1F2]" />
          </a>
        </motion.div>

        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }} // 0.8s delay for the fifth icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <a href="https://www.instagram.com/__v_i_n_a_y__06/">
            <FaInstagram className="text-[#E1306C]" />
          </a>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Footer;
