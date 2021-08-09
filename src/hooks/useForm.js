import { useState, useCallback } from "react";

export function useForm() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  function handleChange(e) {
    const input = e.target
    const value = input.value
    const id = input.id
    setValues({ ...values, [id]: value })
    setErrors({ ...errors, [id]: input.validationMessage })
    setIsValid(input.closest("form").checkValidity())
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return { values, errors, isValid, handleChange, resetForm }
}