import React from "react";
import { ClientsData } from "./ClientsData";
import { motion } from "framer-motion";
const Clients = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };
  return (
    <section className="bg-black rounded-md">
      <div className="mx-auto py-6 lg:py-8">
        <div className="flex flex-col items-start">
          <h1 className="text-sm md:text-2xl font-semibold uppercase">
            Our Partners
          </h1>
          <span className="w-10 md:w-14 lg:w-16 h-[2px] md:h-1 mt-1 bg-primary"></span>
        </div>
        <motion.div
          className="mt-4 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-y-2 md:gap-y-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {ClientsData.map((client, i) => {
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="h-20 w-20 md:h-36 md:w-36 rounded-sm bg-white p-1"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-full object-cover rounded"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
