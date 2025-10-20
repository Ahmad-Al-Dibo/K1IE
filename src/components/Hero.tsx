import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white text-center py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Welkom bij Global Trade & Transport
      </motion.h1>
      <p className="text-lg mb-8">
        Professionele import-, export- en transportdiensten — betrouwbaar en snel.
      </p>
      <a
        href="/contact"
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Neem contact op
      </a>
    </section>
  );
};

export default Home;
