import type { Dispatch, SetStateAction } from 'react'

export interface UseBoolCallbacks {
  onTurnedOn?: () => void
  onTurnedOff?: () => void
}

export interface UseBoolHandlers {
  toggle: () => void
  off: () => void
  on: () => void
  set: Dispatch<SetStateAction<boolean>>
}

export type UseBoolState = [boolean, UseBoolHandlers]
