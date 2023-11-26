import styles from "./Stripe.module.css";
const Stripe = (props) => {
  return <div className={styles.stripe}>{props.title}</div>;
};

export default Stripe;
