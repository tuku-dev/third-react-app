import CardClasses from "./Card.module.css";

const Card = (props) => {
  const classNames = CardClasses.card + " " + props.className;
  return <div className={classNames}>{props.children}</div>;
};
export default Card;
