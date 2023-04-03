##############################################
## Network Single AZ Public Only - Variables #
##############################################

# AWS AZ
variable "aws_az" {
  type        = string
  description = "AWS AZ"
  default     = "us-east-1c"
}

# VPC Variables
variable "vpc_cidr" {
  type        = string
  description = "CIDR for the VPC"
  default     = "10.0.0.0/16"
}

// This variable contains the CIDR blocks for
// the public subnet. I have only included 4
// for this tutorial, but if you need more you
// would add them here
variable "public_subnet_cidr_blocks" {
  description = "Available CIDR blocks for public subnets"
  type        = list(string)
  default = [
    "10.0.1.0/24",
    "10.0.2.0/24",
    "10.0.3.0/24",
    "10.0.4.0/24"
  ]
}

// This variable contains the CIDR blocks for
// the public subnet. I have only included 4
// for this tutorial, but if you need more you
// would add them here
variable "private_subnet_cidr_blocks" {
  description = "Available CIDR blocks for private subnets"
  type        = list(string)
  default = [
    "10.0.101.0/24",
    "10.0.102.0/24",
    "10.0.103.0/24",
    "10.0.104.0/24",
  ]
}

// This variable holds the
// number of public and private subnets
variable "subnet_count" {
  description = "Number of subnets"
  type        = map(number)
  default = {
    public  = 1,
    private = 2
  }
}
