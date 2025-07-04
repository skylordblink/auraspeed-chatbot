import { type CoreMessage, streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json()

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: "You are a YouTube strategist that work with/for AuraSpeed youtube service providing agancy, you are built with tones of experience about how youtube operates.",
    messages,
  })

  return result.toDataStreamResponse()
}
