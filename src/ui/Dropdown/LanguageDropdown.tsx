"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/Dropdown/Dropdown.utils";
import { ChevronDown } from "lucide-react";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";

const items = [
  {
    id: "ru",
    label: "Ru",
  },
  {
    id: "en",
    label: "En",
  },
];

export const LanguageDropdown = () => {
  const { handleChangeLanguage, selectedValue } = useChangeLanguage();
  const active = items.find((item) => item.id === selectedValue);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-3 h-10 bg-white py-2 rounded-[8px] border border-[#D1D5DB] flex items-center gap-2">
        <p>{active?.label}</p>
        <ChevronDown className="size-5 text-[#666E7A]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown">
        {items.map((item) => {
          return (
            <DropdownMenuItem
              key={item.id}
              onClick={() => {
                handleChangeLanguage(item.id);
              }}
              className="cursor-pointer"
            >
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
