import type { UseBoolCallbacks, UseBoolHandlers, UseBoolState } from './types'
import { useState, useCallback } from 'react'

export function useBool(initialState = false, callbacks?: UseBoolCallbacks): UseBoolState {
  const { onTurnedOn, onTurnedOff } = callbacks || {}
  const [state, setState] = useState(initialState)

  const runCallback = useCallback(
    (bool: boolean) => {
      bool ? onTurnedOn?.() : onTurnedOff?.()
    },
    [onTurnedOn, onTurnedOff],
  )

  const set: UseBoolHandlers['set'] = useCallback(
    (args) => {
      setState((prev) => {
        const newValue = typeof args === 'function' ? args(prev) : args
        if (newValue !== prev) runCallback(newValue)
        return newValue
      })
    },
    [runCallback],
  )

  const on = useCallback(() => {
    set(true)
  }, [set])

  const off = useCallback(() => {
    set(false)
  }, [set])

  const toggle = useCallback(() => {
    state ? off() : on()
  }, [state, on, off])

  return [state, { on, off, toggle, set }]
}
