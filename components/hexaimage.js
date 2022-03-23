import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const YourComponent = () => (
  <div className={utilStyles.hex}>
    <div className={utilStyles.hexbackground}>
      <Image
        src="/images/mrrobot.png" // Route of the image file
        height={320} // Desired size with correct aspect ratio
        width={320} // Desired size with correct aspect ratio
        alt="Mr Robot"
      />
    </div>
  </div>
);

export default YourComponent;
