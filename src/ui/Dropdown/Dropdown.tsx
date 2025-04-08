import { DropdownProps } from "@/ui/Dropdown/Dropdown.types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/Dropdown/Dropdown.utils";
import { cn } from "@/utils/twMerge";
import { ChevronDownIcon } from "lucide-react";

export const Dropdown = ({
  placeholder = "choose",
  items,
  value,
  onChange,
  className,
}: DropdownProps) => {
  const selectedItem = items
    ? items?.find((item) => item?.id.toString() === value?.toString())
    : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "w-full flex items-center px-3 py-2 border justify-between border-slate-200 rounded-md cursor-pointer",
          value !== undefined && value !== null
            ? "text-black"
            : "text-slate-400",
          className
        )}
      >
        <p className="text-sm max-w-full truncate">
          {value !== undefined && value !== null
            ? selectedItem?.label
            : placeholder}
        </p>
        <ChevronDownIcon className="size-4 text-black" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown max-h-[30vh] z-[999999] overflow-y-auto">
        {items.map((item) => {
          return (
            <DropdownMenuItem
              key={item.id}
              onClick={() => onChange(item.id)}
              className="cursor-pointe"
            >
              <p className="text-black">{item.label}</p>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
