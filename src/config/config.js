export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "garmin-log-client-svc-dev-fileuploadbucket-jmmsp69qa5sz"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://kl41i926n4.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_tnLzQtE0P",
      APP_CLIENT_ID: "6e4p838nljlqo6d7u3fulqkj28",
      IDENTITY_POOL_ID: "us-east-1:1a28f613-bc74-4206-9117-9fc1e61414db"
    }
  };