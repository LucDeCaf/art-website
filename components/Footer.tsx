export default function Footer() {
  return (
    <footer className="h-16 bg-slate-900 flex items-center justify-between px-12">
      <h1 className="text-slate-500 font-bold text-2xl">
        &copy; Luc de Cafmeyer
      </h1>
      <h2 className="text-slate-500 font-bold text-1xl float-right">
        Contact me:{" "}
        <a className="font-semibold underline text-slate-400" href="mailto:ldecafmeyer@rallim.org.za">ldecafmeyer@rallim.org.za</a>
      </h2>
    </footer>
  );
}
