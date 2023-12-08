import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";

import {
  TitleValidationSchema,
  titleValidationSchema,
} from "../schema/question.schema";

const useQuestionForm = () => {
  const [currentTags, setCurrentTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const editorRef = useRef<any>(null);
  const initialRender = useRef<number>(0);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    trigger,
    clearErrors,
  } = useForm<TitleValidationSchema>({
    resolver: zodResolver(titleValidationSchema),
    defaultValues: {
      title: "",
      question: "",
      tags: "",
    },
  });

  useLayoutEffect(() => {
    if (initialRender.current > 0) {
      if (!(currentTags.length > 0))
        return setError("tags", { message: "please provide a tag" });
    }
    initialRender.current++;
  }, [isSubmitting]);

  return {
    currentTags,
    setCurrentTags,
    editorRef,
    register,
    handleSubmit,
    setError,
    trigger,
    clearErrors,
    errors,
    control,
    isLoading,
    setIsLoading,
  };
};

export default useQuestionForm;
