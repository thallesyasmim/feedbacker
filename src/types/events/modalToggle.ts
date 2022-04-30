import { Component } from 'vue'

export const MODAL_TOGGLE_EVENT_NAME = 'modal:toggle'

export type ModalTogglePayload = {
  status: boolean
  component?: Component
  props?: any
  width?: string
}
