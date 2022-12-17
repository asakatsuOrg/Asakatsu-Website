import { Link } from "react-router-dom";

const BUTTONS = {
  normal:
    "py-2 px-6 bg-gradient-to-tl from-secondary to-primary rounded-lg font-medium active:scale-90 duration-200",
  bigger:
    "text-xl py-2 px-12 bg-gradient-to-tl from-secondary to-primary rounded-lg font-medium active:scale-90 duration-200",
  google:
    "flex items-center gap-4 text-2xl bg-white text-black px-6 py-2 rounded-lg",
};

const Button = ({ children, buttonType, path, ...otherProps }) => {
  return (
    <Link className={BUTTONS[buttonType]} to={path} {...otherProps}>
      {children}
    </Link>
  );
};

export default Button;
