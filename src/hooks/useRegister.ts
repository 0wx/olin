import { atom, useAtom } from 'jotai'

const stepAtom = atom(1)

export const useRegister = () => {
  const [step, setStep] = useAtom(stepAtom)

  const nextStep = () => {
    setStep(Math.min(step + 1, 2))
  }

  const prevStep = () => {
    setStep(Math.max(step - 1, 1))
  }

  return {
    step,
    nextStep,
    prevStep,
  }
}
