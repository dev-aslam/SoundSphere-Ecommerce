import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="flex footer flex-col items-center">
      <div className="grid grid-cols-4 gap-8 max-w-[1440px] w-full">
        <div className="flex flex-col justify-between gap-6 max-w-[248px]">
          <div className="navLogo text-2xl">
            <h1>SoundSphere</h1>
          </div>
          <p className="footerText">
            Music is at the core of what we do; and it&#39;s our aim to help you
            rediscover your music and help you enjoy the riffs, basslines and
            solos that were always there, but never heard.
          </p>
          <div className="flex gap-3">
            <div className="bg-white rounded-full p-1 flex justify-center items-center shadow-md hover:bg-black hover:text-white">
              <XIcon fontSize="small" />
            </div>
            <div className="bg-white rounded-full p-1 flex justify-center items-center shadow-md hover:bg-black hover:text-white">
              <FacebookIcon fontSize="small" />
            </div>
            <div className="bg-white rounded-full p-1 flex justify-center items-center shadow-md hover:bg-black hover:text-white">
              <InstagramIcon fontSize="small" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="footerHeaders">Company</h2>
          <ul>
            <li className="footerText">Shop</li>
            <li className="footerText">About</li>
            <li className="footerText">Contact</li>
            <li className="footerText">Work</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="footerHeaders capitalize">Help</h2>
          <ul>
            <li className="footerText">Customer Support</li>
            <li className="footerText">Delivery Details</li>
            <li className="footerText">Terms & conditions</li>
            <li className="footerText">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="footerHeaders capitalize">FAQ</h2>
          <ul>
            <li className="footerText">Account</li>
            <li className="footerText">Manage Deliveries</li>
            <li className="footerText">Orders</li>
            <li className="footerText">Payments</li>
          </ul>
        </div>
      </div>
      <hr className="footerLine w-full max-w-[1440px]" />
      <div className="flex w-full max-w-[1440px] justify-between">
        <p className="text-[14px] text-[#00000075]">
          SoundSphere © 20024, All Rights Reserved
        </p>
        <div className="flex justify-between gap-3">
          <div className="bg-white rounded-md py-[10px] px-2 flex justify-center items-center">
            <img src="./visa.png" alt="visa" />
          </div>
          <div className="bg-white rounded-md py-[10px] px-2 flex justify-center items-center">
            <img src="./Mastercard.png" alt="Mastercard" />
          </div>
          <div className="bg-white rounded-md py-[10px] px-2 flex justify-center items-center">
            <img src="./Paypal.png" alt="Paypal" />
          </div>
          <div className="bg-white rounded-md py-[10px] px-2 flex justify-center items-center">
            <img src="./ApplePay.png" alt="ApplePay" />
          </div>
          <div className="bg-white rounded-md py-[10px] px-2 flex justify-center items-center">
            <img src="./GPay.png" alt="GPay" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
