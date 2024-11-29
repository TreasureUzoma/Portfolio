"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroImage = () => {
  return (
    <figure className="flex justify-center">
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: -5 }}
        whileTap={{ rotate: -5 }}
        transition={{ duration: 0.5 }}
        className="avatar_container inline-block"
      >
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 10 }}
          whileTap={{ rotate: 10 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/avatar.png"
            width={280}
            height={280}
            alt="Treasure Uzoma Avatar"
            className="avatar_pic block"
          />
        </motion.div>
      </motion.div>
    </figure>
  );
}

export default HeroImage