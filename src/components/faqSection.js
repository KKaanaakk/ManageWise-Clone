import SingleFaq from "./SingleFaq";
const Faqs = () => {
  return (
    <section id="faq">
      <div className="max-w-7xl mx-auto p-10">
        <p className="px-4 bg-white rounded-lg inline-block text-[#8247ff] text-xs font-bold shadow mb-4">
          🙋‍♀️ FAQ
        </p>
        <h2 className="mb-4 text-4xl md:text-5xl font-semibold">
          Need <br />
          <span className="text-[#fe8162]">Answers ?</span>
        </h2>
        <p className="max-w-xl font-medium text-gray-500">
          Check out our most commonly asked questions below to find the
          information you need.
        </p>
        <div className="w-full p-4 space-y-4">
          <SingleFaq
            question={"What is Manage Wise and what does it offer?"}
            answer={`Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive
          success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.`}
          />
          <SingleFaq
            question={"Is Manage Wise suitable for small businesses and larger enterprises alike?"}
            answer={`Yes, Manage Wise is designed to cater to the needs of both small businesses and
          larger enterprises. Its scalable features and customizable options make it versatile
          for various business sizes.`}
          />
          <SingleFaq
            question={"Can I access Manage Wise from different devices and platforms?"}
            answer={`Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use
          the platform seamlessly on desktops, web browsers, and mobile devices.`}
          />
          <SingleFaq
            question={"What kind of support options do you offer to users? "}
            answer={`We provide responsive customer support via chat and email to assist you with any
          inquiries, issues, or guidance you may need while using Manage Wise.`}
          />
          <SingleFaq
            question={"How secure is the data stored within Manage Wise? "}
            answer={`Your data's security is a top priority. Manage Wise employs robust data encryption
          and follows industry best practices to ensure your sensitive information is safe and
          protected.`}
          />
        </div>
      </div>
    </section>

  );
};

export default Faqs;