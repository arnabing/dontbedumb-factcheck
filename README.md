# DontBeDumb FactCheck

An AI-powered political fact-checking search engine with a generative UI.

![Screenshot 2024-10-14 at 2 47 27 PM](https://github.com/user-attachments/assets/f146d8f4-7ffa-4f34-a7fc-d82d7deed93a)

## **About**

DontBeDumb FactCheck is a specialized search engine designed to combat political misinformation and provide users with verified, fact-checked answers to their political queries. By leveraging advanced AI models and reliable search APIs, we aim to empower users with accurate information in an era of rampant misinformation.

## **Key Features**

- **AI-driven search and answer generation focused on political topics**
- **Fact-checking capabilities using multiple reliable sources**
- **Support for various AI providers to ensure diverse and accurate responses**
- **Customizable search depth for thorough fact-checking**
- **User-friendly interface for asking political questions and receiving verified answers**
- **Integration with specialized political information databases**

## **How It Works**

1. **Enter your political question or topic**
2. **Our AI searches through verified political databases and reputable news sources**
3. **The system cross-references information and checks for factual accuracy**
4. **You receive a concise, fact-checked answer with sources**

## **Tech Stack**

- **Next.js** for the frontend and API routes
- **Vercel AI SDK** for text streaming and generative UI
- **Redis (Upstash)** for data persistence
- **Multiple AI model providers** (OpenAI, Google, Anthropic, etc.)
- **Tailwind CSS** for styling

## **Getting Started**

### **1. Fork and Clone repo**

Fork the repo to your Github account, then run the following command to clone the repo:

```
git clone git@github.com:[YOUR_GITHUB_ACCOUNT]/dontbedumb-factcheck.git
```

### **2. Install dependencies**

```
cd dontbedumb-factcheck
bun install
```

### **3. Setting up Upstash Redis**

Follow the guide below to set up Upstash Redis. Create a database and obtain `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. Refer to the [Upstash guide](https://upstash.com/blog/rag-chatbot-upstash#setting-up-upstash-redis) for instructions on how to proceed.

If you intend to use a local Redis, you can skip this step.

### **4. Fill out secrets**

```
cp .env.local.example .env.local
```

Edit the `.env.local` file and fill in the required API keys and tokens.

### **5. Run app locally**

#### Using Bun

To run the application locally using Bun, execute the following command:

`bun dev`

You can now visit http://localhost:3000 in your web browser.

#### Using Docker

To run the application using Docker, use the following command:

`docker compose up -d`

This will start the application in detached mode. You can access it at http://localhost:3000.

## **Contributing**

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## **Credits**

This project is built upon the excellent [Morphic](https://github.com/miurla/morphic) project by miurla. We've adapted and specialized it for political fact-checking. We're grateful for the solid foundation Morphic provided.

## **License**

This project is licensed under the [MIT License](LICENSE).

## **Disclaimer**

While we strive for accuracy, users should always cross-reference important information with multiple sources. This tool is meant to assist in fact-checking, not to be the final arbiter of truth.

## **Support**

If you encounter any issues or have questions, please [open an issue](https://github.com/arnabing/dontbedumb-factcheck/issues) on our GitHub repository.
