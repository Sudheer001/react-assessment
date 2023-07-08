import React, { forwardRef }  from "react";
import classes from "./Button.module.scss";

// Default styles for Button
const defaultButtonStyles = {
  type: "secondary",
  rounded: false,
  disabled: false,
  width: "auto"
};

// Default onClick event
const onClick = () => {};

/**
 * Button UI
 * @param text Button label text
 * @param additionalClasses String with classes from the components using the Button (optional)
 * @param styles Different styles provided (optional)
 *  {
 *    type: primary | primary-bright | secondary (default) | secondary-fill | secondary-white | icon-only | link
      subtype: left | right
      rounded: true | false (default)
      disabled: true | false (default)
      width: null | auto (default) | full | <number> (px)
    }
 * @param onButtonClick Button click event
 * @param type String of HTML <button> type (i.e. 'submit', 'button', ...) (optional)
 * @param badge Number that appears on the corner of the button in a circle (best with 2 digits or less) (optional)
 */
function Button({ text, additionalClasses, styles, onButtonClick, type, badge = null }, ref) {
  styles = Object.assign({}, defaultButtonStyles, styles || {});
  onButtonClick = onButtonClick && !styles?.disabled ? onButtonClick : onClick;
  const buttonClasses = [
    classes.btn,
    classes[`btn-${styles?.type}`],
    classes[`btn-${styles?.subtype}`],
    classes[styles?.rounded ? 'rounded' : ''],
    classes[styles?.circle ? 'circle' : ''],
    classes[styles?.oval ? 'oval' : ''],
    classes[styles?.selected ? 'selected' : ''],
    classes[styles?.disabled ? 'disabled' : ''],
    classes[styles?.border ? 'border': 'noBorder'],
    classes[styles?.hidden ? 'hidden': ''],
    classes[styles?.background === false ? 'noBackground' : ''],
    classes[styles?.responsive ? 'responsive' : ''],
    additionalClasses
  ].join(' ');
  const buttonIconContainerClasses = [
    classes["button-icon"],
    classes[`button-icon-${styles?.icon?.position}`],
    classes[`button-icon-${styles?.icon?.color}`]
  ].join(' ');

  const buttonStyles = () => {
    let result = {
      backgroundColor: styles?.backgroundColor + ' !important' || '',
      width: null
    }
    switch(styles?.width) {
      case "full":
        result.width = "100%";
        break;
      case "half":
        result.width = "50%";
        break;
      case "auto":
        result.width = "auto";
        break;
      default:
        result.width = `${styles?.width}px`;
        break;
    }
    return result;
  };

  return (
    <>
      <button ref={ref} style={buttonStyles()} disabled={styles?.disabled} className={[`${buttonClasses} ${classes.withText}`]} onClick={onButtonClick} type={type}>
        <span className={classes.buttonText}>{text} &nbsp;<i className="fa fa-angle-right" style={{fontSize:'22px'}}></i></span>
      </button>
    </>
  )
}

export default forwardRef(Button);
