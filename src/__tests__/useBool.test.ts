import { renderHook, act } from '@testing-library/react-hooks'
import { useBool } from '../useBool'

describe('useBool', () => {
  it('is defined', () => {
    expect(useBool).toBeDefined()
  })

  it('has a default value of false', () => {
    const { result } = renderHook(() => useBool())
    expect(result.current[0]).toEqual(false)
  })

  it('returns true when initial value is true', () => {
    const { result } = renderHook(() => useBool(true))
    expect(result.current[0]).toEqual(true)
  })

  it('turns on', () => {
    const { result } = renderHook(() => useBool())
    act(() => {
      result.current[1].on()
    })
    expect(result.current[0]).toEqual(true)
  })

  it('runs callbacks when value changes', () => {
    let turnedOnCount = 0
    let turnedOffCount = 0

    const { result } = renderHook(() =>
      useBool(false, {
        onTurnedOn: () => turnedOnCount++,
        onTurnedOff: () => turnedOffCount++,
      }),
    )

    act(() => { result.current[1].on() })
    expect(turnedOnCount).toEqual(1)

    act(() => { result.current[1].off() })
    expect(turnedOffCount).toEqual(1)

    act(() => { result.current[1].toggle() })
    expect(turnedOnCount).toEqual(2)

    act(() => { result.current[1].toggle() })
    expect(turnedOffCount).toEqual(2)

    act(() => { result.current[1].set(true) })
    expect(turnedOnCount).toEqual(3)

    act(() => { result.current[1].set(false) })
    expect(turnedOffCount).toEqual(3)
  })
})
