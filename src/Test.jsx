import { motion } from "framer-motion";
const Test = () => {
  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      <motion.ul>
        {items.map((item) => (
          <motion.li key={item}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
