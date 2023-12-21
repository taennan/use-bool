import { renderHook, act } from '@testing-library/react'
import { useBool } from '../useBool'

describe('useBool', () => {
  it('is defined', () => {
    expect(useBool).toBeDefined()
  })

  it('has a default value of false', () => {
    const { result } = renderHook(() => useBool())
    expect(result.current[0]).toBe(false)
  })

  it('has an initial state of true when initial value is true', () => {
    const { result } = renderHook(() => useBool(true))
    expect(result.current[0]).toBe(true)
  })

  it('sets state to true when on handler is called', () => {
    const { result } = renderHook(() => useBool())

    act(() => result.current[1].on())
    expect(result.current[0]).toBe(true)

    act(() => result.current[1].on())
    expect(result.current[0]).toBe(true)
  })

  it('sets state to false when off handler is called', () => {
    const { result } = renderHook(() => useBool(true))

    act(() => result.current[1].off())
    expect(result.current[0]).toBe(false)

    act(() => result.current[1].off())
    expect(result.current[0]).toBe(false)
  })

  it('sets state to opposite value when toggle handler is called', () => {
    const { result } = renderHook(() => useBool())

    act(() => result.current[1].toggle())
    expect(result.current[0]).toBe(true)

    act(() => result.current[1].toggle())
    expect(result.current[0]).toBe(false)
  })

  it('sets state correctly when set handler is called', () => {
    const { result } = renderHook(() => useBool(true))

    act(() => result.current[1].set(false))
    expect(result.current[0]).toBe(false)

    act(() => result.current[1].set(true))
    expect(result.current[0]).toBe(true)
  })

  it('runs onTurnedOn when on handler is called', () => {
    const onTurnedOn = jest.fn()
    const { result } = renderHook(() => useBool(false, { onTurnedOn }))

    act(() => result.current[1].on())
    expect(onTurnedOn).toBeCalledTimes(1)

    act(() => result.current[1].on())
    expect(onTurnedOn).toBeCalledTimes(1)
  })

  it('runs onTurnedOff when off handler is called', () => {
    const onTurnedOff = jest.fn()
    const { result } = renderHook(() => useBool(true, { onTurnedOff }))

    act(() => result.current[1].off())
    expect(onTurnedOff).toBeCalledTimes(1)

    act(() => result.current[1].off())
    expect(onTurnedOff).toBeCalledTimes(1)
  })

  it('run callbacks when toggle handler is called', () => {
    const onTurnedOn = jest.fn()
    const onTurnedOff = jest.fn()
    const { result } = renderHook(() => useBool(false, { onTurnedOn, onTurnedOff }))

    act(() => result.current[1].toggle())
    expect(onTurnedOn).toBeCalledTimes(1)
    expect(onTurnedOff).toBeCalledTimes(0)

    act(() => result.current[1].toggle())
    expect(onTurnedOn).toBeCalledTimes(1)
    expect(onTurnedOff).toBeCalledTimes(1)
  })

  it('run callbacks when set handler is called', () => {
    const onTurnedOn = jest.fn()
    const onTurnedOff = jest.fn()
    const { result } = renderHook(() => useBool(true, { onTurnedOn, onTurnedOff }))

    act(() => result.current[1].set(false))
    expect(onTurnedOn).toBeCalledTimes(0)
    expect(onTurnedOff).toBeCalledTimes(1)

    act(() => result.current[1].set(true))
    expect(onTurnedOn).toBeCalledTimes(1)
    expect(onTurnedOff).toBeCalledTimes(1)
  })
})
