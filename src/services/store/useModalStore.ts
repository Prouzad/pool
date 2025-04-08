/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export enum ModalNames {
  TRADING_CREATE = "TRADING_CREATE",
}

type ModalStore = {
  openModal: ModalNames | null;
  modalData: any;
  setModal: (modal: ModalNames, data?: any) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  openModal: null,
  modalData: null,
  setModal: (modal, data) => set({ openModal: modal, modalData: data }),
  closeModal: () => set({ openModal: null, modalData: null }),
}));
