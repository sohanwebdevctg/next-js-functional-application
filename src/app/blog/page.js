import BlogBanner from "@/components/blog/BlogBanner";
import BlogGallery from "@/components/blog/BlogGallery";
import RecentPost from "@/components/blog/RecentPost";

export const metadata = {
  title: "Urnitur | Blog",
  description: "This is blog page",
};

const BlogPage = () => {
  return (
    <div>
      {/* blog banner section start */}
      <BlogBanner></BlogBanner>
      {/* blog banner section end */}
      {/* blog gallery section start */}
      <BlogGallery></BlogGallery>
      {/* blog gallery section end */}
      {/* recent post section start */}
      <RecentPost></RecentPost>
      {/* recent post section end */}
    </div>
  );
};

export default BlogPage;