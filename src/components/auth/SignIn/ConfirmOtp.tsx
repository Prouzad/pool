"use client";
import { useState } from "react";
import OTPInput from "react-otp-input";

export const ConfirmOtp = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-[427px] rounded-[40px] bg-white border border-[#E4E4E7] px-[52px] pt-[54px] pb-[29px]">
      <p className="text-4xl font-medium w-full text-center flex items-center justify-center cursor-default">
        Введите код подтверждения
      </p>
      <p className="font-light text-[14px] text-[#313131] text-center mt-1">
        {"(Код подтверждения отправлен на почту)"}
      </p>
      <div className="">
        <OTPInput
          inputStyle={{
            width: "42px",
            height: "56px",
            border: "2px solid #E4E4E7",
            borderRadius: "20px",
            outline: "none",
          }}
          containerStyle={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "25px",
          }}
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div className="mt-[46px] flex flex-col items-center">
        <button className="w-[322px] h-[50px] rounded-[30px] bg-[#6233E0] cursor-pointer">
          <p className="text-white font-medium text-base">Войти</p>
        </button>

        <button className="text-[14px] text-[#6233E0] mt-[3px] h-[29px] cursor-pointer">
          Отправить повторно
        </button>
      </div>
    </div>
  );
};
