export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        border: "1px solid blue",
      }}
    >
      {children} (button from @org/ui)
    </button>
  );
}
