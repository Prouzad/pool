export type DropdownMenuItemProps = {
  label: string;
  id: string | number;
};

export type DropdownProps = {
  items: DropdownMenuItemProps[] | [];
  value?: string | null;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
};
