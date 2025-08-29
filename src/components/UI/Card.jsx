export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white/70 dark:bg-zinc-900/60 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
