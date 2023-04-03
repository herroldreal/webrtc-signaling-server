#####################################
## Virtual Machine Module - Output ##
#####################################

output "vm_linux_server_instance_id" {
  value = one(aws_instance.server[*].id)
}

output "vm_linux_server_instance_public_dns" {
  value = one(aws_instance.server[*].public_dns)
}

output "vm_linux_server_instance_public_ip" {
  value = one(aws_eip.linux-eip[*].public_ip)
}

output "vm_linux_server_instance_private_ip" {
  value = one(aws_instance.server[*].private_ip)
}
