'use client";';
import { SignUpComponent } from "@/components/auth/SignUp/SignUp.utils";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import {
  signUpSchema,
  SignUpSchemaType,
} from "@/utils/validation-schema/authValidationSchema";
import { signUp } from "@/services/auth";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export const SignUp = () => {
  const t = useTranslations("auth");
  const lang = useLocale();
  const router = useRouter();

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const mutation = useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (data: SignUpSchemaType) => {
      const res = await signUp({
        email: data.email,
        password: data.password,
        lang,
      });
      return res;
    },
    onSuccess: () => {
      toast(t("sign_up_success"), {
        iconTheme: {
          primary: "#4caf50",
          secondary: "#fff",
        },
        duration: 3000,
        position: "top-right",
        icon: "✅",
      });
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
      toast(t("sign_up_error"), {
        iconTheme: {
          primary: "#f44336",
          secondary: "#fff",
        },
        duration: 3000,
        position: "top-right",
        icon: "❌",
      });
    },
  });

  const handleSubmit = form.handleSubmit(
    (data) => {
      mutation.mutate(data);
    },
    (errors) => {
      console.log("Form errors:", errors);
      // Handle form error logic here
    }
  );

  return (
    <FormProvider {...form}>
      <form className="" onSubmit={handleSubmit}>
        <Toaster />
        <SignUpComponent />
      </form>
    </FormProvider>
  );
};
