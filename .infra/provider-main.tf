################################
## AWS Provider Module - Main ##
################################

# AWS Provider
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  cloud {
    organization = "personal-herrold"

    workspaces {
      name = "webrtc-android-personal"
    }
  }
}

provider "aws" {
  region     = var.aws_region
}
