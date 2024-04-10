# Creating a Private API Gateway and IP Whitelisting with AWS

## Prerequisites

- An AWS account
- Basic understanding of AWS services such as VPC, Lambda, and API Gateway
- AWS CLI installed and configured

## 1. Creating a Private API Gateway

### 1.1 Create a VPC

- Navigate to the Amazon VPC console.
- Click on "Create VPC" and specify the desired configuration, including the CIDR block (`10.0.0.0/16` for example).
- Create at least one subnet within the VPC. Note down the subnet ID.

### 1.2 Create a Security Group

- In the Amazon VPC console, navigate to "Security Groups".
- Click on "Create security group" and specify a name and description.
- For inbound rules, allow traffic only from the VPC's CIDR block (e.g., `10.0.0.0/16`). Note down the security group ID.

### 1.3 Configure API Gateway

- Navigate to the Amazon API Gateway console.
- Click on "Create API" and choose "HTTP API".
- Select "Private" as the endpoint type.
- Under "Endpoint Configuration", choose the VPC and subnets created earlier.
- Create or import your API definition.
- Deploy the API to a stage.

#### Deployed Endpoints

- test_1: [https://bbklyi7q4m7upyblbhyidrk7di0inixn.lambda-url.us-east-2.on.aws/](https://bbklyi7q4m7upyblbhyidrk7di0inixn.lambda-url.us-east-2.on.aws/)
- test_2: [https://ndoxiorbjfn2l7kypicptci7sa0ionfa.lambda-url.us-east-2.on.aws/](https://ndoxiorbjfn2l7kypicptci7sa0ionfa.lambda-url.us-east-2.on.aws/)

## 2. IP Whitelisting

### 2.1 Create a Security Group

- In the Amazon VPC console, navigate to "Security Groups".
- Click on "Create security group" and specify a name and description.
- For inbound rules, choose "Custom" as the source and enter the IP address or CIDR block to whitelist (e.g., `203.0.113.0/24`). Note down the security group ID.

### 2.2 Attach Security Group to Resources

- Attach the security group created in step 2.1 to the resources that need to be whitelisted (e.g., EC2 instances, Lambda functions).

### 2.3 Update Security Group Rules

- Review and update security group rules as needed to ensure that only whitelisted IP addresses are allowed inbound access.

## Conclusion

By following the steps outlined in this guide, you can create a private API Gateway and implement IP whitelisting to restrict access to your resources.
