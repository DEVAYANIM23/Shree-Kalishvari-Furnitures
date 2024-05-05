import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import logoImage from "../../components/navbar/sofa logo.png";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-blue-400"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl px-4 py-8 bg-white shadow-md rounded-lg"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold mb-4 text-center text-gray-800"
        >
         <div className="logo flex items-center md:mb-0">
          <Link to={'/'}>
            <img src={logoImage} alt="Logo" className="h-12 md:h-14 w-auto md:w-auto mr-8" />
          </Link>
          Shree Kalishvari Furnitures
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-gray-700 mb-2 leading-relaxed"
        >
          Welcome to Shree Kalishwari Furnitures, your one-stop destination for all your household furnishing needs and interior delights. Established five years ago, Shree Kalishwari Furnitures has been proudly serving the community with a wide range of products, from furniture to home decor, ensuring that every shopper finds what they need to beautify their living space under one roof.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-600 mb-4"
        >
          Address : <span className="font-semibold">223/160,Dharapuram Road, Union Bank Building.<br/>
          Tiruppur-641603
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full h-72"
        >
          <iframe
            title="7mobiles Shop Location"
            className="w-full h-full rounded-lg border-0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163019.88645210848!2d77.32317116742351!3d10.930826534131926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907bff5f19691%3A0x23f52d280a0edca9!2sDharapuram%20Main%20Rd%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714020762894!5m2!1sen!2sin"
          ></iframe>



        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
