output "aws_instance_public_dns" {
  value = one(aws_instance.server[*].public_dns)
}
