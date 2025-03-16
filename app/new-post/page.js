import { createPost } from '@/actions/posts';
import PostForm from '@/components/post-form';
export const metadata={
  title:`Add a post`,
  description:`Add a post to be shown on the feed page!`
}
export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
