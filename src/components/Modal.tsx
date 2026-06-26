type Props = {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ title = "", open, onClose, children }: Props) {
  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="p-5 relative w-full max-w-md rounded-2xl bg-white shadow-2xl">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <div>{children}</div>
      </div>
    </div>
  );
}
