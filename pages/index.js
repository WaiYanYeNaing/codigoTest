import Head from "next/head";
import Image from "next/image";
import Categories from "../components/IndexPage/Categories";
import Title from "../components/IndexPage/Title";
import WorkCard from "../components/IndexPage/WorkCard";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBar />

      <Title />

      <Categories />

      <WorkCard />
    </div>
  );
};

export default Home;
