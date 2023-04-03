output "aws_instance_public_dns" {
  value = one(aws_instance.server[*].public_dns)
}

output "az_availables" {
  value = [data.aws_availability_zones.available.*.names]
}
