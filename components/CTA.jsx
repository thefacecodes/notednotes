import React from "react";

function CTA() {
  return (
    <div className="cta">
      <div>
        <h3 className="text-[20px]">
          Download <span className="font-medium">Note.d</span>
        </h3>
        <h4 className="text-[36px] md:text-[40px] lg:text-[45px] my-8">
          Join over 20,000+ users and make your life easier.
        </h4>
        <div className="flex gap-6">
          <img src="playstore.png" alt="" />
          <img src="appstore.png" alt="" />
        </div>
      </div>
      <img src="Rectangle.png" alt="" />
    </div>
  );
}

export default CTA;
