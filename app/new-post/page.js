'use client'  
import { createPost } from "@/actions/new-post";  
import FormSubmit from "@/components/form-submit";  
import { useFormState } from "react-dom";  

export default function NewPostPage() {  
  const [state, formAction] = useFormState(createPost, { message: undefined });  

  return (  
    <>  
      <h1>Create a new post</h1>  
      <form action={formAction}>  
        <p className="form-control">  
          <label htmlFor="title">Title</label>  
          {state.message && <p>{state.message}</p>}  
          <input type="text" id="title" name="title" />  
        </p>  
        <p className="form-control">  
          <label htmlFor="image">Image URL</label>  
          {state.message && <p>{state.message}</p>}  
          <input  
            type="file"  
            accept="image/png, image/jpeg"  
            id="image"  
            name="image"  
          />  
        </p>  
        <p className="form-control">  
          <label htmlFor="content">Content</label>  
          {state.message && <p>{state.message}</p>}  
          <textarea id="content" name="content" rows="5" />  
        </p>  
        <p className="form-actions">  
          <FormSubmit />  
        </p>  
        {state.message && <p className="error-message">{state.message}</p>}  
      </form>  
    </>  
  );  
}  