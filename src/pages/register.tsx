import { RegisterForm } from '../components/organisms/RegisterForm'
import { Stepper } from '../components/molecules/Stepper'
import { RegisterBackground } from '../components/organisms/RegisterBackground'
import { RegisterHeader } from '../components/organisms/RegisterHeader'

export default function Register() {
  return (
    <div className='pt-10'>
      <RegisterHeader />
      <RegisterBackground />
      <div className='flex'>
        <Stepper />
        <RegisterForm />
      </div>
    </div>
  )
}
