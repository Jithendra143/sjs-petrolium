/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

export default function Button({
  children,
  size,
  inverse,
  danger,
  href,
  to,
  exact,
  type,
  disabled,
  onClick,
}) {
  if (href) {
    return (
      <a
        className={`${classes.button} ${
          classes[`button--${size || "default"}`]
        } ${inverse && classes["button--inverse"]} ${
          danger && classes["button--danger"]
        }`}
        href={href}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        exact={exact}
        className={`${classes.button} ${
          classes[`button--${size || "default"}`]
        } ${inverse && classes["button--inverse"]} ${
          danger && classes["button--danger"]
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${classes.button} ${
        classes[`button--${size || "default"}`]
      } ${inverse && classes["button--inverse"]} ${
        danger && classes["button--danger"]
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
