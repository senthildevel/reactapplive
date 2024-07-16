import bannerImg from "../assets/bridge.jpg";

export const Home = () => {
  return (
    <>
      <h2 className="mb-3">Home Page</h2>
      <img src={bannerImg} alt="" className="w-100" height="450" />
    </>
  );
};
