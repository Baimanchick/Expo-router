import Head from "expo-router/head";
import "./style.css";

const Page = () => {
  return (
    <>
      <Head>
        <title>Simons Cool Page</title>
        <meta name="description" content="Check out Galaxies.dev" />
      </Head>
      <h2>Drawer1 web</h2>
      <div className="container">
        <span style={{ color: "#fff" }}>I am a container</span>
      </div>
    </>
  );
};

export default Page;
