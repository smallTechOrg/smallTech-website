
import Box from "../components/common/box";
import { techDomains, businessDomains } from "./constants";

export default function Domains() {
  return (
    <div
      className="
      flex flex-col mx-auto
      w-full
      px-4 md:px-20 lg:px-15
      py-0 md:pt-10"
    >

      {/* MOBILE SCREEN 1: TECH DOMAINS*/}
      <div className="md:hidden min-h-screen flex flex-col justify-start py-6">
        <section className="w-full">

          <h2 className="mb-2">Tech Domains</h2>
          <h3 className="mb-2">
            Explore our portfolio of AI, apps and web innovation
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {techDomains.flat().map((item, idx) => (
              <Box
                key={idx}
                image={item.src}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </section>
      </div>

      {/* MOBILE SCREEN 2: BUSINESS DOMAINS */}
      <div className="md:hidden min-h-screen flex flex-col justify-start py-6">
        <section className="w-full">

          <h2 className="mb-2">Business Workflows</h2>
          <h3 className="mb-5">
            Explore our portfolio of AI, apps and web innovation
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {businessDomains.flat().map((item, idx) => (
              <Box
                key={idx}
                image={item.src}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </section>
      </div>

      {/* DESKTOP VIEW*/}
      <div className="hidden md:flex flex-col">

        {/* DESKTOP: TECH DOMAINS */}
        <h2 className="">Tech Domains</h2>
        <h3 className="mb-1">
          Explore our portfolio of AI, apps and web innovation
        </h3>

        <div className="grid grid-cols-5 gap-10 mt-6">
          {techDomains.flat().map((item, idx) => (
            <Box
              key={idx}
              image={item.src}
              title={item.title}
              subtitle={item.subtitle}
              className="md:[&_h3]:text-[18px] md:[&_p]:text-[14px] md:[&_img]:w-[50px] md:[&_img]:h-[50px]"
            />
          ))}
        </div>

        {/* DESKTOP: BUSINESS DOMAINS */}
        <h2 className="mt-2">Business Workflows</h2>
        <h3 className="mb-1">
          Explore our portfolio of AI, apps and web innovation
        </h3>

        <div className="grid grid-cols-4 gap-10 mt-6">
          {businessDomains.flat().map((item, idx) => (
            <Box
              key={idx}
              image={item.src}
              title={item.title}
              subtitle={item.subtitle}
              className="md:[&_h3]:text-[18px] md:[&_p]:text-[14px] md:[&_img]:w-[50px] md:[&_img]:h-[50px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

