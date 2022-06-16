import PicoEmitter from 'pico-emitter'
import { Emitter } from '@/utils/helpers/emitter'

const picoEmitter = new PicoEmitter()

export const makeEmitter = (() => {
  let emitter: Emitter

  return () => {
    if (!emitter) {
      emitter = new Emitter(picoEmitter)
    }

    return emitter
  }
})()
