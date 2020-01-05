import React, { useEffect, useCallback, useRef } from 'react'
import { ClockStatus, ScoreboardState } from '../reducer'
import { useSelector, useDispatch } from 'react-redux'
import {
  setMainClockTime,
  setShowBreakClockTenths,
  setBreakClockTime,
} from '../actions'

interface BreakClockProps {
  onClick: (event: any) => void
}

function BreakClock(props: BreakClockProps) {
  const dispatch = useDispatch()

  const hours = useSelector((state: ScoreboardState) => state.breakClockHours)
  const minutes = useSelector(
    (state: ScoreboardState) => state.breakClockMinutes
  )
  const seconds = useSelector(
    (state: ScoreboardState) => state.breakClockSeconds
  )
  const tenths = useSelector((state: ScoreboardState) => state.breakClockTenths)
  const showTenths = useSelector(
    (state: ScoreboardState) => state.breakClockShowTenths
  )
  const breakClockStatus = useSelector(
    (state: ScoreboardState) => state.breakClockStatus
  )

  const timerRef = useRef<NodeJS.Timeout>()

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }, [])

  const resetClock = useCallback(() => {
    clearTimer()

    dispatch(setBreakClockTime(0, 0, 30))
  }, [clearTimer, dispatch])

  const tick = useCallback(() => {
    let newHours = hours
    let newMinutes = minutes
    let newSeconds = seconds
    let newTenths = tenths

    newTenths--
    if (newTenths < 0) {
      newTenths = 9
      newSeconds--
      if (newSeconds < 0) {
        newSeconds = 59
        newMinutes--
        if (newMinutes < 0) {
          newHours--
          newMinutes = 59
          if (newHours < 0) {
            newHours = 0
            newMinutes = 0
            newSeconds = 0
            newTenths = 0
          }
        }
      }
    }

    if (isTimerDone(newHours, newMinutes, newSeconds, newTenths)) {
      clearTimer()
    } else {
      dispatch(setMainClockTime(newHours, newMinutes, newSeconds, newTenths))
    }
  }, [clearTimer, dispatch, hours, minutes, seconds, tenths])

  const startClock = useCallback(() => {
    clearTimer()

    timerRef.current = setInterval(tick, 100)
  }, [clearTimer, tick])

  const stopTimer = useCallback(() => {
    clearTimer()
    resetClock()
  }, [clearTimer, resetClock])

  const isTimerDone = (
    hours: number,
    minutes: number,
    seconds: number,
    tenths: number
  ) => {
    if (hours <= 0 && minutes <= 0 && seconds <= 0 && tenths <= 0) {
      return true
    }
    return false
  }

  const clockText = () => {
    const parts = []
    if (hours > 0) {
      parts.push(padZeroes(hours))
    }

    parts.push(padZeroes(seconds))

    const str = parts.join(':')

    return showTenths ? `${str}.${tenths}` : str
  }

  const padZeroes = (s: number) => (s < 10 ? '0' : '') + s.toString()

  useEffect(() => {
    switch (breakClockStatus) {
      case ClockStatus.RUNNING:
        startClock()
        break
      case ClockStatus.STOPPED:
        stopTimer()
        break
      case ClockStatus.READY:
        resetClock()
        break
    }
  }, [breakClockStatus, resetClock, startClock, stopTimer])

  return (
    <div
      className={`clock break-clock ${breakClockStatus ===
        ClockStatus.RUNNING && 'running'}`}
      onClick={props.onClick}
      onContextMenu={() => dispatch(setShowBreakClockTenths(!showTenths))}
    >
      {clockText()}
    </div>
  )
}

export default React.memo(BreakClock)
