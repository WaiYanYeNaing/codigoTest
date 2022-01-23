import Categories from "../components/IndexPage/Categories";
import Footer from "../components/IndexPage/Footer";
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

        {/* <Footer /> */}
      </Layout>
    </div>
  );
};

export default Home;
