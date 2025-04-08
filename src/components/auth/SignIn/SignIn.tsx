import { ConfirmOtp } from "@/components/auth/SignIn/ConfirmOtp";
import { SignInComponent } from "@/components/auth/SignIn/SignIn.utils";
import { useRouter } from "@/i18n/routing";
import {
  signInSchema,
  SignInSchemaType,
} from "@/utils/validation-schema/authValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const SignIn = () => {
  const t = useTranslations("auth");
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [authType, setAuthType] = useState<"signIn" | "confirm">("signIn");
  const form = useForm<SignInSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const mutation = useMutation({
    mutationKey: ["signIn"],
    mutationFn: async (data: SignInSchemaType) => {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (!res?.error) {
        toast.success(t("sign_in_success"));
        router.push("/account");
      } else {
        toast.error(t("login_or_password_incorrect"));
      }
      return res;
    },
  });

  const handleSubmit = form.handleSubmit(
    async (data) => {
      mutation.mutate(data);
    },
    () => {
      console.log("Form submission failed");
    }
  );
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
        {authType === "signIn" ? <SignInComponent /> : <ConfirmOtp />}
      </form>
    </FormProvider>
  );
};
