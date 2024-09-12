import { motion } from "framer-motion";

function transition({ Child }) {
  return (
    <>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      ></motion.div>
    </>
  );
}

export default transition;
