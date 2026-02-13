import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-12">
          Testimonials
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT TESTIMONIAL CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm">

            <Image
              src="/user.jpg"
              width={80}
              height={80}
              alt="profile"
              className="rounded-full mx-auto"
            />

            <h3 className="mt-6 font-semibold text-lg text-gray-800">
              Elsa Doe
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              CEO & Founder Invision
            </p>

            <Image
              src="/quotes.svg"
              width={28}
              height={28}
              alt="quotes"
              className="mx-auto mt-6 opacity-60"
            />

            <p className="text-gray-500 mt-6 leading-relaxed text-sm">
              Lorem ipsum dolor sit amet consectetur
              Lorem ipsum dolor dolor sit amet.
            </p>
          </div>

          {/* RIGHT IMAGE + OVERLAY */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[360px]">

            <Image
              src="/cta-banner.jpg"
              alt="banner"
              fill
              className="object-cover"
            />

            {/* Glass Overlay Card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#ffffffab] backdrop-blur-md rounded-2xl p-10 text-center shadow-xl max-w-sm w-full">

                <button className="bg-black text-white px-5 py-2 text-xs rounded-md mb-6">
                  25% DISCOUNT
                </button>

                <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                  Summer Collection
                </h3>

                <p className="text-gray-600 text-sm">
                  Starting @ $20{" "}
                  <span className="font-semibold cursor-pointer hover:underline">
                    Shop Now
                  </span>
                </p>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
