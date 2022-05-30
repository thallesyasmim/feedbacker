import PicoEmitter from 'pico-emitter'
import { Callback } from '@/types'

export class Emitter {
  private emitter: PicoEmitter

  constructor(emitter: PicoEmitter) {
    this.emitter = emitter
  }

  on(event: string, callback: Callback, ctx?: any) {
    this.emitter.on(event, callback, ctx)
  }

  once(event: string, callback: Callback) {
    this.emitter.once(event, callback)
  }

  emit(event: string, ...args: any[]) {
    this.emitter.emit(event, args)
  }

  off(event: string, callback: Callback) {
    this.emitter.off(event, callback)
  }
}
