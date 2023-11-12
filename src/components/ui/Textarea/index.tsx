import { TextareaProps } from './types'

export const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  error,
  cols = 30,
  rows = 5,
  ...props
}) => {
  return (
    <div data-cid="textarea" className="flex w-full flex-col items-start gap-1">
      {label ? (
        <label htmlFor={id} className="text-sm text-slate-600">
          {label}
        </label>
      ) : null}
      <textarea
        className="w-full rounded border border-slate-200 bg-white px-4 py-2 placeholder-slate-400 outline-none duration-default focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
        name="subject"
        id="subject"
        cols={cols}
        rows={rows}
        {...props}
      ></textarea>
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
    </div>
  )
}
