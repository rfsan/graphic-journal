export const Header = () => {
  return (
    <header className="fixed z-10 w-full bg-[#0F0F0F]">
      <div className="flex max-w-screen-xl justify-between px-4 py-2 lg:mx-auto  lg:px-8">
        <h1 className="font-serif leading-5 text-[#DADADA]">
          rafael <br />
          <span className="font-bold text-[#ffffff]">
            graphic <br />
            journal
          </span>
        </h1>
        <span className="mt-1 text-right text-sm italic text-[#A4A4A4]">
          click the images
          <br /> for more details
        </span>
      </div>
    </header>
  );
};
