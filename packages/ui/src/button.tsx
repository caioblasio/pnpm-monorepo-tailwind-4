export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return <button {...props} />;
}
