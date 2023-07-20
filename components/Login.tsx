import Dialog from "./Dialog"
import LoginForm from "./LoginForm"

const Login = () => {
  const Trigger = () => {
    return (
      <button className='cursor-pointer transition duration-300 hover:text-gray-400'>
        Login
      </button>
    )
  }

  return (
    <Dialog title='Login' trigger={<Trigger />}>
      <LoginForm />
    </Dialog>
  )
}

export default Login
