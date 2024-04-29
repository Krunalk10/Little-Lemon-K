import HeroImage from "../../../assets/food/foodk1.webp";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="about-page-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="about-page-heading">
        <h1>About us</h1>
      </div>
    </header>
  );
}
