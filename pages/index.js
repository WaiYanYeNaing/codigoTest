import Categories from "../components/IndexPage/Categories";
import Title from "../components/IndexPage/Title";
import WorkCard from "../components/IndexPage/WorkCard";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Title />

        <Categories />

        <WorkCard />
      </Layout>
    </div>
  );
};

export default Home;
