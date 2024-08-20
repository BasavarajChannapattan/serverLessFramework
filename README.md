# Serverless and AWS Setup with Node.js

This README file provides instructions to set up a Serverless and AWS environment using Node.js.

## Prerequisites

1. Install Node.js (version 12 or higher)
2. Install AWS CLI (Command Line Interface)
3. Install Serverless Framework

## Installation

1. Clone the project repository:

```bash
git clone https://github.com/your-repository-url
cd your-project-directory
```

2. Install project dependencies
   npm install

3. Configure AWS CLI

Enter your AWS Access Key ID, Secret Access Key, Default region name, and Default output format when prompted.

4. Install Serverless Framework globally:

npm install -g serverless

Deployment

1. Create a new AWS Lambda function and API Gateway:

   serverless deploy

This command will create a new service in AWS and deploy your functions and API Gateway.

2. Test your deployed functions:

You can test your deployed functions using the provided endpoints in the Serverless Framework output or by using tools like Postman or curl.

## Serverless Logs

To view logs for the `getProducts` function for the past 5 hours, use the following command:

```bash
serverless logs -f getProducts --startTime 5h
```

Additional Resources

1. https://www.serverless.com/framework/docs

2. https://www.serverless.com/framework/docs
