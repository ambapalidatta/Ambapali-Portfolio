export default function Badge({ children }) {
  return (
    <span className="rounded-full border px-3 py-1 text-xs font-medium opacity-90">
      {children}
    </span>
  );
}
