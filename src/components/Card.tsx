type Props = Partial<{
  title: string;
  body: string;
  actions: React.ReactNode;
  className: string;
}>;

export function Card({ title, body, actions, className = "" }: Props) {
  return (
    <div
      className={`w-full max-w-md rounded-md border-l-6 border-l-blue-600 bg-gray-100 p-5 shadow-sm space-y-1 ${className}`}
    >
      {title && <h5>{title}</h5>}
      <span className="text-gray-800">{body}</span>
      {actions}
    </div>
  );
}
