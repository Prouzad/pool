"use client";

import { createMyPool } from "@/services/pools";
import { ModalNames, useModalStore } from "@/services/store/useModalStore";
import { Modal } from "@/ui/Dialog/Dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { XIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { QRCodeSVG } from "qrcode.react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export const TradingModal = () => {
  const lang = useLocale();
  const { closeModal, modalData, openModal } = useModalStore();
  const isOpen = openModal === ModalNames.TRADING_CREATE;

  const form = useForm({
    resolver: zodResolver(
      z.object({
        amount: z.number().min(1).or(z.string().min(1)),
      })
    ),
  });

  const mutation = useMutation({
    mutationKey: ["createTrading"],
    mutationFn: async (data: { amount: number }) => {
      const body = {
        pool_id: modalData.id as number,
        amount: data.amount,
      };
      const res = await createMyPool({
        data: body,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNSwidHlwZSI6ImFjY2VzcyJ9.vrXu-v4oDI4G2qOosHLkJURCpSKbLOnmRk5ecKcGnHE",
        lang,
      });
      return res;
    },
    onSuccess: () => {
      closeModal();
      toast.success("operation_success");
    },
    onError: () => {
      toast.error("an_error_occurred");
    },
  });

  const handleSubmit = form.handleSubmit(
    (data) => {
      mutation.mutate({
        amount: +data.amount * 1000000,
      });
    },
    (err) => console.log(err)
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        closeModal();
        form.reset();
      }}
      classNames={{
        content: "w-[427px] px-[53px] px-[53px]",
      }}
    >
      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <p className="font-medium text-[20px]">
              Trading pool №{modalData?.id}
            </p>
            <button
              type="button"
              onClick={() => {
                closeModal();
                form.reset();
              }}
              className="cursor-pointer"
            >
              <XIcon width={30} height={30} className="-mt-2" />
            </button>
          </div>
          <div className="py-[35px] w-full flex items-center justify-center">
            <QRCodeSVG value="TsdsfhjSDDjsfgsjyasyjydyasfjxzYYDjsfjSJydjsjdfysjd (TRC 20 )" />
          </div>
          <div className="mb-7">
            <p className="text-sm font-normal text-[#313131] mb-7">
              TsdsfhjSDDjsfgsjyasyjydyasfjxzYYDjsfjSJydjsjdfysjd (TRC 20 )
            </p>
            <Controller
              name="amount"
              render={({ field, fieldState }) => (
                <div className="w-full flex flex-col gap-1">
                  <p className="font-light text-sm text-[#313131]">
                    Сумма вклада
                  </p>
                  <div className="w-full flex items-center gap-4 p-2.5 border-b border-[#E4E4E7]">
                    <input
                      type="number"
                      {...field}
                      className="w-full border-0 ring-0 outline-0"
                      placeholder={"0000"}
                    />
                  </div>
                  {fieldState.error && fieldState.error.message && (
                    <div className="text-red-500 text-xs mt-1">
                      {fieldState.error.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>
          <button
            type="submit"
            className="w-full h-[50px] rounded-[30px] bg-[#6233E0] cursor-pointer"
          >
            <p className="text-white font-medium text-base">Вложить</p>
          </button>
        </form>
      </FormProvider>
    </Modal>
  );
};
