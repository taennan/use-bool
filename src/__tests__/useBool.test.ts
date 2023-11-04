import { renderHook, act } from '@testing-library/react-hooks'
import { useBool } from "../useBool"

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
})
