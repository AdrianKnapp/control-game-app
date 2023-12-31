import { forwardRef } from 'react'
import { InputProps } from './types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div data-cid="input" className="flex w-full flex-col items-start gap-1">
        {label ? (
          <label htmlFor={id} className="text-sm text-slate-600">
            {label}
          </label>
        ) : null}
        <input
          id={id}
          ref={ref}
          className="w-full rounded border border-slate-300 bg-white p-3 placeholder-slate-400 outline-none duration-default focus:border-teal-400 focus:ring-2 focus:ring-teal-400"
          type="text"
          {...props}
        />
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
      </div>
    )
  }
)

Input.displayName = 'Input'
