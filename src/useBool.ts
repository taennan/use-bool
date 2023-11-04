import type { UseBoolCallbacks, UseBoolState } from './types'
import { useState, useCallback } from 'react'

export function useBool(initialState = false, callbacks?: UseBoolCallbacks): UseBoolState {
  const { onTurnedOn, onTurnedOff } = callbacks || {}
  const [state, setState] = useState(initialState)

  const on = useCallback(() => {
    setState((isOpened) => {
      if (!isOpened) {
        onTurnedOn?.()
        return true
      }
      return isOpened
    })
  }, [onTurnedOn])

  const off = useCallback(() => {
    setState((isOpened) => {
      if (isOpened) {
        onTurnedOff?.()
        return false
      }
      return isOpened
    })
  }, [onTurnedOff])

  const toggle = useCallback(() => {
    state ? off() : on()
  }, [on, off, state])

  return [state, { on, off, toggle, set: setState }]
}
