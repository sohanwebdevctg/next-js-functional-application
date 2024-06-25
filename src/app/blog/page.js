import React from 'react';
import BlogBanner from '../components/blog/BlogBanner';
import BlogGallery from '../components/blog/BlogGallery';

const BlogPage = () => {
  return (
    <div>
      {/* blog banner section start */}
      <BlogBanner></BlogBanner>
      {/* blog banner section end */}
      {/* blog gallery section start */}
      <BlogGallery></BlogGallery>
      {/* blog gallery section end */}
    </div>
  );
};

export default BlogPage;