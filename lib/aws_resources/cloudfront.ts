import * as cdk from '@aws-cdk/core';
import { Construct } from '@aws-cdk/core';
import cloudfront = require('@aws-cdk/aws-cloudfront');
import { CloudFrontWebDistribution } from '@aws-cdk/aws-cloudfront';
import { Bucket } from '@aws-cdk/aws-s3';

export class CloudFront {
    public readonly cloudFront: CloudFrontWebDistribution;

    public constructor(parent: Construct, name: string, sourceBucket: Bucket) {
        this.cloudFront = new cloudfront.CloudFrontWebDistribution(parent, name, {
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: sourceBucket
                    },
                    behaviors: [ {isDefaultBehavior: true} ]
                }
            ]
        })
    }
}


