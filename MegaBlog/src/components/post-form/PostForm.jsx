import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, RTE, Input, Select } from "../index";
import dbservice from "../../appwrite/crud_service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "", 
        content: post?.content || "",
        status: post?.status || "",
      },
    });

  const userData = useSelector((state) => state.user.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? dbservice.uploadFile(data.image[0]) : null;

      if (file) {
        dbservice.deleteFile(post.featuredImg);
      }

      const updatePost = await dbservice.updatePost(post.$id, {
        ...data,
        featuredImg: file ? file.$id : undefined,
      });

      if (updatePost) {
        navigate(`/post/${updatePost.$id}`);
      }
    } else {
      const file = await dbservice.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImg = fileId;
        const newPost = await dbservice.createPost({
          ...data,
          userId: userData.$id,
        });

        if (newPost) {
          navigate(`/post/${newPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d]/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={dbservice.previewFile(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;