# MultiPDF Chat App

* Original: https://github.com/alejandro-ao/ask-multiple-pdfs
* Improved:
   * No need to hardcode API's: can be passed as input in UI / as environment variable
   * Docker Container with dependencies
   * Added Github Actions CI/CD

Use the build docker Image with [this configuration](https://github.com/JAlcocerT/ask-multiple-pdfs/blob/main/Z_Deploy_me/Docker-Compose-Stack.yml):

```sh
sudo docker pull ghcr.io/jalcocert/ask-multiple-pdfs:v1.0
```

[![Ask PDF with LangChain](https://img.youtube.com/vi/e9hJZrT7HLw/0.jpg)](https://www.youtube.com/watch?v=e9hJZrT7HLw)

---

> You can find the tutorial for this project on [YouTube](https://youtu.be/dXxQ0LR-3Hg).

<div align="center">
  <a href="https://www.python.org/downloads/release/python-311">
    <img alt="Python Version" src="https://img.shields.io/badge/python-3.11-blue.svg" />
  </a>
</div>

## Introduction
------------
The MultiPDF Chat App is a Python application that allows you to chat with multiple PDF documents. You can ask questions about the PDFs using natural language, and the application will provide relevant responses based on the content of the documents. This app utilizes a language model to generate accurate answers to your queries. Please note that the app will only respond to questions related to the loaded PDFs.

## How It Works
------------

![MultiPDF Chat App Diagram](./docs/PDF-LangChain.jpg)

The application follows these steps to provide responses to your questions:

1. PDF Loading: The app reads multiple PDF documents and extracts their text content.

2. Text Chunking: The extracted text is divided into smaller chunks that can be processed effectively.

3. Language Model: The application utilizes a language model to generate vector representations (embeddings) of the text chunks.

4. Similarity Matching: When you ask a question, the app compares it with the text chunks and identifies the most semantically similar ones.

5. Response Generation: The selected chunks are passed to the language model, which generates a response based on the relevant content of the PDFs.

## Dependencies and Installation
----------------------------
To install the MultiPDF Chat App, please follow these steps:

1. Clone the repository to your local machine.

2. Install the required dependencies by running the following command:
```sh
pip install -r requirements.txt
```

3. Obtain an API key from OpenAI and add it to the `.env` file in the project directory.
```commandline
OPENAI_API_KEY=your_secrit_api_key
```

## Usage
-----
To use the MultiPDF Chat App, follow these steps:

1. Ensure that you have installed the required dependencies and added the OpenAI API key to the `.env` file.

2. Run the `main.py` file using the Streamlit CLI. Execute the following command:
   ```
   streamlit run app.py
   ```

3. The application will launch in your default web browser, displaying the user interface.

4. Load multiple PDF documents into the app by following the provided instructions.

5. Ask questions in natural language about the loaded PDFs using the chat interface.

## Contributing
------------
This repository is intended for educational purposes and does not accept further contributions. It serves as supporting material for a YouTube tutorial that demonstrates how to build this project. Feel free to utilize and enhance the app based on your own requirements.

## License
-------
The MultiPDF Chat App is released under the [MIT License](https://opensource.org/licenses/MIT).