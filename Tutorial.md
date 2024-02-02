AWS Serverless Notes

1. Create notes-crud-api folder
2. Config credentials: https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials

- Serverless Framework Commands - AWS Lambda - Config Credentials
  Command:
  `serverless config credentials --provider provider --key key --secret secret`

3. To see the cred's configured & open the `credentials` file:
   `open ~/.aws`

4. Create serverless project with template: https://www.serverless.com/framework/docs/providers/aws/cli-reference/create
   `serverless create -t aws-nodejs`

5. Initial npm
   `npm init -y`

6. Change serverless.yml to have following in the provider section

```stage: dev
  region: us-east-1
```

7. Edit `serverless.yml` & add the following in functions section:

```
createNote:
    handler: handler.createNote
    events:
      - http:
          path: notes
          method: post
```
