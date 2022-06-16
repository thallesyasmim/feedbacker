import { useFeedbacks as useFeedbacksComposable } from '@/composables/useFeedbacks'
import { makeFeedbacksUseCaseFactory } from '../usecases/feedbacksUseCaseFactory'

export const useFeedbacks = () => {
  const feedbacksUseCase = makeFeedbacksUseCaseFactory()
  return useFeedbacksComposable(feedbacksUseCase)
}
