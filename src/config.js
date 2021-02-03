const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-api-prod-serverlessdeploymentbucket-125ittyvyw7uz",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://3fhx8k0uyc.execute-api.us-east-1.amazonaws.com/prod/notes",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_rc3JUgWS2",
        APP_CLIENT_ID: "18lur42b4atasmaht4r3hul16b",
        IDENTITY_POOL_ID: "us-east-2:4ddd6372-4cec-4635-965d-ee9eb8b03799",
    },
};

export default config;
