import React from "react"

type FormProps = {
  children: React.ReactNode
  handleSubmit: (e: React.BaseSyntheticEvent<object, any, any>) => Promise<void>
}

const Form: React.FC<FormProps> = ({ children, handleSubmit }) => {
  return (
    <form
      className='flex flex-col items-center justify-center'
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}

export default Form
