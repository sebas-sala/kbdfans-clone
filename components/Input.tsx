"use client"

type Props = {
  text: string
  type: string
  placeholder: string
  for: string
}

const Input = ({ text, type, placeholder }: Props) => {
  return (
    <input type={type} placeholder={placeholder} value={text}>
      {text}
    </input>
  )
}

export default Input
