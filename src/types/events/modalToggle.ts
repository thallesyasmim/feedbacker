import { Component } from 'vue'

export type ModalTogglePayload = {
  status: boolean
  component?: Component
  props?: any
  width?: string
}
