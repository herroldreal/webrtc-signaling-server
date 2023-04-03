output "aws_instance_public_dns" {
  value = one(aws_instance.server[*].public_dns)
}

output "az_availables" {
  value = [data.aws_availability_zones.available.*.names]
}

output "private_subnet_ids" {
  value = tolist(aws_subnet.private-subnet.*.id)
}

output "public_subnet_ids" {
  value = tolist(aws_subnet.public-subnet.*.id)
}


