import React from "react";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "How to Build a RESTful API with Node.js and Express",
      description: "Step-by-step guide on implementing a RESTful API using Node.js and Express.",
    },
    {
      title: "Optimizing React Components for Better Performance",
      description: "Useful coding techniques to enhance the performance of your React applications.",
    },
    {
      title: "Building a Full-Stack MERN Application: From Concept to Deployment",
      description: "Detailed insights into the development process of a MERN application, including challenges faced.",
    },
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      description: "Discussion on emerging technologies and best practices in web development.",
    },
    {
      title: "How I Transitioned from Frontend to Full-Stack Development",
      description: "My personal journey as a developer, including lessons learned and goals achieved.",
    },
    {
      title: "Top 5 Tools for Deploying Full-Stack Applications",
      description: "Recommendations for valuable libraries and tools in full-stack development.",
    },
    {
      title: "Dear Client, No, I Can’t Make It Look Like Facebook",
      description: "A humorous open letter to clients that captures the unrealistic requests developers sometimes get.",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-customGreen text-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Blog</h2>
        <p className="text-lg text-white">
          Explore my insights and tutorials on various technologies and development practices.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {blogPosts.map((post, index) => (
          <div key={index} className="max-w-sm mx-4 my-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.description}</p>
            </div>
            <div className="p-4 border-t">
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
