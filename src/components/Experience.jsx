import { motion } from "framer-motion";

const experiences = [
  {
    company: "Techieshubhdeep IT Pvt Ltd",
    role: "Frontend Developer",
    start: "Sept 2023",
    end: "Jun 2024",
    description:
      "Built and maintained key features for a school management system, e-commerce website, and the company portfolio. Collaborated with cross-functional teams to deliver responsive, high-quality web applications.",
  },
];

const Experience = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-[#090c11] py-20 px-6 text-white">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl mb-8 font-bold bg-[#5d79f3] text-transparent bg-clip-text">
          Experience
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
          <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
        </motion.div>{" "}
      </div>

      {/* Subtitle */}
      <div className="text-center mb-12">
        <p className="text-2xl sm:text-3xl font-semibold mb-2">
          Working Since 2023
        </p>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Nurturing growth and learning — my journey of gaining hands-on
          experience since my early college years.
        </p>
      </div>

      {/* Experience Card */}
      <div className="flex flex-col items-center">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="w-full max-w-4xl bg-[#131822] border border-white/10 rounded-xl shadow-md p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {exp.company}
                </h3>
                <p className="text-lg text-[#1ab7e3]">{exp.role}</p>
              </div>
              <span className="text-sm text-gray-400 mt-2 md:mt-0">
                {exp.start} - {exp.end}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
