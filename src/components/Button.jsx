// import { FiLogIn } from "react-icons/fi";

const Button = ({content,onclick}) => {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <RoundedSlideButton content={content} onclick={onclick}/>
    </div>
  );
};

const RoundedSlideButton = ({content,onclick}) => {
  return (
    <button onClick={onclick}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-primary px-4 py-2 font-semibold
        uppercase text-primary transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-primary
        before:transition-transform before:duration-[650ms]
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      {/* <FiLogIn /> */}
      <span>{content}</span>
    </button>
  );
};

export default Button;