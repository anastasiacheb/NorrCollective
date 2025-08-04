interface ButtonProps {
  text: string;
  onClick?: () => void;
  submit?: boolean;
}

export default function Button({ text, onClick, submit }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
      className="bg-base-900 text-base-0 hover:bg-base-700 transition-all ease-linear uppercase text-sm leading-none font-medium border border-base-900 md:text-base h-12 md:h-14 flex items-center justify-center hover:border-base-700 flex-none">
      {text}
    </button>
  );
}
