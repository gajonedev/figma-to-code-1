export const CallToActions = ({inDesktop}: {
  inDesktop: boolean;
}) => {
  return (
    <div className={`flex w-[18rem] max-lg:max-w-[14rem] items-center ${inDesktop ? "justify-between" : "justify-evenly"} font-semibold ${inDesktop ?"max-lg:text-sm" : "mt-[2rem]"}`}>
      <button className="">Sign Up</button>
      <div className="h-[1.8rem] w-[2px] bg-neutral-950"></div>
      <button className="text-white bg-neutral-950 px-[1.2rem] py-[10px] rounded-full">
        Connect Wallet
      </button>
    </div>
  );
};
