import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Image src="/assets/logo-wide1.png" fill={true} />
      </div>
      {/* <div>
        <Image src="/assets/instution-logo.jpg" fill={true} />
      </div> */}
    </div>
  );
};

export default Header;
