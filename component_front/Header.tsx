const letters = [
  { char: "C", color: "bg-sky-400", rotate: "rotate-6" },
  { char: "S", color: "bg-sky-500", rotate: "-rotate-6" },
  { char: "I", color: "bg-blue-400", rotate: "rotate-6" },
  { char: "2", color: "bg-blue-500", rotate: "-rotate-6" },
  { char: "0", color: "bg-blue-600", rotate: "rotate-6" },
  { char: "5", color: "bg-indigo-500", rotate: "-rotate-6" },
];

export default function Header() {
  return (
    <div className="mt-4 text-center">
      <div className="flex justify-center gap-3">
        {letters.map((item) => (
          <span
            key={item.char}
            className={`flex h-14 w-12 items-center justify-center rounded-xl text-3xl font-bold text-white shadow-md transition hover:-translate-y-1 ${item.color} ${item.rotate}`}
          >
            {item.char}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium tracking-widest text-blue-600 ring-1 ring-blue-100">
        FRONT END SOFTWARE DEVELOPMENT
      </span>
    </div>
  );
}