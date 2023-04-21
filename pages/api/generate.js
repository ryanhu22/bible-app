import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const question = req.body.request || "";
  if (question.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "No input was provided.",
      },
    });
    return;
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant, who has wide and deep knowledge of the Christianity Bible, particularly of the English Standard Version",
        },
        { role: "user", content: question },
      ],
    });
    res
      .status(200)
      .json({ result: completion.data.choices[0].message.content });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
          result: "An error occured with API, probably my fault.",
        },
      });
    }
  }
}
