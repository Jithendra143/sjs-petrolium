/* eslint-disable react/prop-types */
import classes from './Button.module.css'

export default function Button(props) {
  return (
    <button
    className={`${classes.button} ${props.inverse &&
        classes['button--inverse']} ${props.danger && classes['button--danger']}`}
    // className={classes['button--inverse']}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
