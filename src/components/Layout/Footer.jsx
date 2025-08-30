export default function Footer() {
  return (
    <footer className="border-t py-10 text-center text-sm opacity-70">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p>
          Copyright © {new Date().getFullYear()} Ambapali Datta. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
