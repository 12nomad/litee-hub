"use client";

import { KeyboardEvent } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useRouter, usePathname } from "next/navigation";
import { Controller } from "react-hook-form";

import { TitleValidationSchema } from "./schema/question.schema";
import Input from "./components/Input";
import CustomButton from "../custom-button/CustomButton";
import Tag from "../tag/Tag";
import useQuestionForm from "./hooks/useQuestionForm";
import { createQuestion } from "../../lib/actions/question.action";

interface IQuestionForm {
  userId: string;
}

const QuestionForm = ({ userId }: IQuestionForm) => {
  const hook = useQuestionForm();
  const router = useRouter();
  const pathname = usePathname();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, name: string) => {
    if (e.key === "Enter" && name === "tags") {
      e.preventDefault();

      const target = e.target as HTMLInputElement;
      const value = target.value.trim();
      if (value !== "") {
        if (value.length < 2)
          return hook.setError("tags", {
            message: "tag is too short",
            type: "min",
          });

        if (value.length > 18)
          return hook.setError("tags", {
            message: "tag is too long",
            type: "max",
          });

        if (hook.currentTags.length > 5) {
          hook.setError("tags", { message: "6 tags max.", type: "max" });
          return (target.value = "");
        }

        if (!hook.currentTags.includes(value)) {
          hook.setCurrentTags((prev) => [...prev, value]);
          hook.clearErrors("tags");
          target.value = "";
        }
      } else {
        hook.trigger();
      }
    }
  };

  const handleTagRemove = (content: string) =>
    hook.setCurrentTags((prev) => prev.filter((tag) => tag !== content));

  const onSubmit = async ({ title, question }: TitleValidationSchema) => {
    if (!(hook.currentTags.length > 0))
      return hook.setError("tags", { message: "please provide a tag" });

    try {
      hook.setIsLoading(true);
      await createQuestion({
        title: title.trim(),
        content: question.trim(),
        tags: hook.currentTags,
        author: userId,
        path: pathname,
      });
      router.push("/");
    } catch (error) {
      hook.setIsLoading(false);
    }
  };

  return (
    <form onSubmit={hook.handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Title"
        name="title"
        register={hook.register}
        errors={hook.errors}
      />

      <div>
        <p className="block mb-2 text-sm text-white-powder">
          Your question <sup className="text-red-engine">*</sup>
        </p>

        <Controller
          name="question"
          control={hook.control}
          render={({ field: { onChange, ...rest } }) => (
            <Editor
              {...rest}
              onEditorChange={onChange}
              id="LITEE_HUB_FIXED_ID"
              apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
              onInit={(evt, editor) => (hook.editorRef.current = editor)}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style: "body { font-family:Inter; font-size:14px }",
              }}
            />
          )}
        />
        {hook.errors.question && (
          <p role="alert" className="text-xs text-red-engine mt-2">
            {hook.errors.question.message}
          </p>
        )}
      </div>

      <div>
        <Input
          label="Tags (6 max.)"
          name="tags"
          register={hook.register}
          errors={hook.errors}
          handleKeyDown={handleKeyDown}
        />
        <ul className="flex items-center gap-2 mt-2 flex-wrap">
          {hook.currentTags.map((tag) => (
            <li key={tag}>
              <Tag
                content={tag}
                bgColor="bg-black-raisin"
                handleClose={handleTagRemove}
                withIcon
              />
            </li>
          ))}
        </ul>
      </div>

      <CustomButton title="Submit" type="submit" />
    </form>
  );
};

export default QuestionForm;
