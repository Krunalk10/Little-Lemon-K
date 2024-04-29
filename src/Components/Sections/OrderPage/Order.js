// import HeroImage from "../../../assets/food/foodk1.webp";
import HeroImage from "../../../assets/food/foodk2.webp";
export default function OrderPage() {
  return (
    <header className="reserve-table">
      <img
        className="order-page-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="order-page-heading">
        <h1>Order</h1>
      </div>
    </header>
  );
}
