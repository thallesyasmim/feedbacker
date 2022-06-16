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
    color: {
      text: 'text-brand-info',
      bg: 'bg-brand-info',
    },
  },
  issue: {
    label: 'Problemas',
    color: {
      text: 'text-brand-danger',
      bg: 'bg-brand-danger',
    },
  },
  idea: {
    label: 'Ideias',
    color: {
      text: 'text-brand-warning',
      bg: 'bg-brand-warning',
    },
  },
  other: {
    label: 'Outros',
    color: {
      text: 'text-brand-graydark',
      bg: 'bg-brand-graydark',
    },
  },
}
