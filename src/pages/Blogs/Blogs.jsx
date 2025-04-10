import React, { useState, useEffect } from "react";
import blogs from "../Blogs/blogs.json";
import SearchBar from "../../components/SearchBar";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogCard from "../../components/BlogCard";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_BLUE = "#203e91";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const [data, setData] = useState(blogs);
  const [searchTerm, setSearchTerm] = useState("");

  const searchData = (pattern) => {
    setSearchTerm(pattern);
    if (!pattern) {
      setData(blogs);
    } else {
      const filteredBlogs = blogs.filter(
        (b) =>
          b.author.toLowerCase().includes(pattern.toLowerCase()) ||
          b.title.toLowerCase().includes(pattern.toLowerCase()) ||
          b.date.includes(pattern) ||
          b.desc.toLowerCase().includes(pattern.toLowerCase())
      );
      setData(filteredBlogs);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: SAE_BLUE }}
          >
            SAE NITK Blogs
          </h1>
          <div
            className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{
              background: `linear-gradient(90deg, ${SAE_BLUE}, ${SAE_RED})`,
            }}
          ></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, stories and technical knowledge from our members and
            alumni
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12" data-aos="fade-up">
          <SearchBar
            placeholder="Search blogs by title, author, content or date..."
            onChange={(e) => searchData(e.target.value)}
            value={searchTerm}
          />
        </div>

        {/* Blog Grid */}
        {data.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {data.map((item) => (
              <BlogCard {...item} key={item.title} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12" data-aos="fade-up">
            <h3 className="text-xl font-medium mb-2" style={{ color: SAE_RED }}>
              No matching blogs found
            </h3>
            <p className="text-gray-600">
              Try different search terms or check back later
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
