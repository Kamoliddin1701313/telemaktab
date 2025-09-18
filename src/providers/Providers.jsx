import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

function Providers({ children }) {
  return (
    <div className="bg-white">
      <div className="flex flex-col">
        <Navbar />
        <main>
          <div className="mt-[60px]">{children}</div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Providers;
