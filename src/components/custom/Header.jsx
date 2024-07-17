import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 px-5 shadow-sm">
      <img src="\Logo.svg" alt="logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
