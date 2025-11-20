import Box from "../components/common/box";

export default function Portfolio() {
  return (
    <div className="mx-5 my-10">
      <h2>Building Smart Tools for a Smarter World</h2>
      <h3> Explore our protfolio of AI, apps and web innovation.</h3>
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <Box
          image="/sales.svg"
          title="AI Agent"
          subtitle="Your conversational Partner"
          description="Stop losing leads to late replies. Implement the SmallTech AI Sales Agent and automate 80% of your sales pipeline. "
          buttonText="Try Demo"
          onButtonClick={() => console.log("Clicked!")}
          className="max-w-[420px]"
        />
        <Box
          image="/app.svg"
          title="#local"
          subtitle="Coming Soon - Your City, Your Voice"
          description="It is the fastest way to report local potholes, illegal dumping, broken lights, and other civic issues directly to your local government. "
          buttonText="Download"
          onButtonClick={() => console.log("Clicked!")}
          className="max-w-[420px]"
        />
        <Box
          image="/blog.svg"
          title="AI Blog Generator"
          subtitle="Create and publish using AI"
          description="Stop staring at a blank screen. Our AI Blog Generator turns your ideas into engaging posts."
          buttonText="Visit AI Blog"
          onButtonClick={() => console.log("Clicked!")}
          className="max-w-[420px]"
        />
      </div>
    </div>
  );
}
