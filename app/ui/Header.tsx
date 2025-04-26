import React from "react";

import CustomerCravingLogo from "../../public/Customer_Cravings_Returns_Logo.png";
import Image from "next/image";

const title = "Papa's Freezeria: All Customer Orders";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center pt-5 text-center">
      <Image
        src={CustomerCravingLogo}
        alt="Customer Cravings Logo"
        width={256}
        height={64}
      />
      <h1 className="mt-4 text-2xl font-semibold">{title}</h1>
    </div>
  );
}

export default Header;
