import * as cdk from '@aws-cdk/core';
import s3 = require('@aws-cdk/aws-s3');
import { Construct } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';

export class S3 {
    public readonly s3: Bucket;

    public constructor(parent: Construct, name: string) {
        this.s3 = new s3.Bucket(parent, name, {
            bucketName: name
        })
    }
}