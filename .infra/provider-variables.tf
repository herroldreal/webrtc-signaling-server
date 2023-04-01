#####################################
## AWS Provider Module - Variables ##
#####################################

# AWS connection & authentication

variable "aws_region" {
  type = string
  description = "AWS region"
  default = 'us-east-1'
}
