
import Allblog from "@/components/allBlog/AllBlog";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const searchQuery = searchParams.search || '';

  return (
    <div >
      <Allblog page={page} searchQuery={searchQuery} />
    </div>
  );
};

export default BlogPage;
