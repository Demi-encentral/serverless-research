# Serverless Security with AWS

## Creating a Private API Gateway and Implementing IP Whitelisting

### Prerequisites

- An AWS account
- Basic understanding of AWS services such as VPC, Lambda, and API Gateway
- AWS CLI installed and configured

### 1. Creating a Private API Gateway

#### 1.1 Create a VPC

- Navigate to the Amazon VPC console.
- Click on "Create VPC" and specify the desired configuration, including the CIDR block (`10.0.0.0/16` for example).
- Create at least one subnet within the VPC. Note down the subnet ID.

#### 1.2 Create a Security Group

- In the Amazon VPC console, navigate to "Security Groups".
- Click on "Create security group" and specify a name and description.
- For inbound rules, allow traffic only from the VPC's CIDR block (e.g., `10.0.0.0/16`). Note down the security group ID.

#### 1.3 Configure API Gateway

- Navigate to the Amazon API Gateway console.
- Click on "Create API" and choose "HTTP API".
- Select "Private" as the endpoint type.
- Under "Endpoint Configuration", choose the VPC and subnets created earlier.
- Create or import your API definition.
- Deploy the API to a stage.

##### Deployed Endpoints

- test_1: [https://3kq2ftty7dr6xfnzd4judj447u0syzed.lambda-url.us-east-2.on.aws/](https://3kq2ftty7dr6xfnzd4judj447u0syzed.lambda-url.us-east-2.on.aws/)
- test_2: [https://4tgw11jzn7.execute-api.us-east-2.amazonaws.com/default](https://4tgw11jzn7.execute-api.us-east-2.amazonaws.com/default)
