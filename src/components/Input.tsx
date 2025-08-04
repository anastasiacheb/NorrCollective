interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

export default function Input({ type, name, placeholder, required }: InputProps) {
  return (
    <input
      required={required}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="text-base-900 placeholder:text-base-500 text-sm font-medium px-4 border border-base-300 hover:border-base-500 focus:placeholder:text-base-300 focus:border-base-500 outline-none transition-all ease-linear h-12 md:h-14 flex items-center bg-base-0"
    />
  );
}
