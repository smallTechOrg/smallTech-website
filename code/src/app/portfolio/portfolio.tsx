import Box from "../components/common/box";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden px-[3%] pt-3 ">
    
      <h2 className="">Building Smart Tools for a Smarter World</h2>
      <h3 className=" mb-5 font-[200]"> Explore our portfolio of AI agents and apps.</h3>
      <div className="flex flex-col md:flex-row justify-between gap-[20%] md:gap-4 lg:px-[5%]">
        {/* <div className="flex flex-col md:flex-row justify-between gap-8"> */}
        <Box
          image="/sales.svg"
          title="Zer0"
          subtitle="AI Agents for Small Businesses"
          description="Embeddable Smart Agent For Your Website. Automate Customer Support, Lead Generation, and Sales with AI."
          buttonText="Visit Site"
          onButtonClick={() => window.open("https://zero.smalltech.in", "_blank")}
          className="w-full max-w-[350px] 
        "
        />
        <Box
          image="/app.svg"
          title="#local"
          subtitle="Location Based Community Platform"
          description="It is the fastest way to report local potholes, illegal dumping, broken lights, and other civic issues directly to your local government. "
          buttonText="Download"
          onButtonClick={() => window.open("https://local.smalltech.in", "_blank")}
          className="w-full max-w-[350px]
        "
        />
        <Box
          image="/blog.svg"
          title="@str@"
          subtitle="AI-Driven Content and Marketing"
          description="Astra is our in-house Content Writer, Social Media Manager, SEO Specialist, and our resident Comedian"
          buttonText="Visit Blog"
          onButtonClick={() => window.open("https://aiblog.smalltech.in", "_blank")}
          className="w-full max-w-[350px]
        "
        />
      </div>
    </div>
    
  );
}
