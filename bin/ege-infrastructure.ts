#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EgeInfrastructureStack } from '../lib/ege-infrastructure-stack';

const app = new cdk.App();
new EgeInfrastructureStack(app, 'EgeInfrastructureStack');
