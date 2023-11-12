import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    "flex",
    "gap-2",
    "w-full",
    "items-center",
    "justify-center",
    "rounded-xl",
    "px-6",
    "py-3",
    "duration-default",
    "font-semibold",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-teal-700",
          "hover:bg-teal-600",
          'text-white',
        ],
        floating: [
          "bg-white",
          "text-base",
          "text-black-dark",
          "shadow-md",
          "shadow-gray-200",
          "hover:bg-black-dark",
          "hover:text-white"
      ],
      }
    },
    compoundVariants: [
      {
        variant: 'primary',
        className: []
      }
    ],
    defaultVariants: {
      variant: 'primary',
    }
  }
)
