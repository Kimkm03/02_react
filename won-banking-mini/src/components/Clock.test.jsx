import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import Clock from './Clock'

afterEach(() => {
  cleanup()
  vi.useRealTimers()
})

describe('Clock', () => {
  it('현재 시간을 표시한다', () => {
    // Given: 시스템 시간을 특정 시간으로 고정
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-09-10T12:34:56'))

    // When: Clock 컴포넌트를 렌더링
    render(<Clock />)

    // Then: 현재 시간이 화면에 표시된다
    expect(screen.getByText(/12:34:56/)).toBeInTheDocument()

    // Then: muted 클래스가 적용된다
    expect(screen.getByText(/12:34:56/)).toHaveClass('muted')
  })

  it('1초마다 시간이 갱신된다', () => {
    // Given: 시작 시간을 특정 시간으로 고정
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-09-10T12:34:56'))

    // When: Clock 컴포넌트를 렌더링
    render(<Clock />)

    // Then: 초기 시간이 표시된다
    expect(screen.getByText(/12:34:56/)).toBeInTheDocument()

    // When: 가상 시간을 1초 진행
    act(() => {
      vi.advanceTimersByTime(1000)
    })

    // Then: 1초 뒤 시간이 표시된다
    expect(screen.getByText(/12:34:57/)).toBeInTheDocument()
  })

  it('컴포넌트가 제거되면 타이머를 정리한다', () => {
    // Given: setInterval을 감시하면서 Clock을 렌더링
    vi.useFakeTimers()
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<Clock />)

    // When: Clock 컴포넌트를 제거
    unmount()

    // Then: 타이머 정리 함수가 호출된다
    expect(clearIntervalSpy).toHaveBeenCalled()

    clearIntervalSpy.mockRestore()
  })
})