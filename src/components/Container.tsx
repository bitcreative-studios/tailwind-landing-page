import clsx from 'clsx'

type ContainerProps = {
  /** Provide any additional Tailwind classes or custom ones */
  className?: string
  [key: string]: any
}
export const Container = ({ className, ...props }: ContainerProps) => (
  <div className={clsx('container mx-auto px-4 sm:px-6 lg:px-8', className)} {...props} />
)
