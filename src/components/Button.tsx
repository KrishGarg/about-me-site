import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`${className} p-2 m-1 border-2 shadow-sm text-white bg-slate-600 rounded-md hover:bg-slate-700 transition-all active:bg-slate-500
      focus:bg-slate-500 focus:outline-none focus:ring-2 hover:ring-1
      ring-slate-400 hover:shadow-md duration-200`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
