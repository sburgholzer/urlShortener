# An example of using AWS API Gateway to Lambda functon to create a url shortener and then taking a code and redirecting to the stored URL.

### This uses API Gateway, Lambda and DynamoDB

endpoints:
  POST - https://y7hurlzljd.execute-api.us-east-1.amazonaws.com/
  GET - https://y7hurlzljd.execute-api.us-east-1.amazonaws.com/{code}