import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React commerce",
    img: "https://cdn.pixabay.com/photo/2023/11/01/11/08/path-8357154_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus quo atque, incidunt reprehenderit nesciunt illum cumque a facere, laudantium quidem mollitia dolores necessitatibus voluptatibus. Quam vero voluptates eveniet distinctio.",
  },
  {
    id: 2,
    title: "Next js Blog",
    img: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus quo atque, incidunt reprehenderit nesciunt illum cumque a facere, laudantium quidem mollitia dolores necessitatibus voluptatibus. Quam vero voluptates eveniet distinctio.",
  },
  {
    id: 3,
    title: "Vanilla Js App",
    img: "https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus quo atque, incidunt reprehenderit nesciunt illum cumque a facere, laudantium quidem mollitia dolores necessitatibus voluptatibus. Quam vero voluptates eveniet distinctio.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus quo atque, incidunt reprehenderit nesciunt illum cumque a facere, laudantium quidem mollitia dolores necessitatibus voluptatibus. Quam vero voluptates eveniet distinctio.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
