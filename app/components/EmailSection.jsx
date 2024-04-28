"use client";
import React, { useState } from "react";
const EmailSection = () => {
  
  return (
    <section
      id="contact"
      className="grid font-monsfont md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-customgreen my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-customdarkgreen mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
      </div>
      <div>
        <div>
        <h5 className="text-xl font-bold text-customgreen my-2">
          Contact Information
        </h5>
        <p className="text-customdarkgreen max-w-md">
          aniketsapra2000@gmail.com
        </p>
        <p className="text-customdarkgreen max-w-md">
          Mobile: +91 9953166850
        </p>
        <p className="text-customdarkgreen max-w-md">
          Location: New Delhi, India
        </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;