export default function Button({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="bg-base-900 text-base-0 hover:bg-base-700 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center hover:border-base-700">
      {text}
    </button>
  );
}
