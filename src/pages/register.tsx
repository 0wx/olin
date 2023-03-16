import { RegisterForm } from '../components/molecules/RegisterForm'
import { Stepper } from '../components/molecules/Stepper'
import { RegisterBackground } from '../components/organisms/RegisterBackground'

export default function Register() {
  return (
    <div className='flex'>
      <RegisterBackground />
      <Stepper />
      <RegisterForm />
    </div>
  )
}
