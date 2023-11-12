export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  error?: string
}