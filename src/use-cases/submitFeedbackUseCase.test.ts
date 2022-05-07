import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

const submitFeedback = new SubmitFeedbackUseCase(
  {create: async () => {}},
  {sendMail: async ()=> {}}
)
describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "exemple comment",
      screenshot: "data:image/png;base64,dhausidjap",
    })).resolves.not.toThrow()
  })

  it('should be not able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: "",
      comment: "exemple comment",
      screenshot: "data:image/png;base64,dhausidjap",
    })).rejects.toThrow()
  })

  it('should be not able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "",
      screenshot: "data:image/png;base64,dhausidjap",
    })).rejects.toThrow()
  })

  it('should be not able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "exemple comment",
      screenshot: "test.jpg",
    })).rejects.toThrow()
  })
})
