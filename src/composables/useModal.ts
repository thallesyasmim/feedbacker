import { Callback } from '@/types'
import { Emitter } from '@/utils/helpers/emitter'

interface UseModalDTO {
  open: (payload: any) => void
  close: (payload: any) => void
  listen: (callback: Callback) => void
  off: (callback: Callback) => void
}

export function useModal (emitter: Emitter): UseModalDTO {
  const EVENT_NAME = 'modal:toggle'

  function open (payload = {}) {
    emitter.emit(EVENT_NAME, { status: true, ...payload })
  }

  function close (payload = {}) {
    emitter.emit(EVENT_NAME, { status: false, ...payload })
  }

  function listen (callback: Callback) {
    emitter.on(EVENT_NAME, callback)
  }

  function off (callback: Callback) {
    emitter.off(EVENT_NAME, callback)
  }

  return {
    open,
    close,
    listen,
    off
  }
}
