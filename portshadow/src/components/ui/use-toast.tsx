// components/ui/use-toast.ts

import { createContext, useContext, useState, ReactNode } from "react";

type ToastVariant = "default" | "success" | "destructive";

interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number; // in ms
}

interface Toast extends ToastOptions {
  id: string;
}

interface ToastContextType {
  toast: (options: ToastOptions) => void;
  toasts: Toast[];
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { ...options, id };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, options.duration || 3000);
  };

  return (
    <ToastContext.Provider value={{ toast, toasts }}>
      {children}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`px-4 py-2 rounded shadow text-white ${
              t.variant === "success"
                ? "bg-green-500"
                : t.variant === "destructive"
                ? "bg-red-500"
                : "bg-gray-800"
            }`}
          >
            <strong>{t.title}</strong>
            {t.description && <div className="text-sm">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
