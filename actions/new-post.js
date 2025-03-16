"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  if (!title || !image || !content) {
    return {
      message: "content undefined",
    };
  }

  if (title.length <= 0 || content.length <= 0) {
    return {
      message: "Both title and content must be at least 1 character long.",
    };
  }
  let url;
  try {
    url = await uploadImage(image);
  } catch (error) {
    throw new Error("Image upload failed...");
  }
  await storePost({
    imageUrl: url,
    title,
    content,
    userId: 1,
  });
  revalidatePath('/feed','page')
  redirect("/feed");
}
export async function likePost(postId) {
   await updatePostLikeStatus(postId,2)
   revalidatePath('/feed')
}
