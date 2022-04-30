import { TinyEmitter } from 'tiny-emitter'
import { Callback } from '@/types'

export class Emitter {
  private emitter: TinyEmitter

  constructor (emitter: TinyEmitter) {
    this.emitter = emitter
  }

  on (event: string, callback: Callback, ctx?: any) {
    this.emitter.on(event, callback, ctx)
  }

  once (event: string, callback: Callback, ctx?: any) {
    this.emitter.once(event, callback, ctx)
  }

  emit (event: string, ...args: any[]) {
    this.emitter.emit(event, args)
  }

  off (event: string, callback: Callback) {
    this.emitter.off(event, callback)
  }
}

export class EmitterSingleton {
  private emitter?: Emitter

  getInstance () {
    if (!this.emitter) {
      this.emitter = new Emitter(new TinyEmitter())
    }

    return this.emitter
  }
}
