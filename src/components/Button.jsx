import { Link } from "react-router-dom";

const BUTTONS = {
  normal:
    "text-white text-sm md:text-base text-center py-2 px-6 bg-gradient-to-tl from-secondary to-primary rounded-lg font-medium active:scale-90 duration-200",
  bigger:
    "text-white text-sm md:text-xl py-2 px-12 bg-gradient-to-tl from-secondary to-primary rounded-lg font-medium active:scale-90 duration-200",
  google:
    "bg-white dark:bg-[#f2f2f2] flex items-center gap-4 text-xl md:text-2xl bg-white text-black px-6 py-2 rounded-lg",
};

const Button = ({ children, buttonType, path, ...otherProps }) => {
  return (
    <Link className={BUTTONS[buttonType]} to={path} {...otherProps}>
      {children}
    </Link>
  );
};

export default Button;
