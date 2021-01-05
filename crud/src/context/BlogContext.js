import React, { useState } from "react";

// Create the Context Object
const BlogContext = React.createContext();

// Make it available everywhere by wrapping a component with this BlogProvider Component
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Article ${blogPosts.length}` }]);
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
