interface IPropsButton {
  children: React.ReactNode;
  click?: () => void;
  extraClass?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, click, extraClass, type = "button" }: IPropsButton) => {
  return (
    <button
      onClick={click}
      type={type}
      className={`backdrop-blur-100 btn-custom transition-all duration-150 hover:bg-custom-gradient-hover active:bg-[#eab24e] rounded-[10px] font-roboto font-semibold text-[#201500] ${extraClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
