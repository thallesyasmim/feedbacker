export enum FeedbackType {
  ISSUE = 'ISSUE',
  IDEA = 'IDEA',
  OTHER = 'OTHER',
}

export interface Feedback {
  id: string
  text: string
  fingerprint: string
  apiKey: string
  type: FeedbackType
  device: string
  page: string
  createdAt: number
}
