import * as cdk from '@aws-cdk/core';
import { S3 } from './aws_resources/s3';
import { CloudFront } from './aws_resources/cloudfront';

export class EgeInfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const imageBucket = new S3(this, 'ege-image-bucket');
    const cloudFront = new CloudFront(this, 'ege-cloud-front', imageBucket.s3);
  }
}
