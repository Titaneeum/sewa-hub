"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import useMediaQuery from "../hooks/use-media-query";

type DialogContent = {
  title: string;
  description?: string;
  content: ReactNode;
  onClose?: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
};

interface UIContextType {
  isOpen: boolean;
  openDialog: (content: DialogContent) => void;
  closeDialog: () => void;
  dialogContent: DialogContent | null;
  isDesktop: boolean;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<DialogContent | null>(
    null
  );

  const openDialog = (content: DialogContent) => {
    setDialogContent(content);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setTimeout(() => {
      setDialogContent(null);
    }, 3000);
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <UIContext.Provider
      value={{ isOpen, openDialog, closeDialog, dialogContent, isDesktop }}
    >
      {children}
    </UIContext.Provider>
  );
}
export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
}
