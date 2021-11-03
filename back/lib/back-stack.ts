import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from "@aws-cdk/aws-apigateway";

export class BackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda
    const getItems = new lambda.Function(this, "getItemsLambda", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("src/lambda")
    })

    // API Gateway
    const getItemsApi = new apigateway.RestApi(this, "getItemsApi" )
    getItemsApi.root.addMethod("GET", new apigateway.LambdaIntegration(getItems))

  }
}
