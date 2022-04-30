import { Callback } from '@/types'
import { ModalTogglePayload, MODAL_TOGGLE_EVENT_NAME } from '@/types/events'
import { Emitter } from '@/utils/helpers/emitter'

interface UseModalDTO {
  open: (payload: any) => void
  close: (payload: any) => void
  listen: (callback: Callback) => void
  off: (callback: Callback) => void
}

export const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

export function useModal (emitter: Emitter): UseModalDTO {
  function open (payload: ModalTogglePayload) {
    emitter.emit(MODAL_TOGGLE_EVENT_NAME, { ...payload, status: true })
  }

  function close (payload: ModalTogglePayload) {
    emitter.emit(MODAL_TOGGLE_EVENT_NAME, { ...payload, status: false })
  }

  function listen (callback: Callback) {
    emitter.on(MODAL_TOGGLE_EVENT_NAME, callback)
  }

  function off (callback: Callback) {
    emitter.off(MODAL_TOGGLE_EVENT_NAME, callback)
  }

  return {
    open,
    close,
    listen,
    off
  }
}
