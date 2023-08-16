import { useEffect, useState } from "react";


export function useTypedText(text, speed, delayTime) {
  const [textState, setTextState] = useState("")
  const chars = text.split("")
  let interval = speed

  if (textState.length === 0 && delayTime)
    interval = speed + delayTime

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextState((prevText) => {
        if (prevText.length !== chars.length) {
          const newText = prevText.concat(chars[prevText.length])
          return newText
        }
        return prevText
      })
    }, interval)
    return () => clearTimeout(timer)
  })

  return textState
}