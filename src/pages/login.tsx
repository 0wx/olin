import { LoginForm } from '../components/molecules/LoginForm'
import { LoginHeader } from '../components/molecules/LoginHeader'
import { LoginNavbar } from '../components/molecules/LoginNavbar'
import { LoginBackground } from '../components/organisms/LoginBackground'

export default function Login() {
  return (
    <div className='min-h-screen border flex flex-col'>
      <LoginNavbar />
      <LoginHeader />
      <LoginForm />
      <LoginBackground />
    </div>
  )
}
