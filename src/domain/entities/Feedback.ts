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

export const LABELS = {
  all: {
    label: 'Todos',
    text: 'text-brand-info',
    bg: 'bg-brand-info',
    amount: 0,
  },
  issue: {
    label: 'Problemas',
    text: 'text-brand-danger',
    bg: 'bg-brand-danger',
    amount: 0,
  },
  idea: {
    label: 'Ideias',
    text: 'text-brand-warning',
    bg: 'bg-brand-warning',
    amount: 0,
  },
  other: {
    label: 'Outros',
    text: 'text-brand-graydark',
    bg: 'bg-brand-graydark',
    amount: 0,
  },
}
