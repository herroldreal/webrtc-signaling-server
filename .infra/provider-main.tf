################################
## AWS Provider Module - Main ##
################################

# AWS Provider
terraform {
  required_version = ">= 1.3.9"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
  }

  cloud {
    organization = "personal-herrold"

    workspaces {
      name = "webrtc-signaling-server"
    }
  }
}

provider "aws" {
  region  = var.aws_region
}
