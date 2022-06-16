export const MODAL_TOGGLE_EVENT_NAME = 'modal:toggle'

export type ModalTogglePayload = {
  status: boolean
  component?: string
  props?: any
  width?: string
}
