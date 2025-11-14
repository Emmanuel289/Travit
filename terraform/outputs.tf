output "svc_hostname" {
  value       = aws_instance.travit_svc_instance.public_dns
  description = "Hostname assigned to the instance"
}

output "username" {
  value       = local.username
  description = "Username used to connect to the EC2 instance"
}
output "remote_cache" {
  value       = var.remote_cache
  description = "Location of cache data and state files on the EC2 instance"
}

output "db_hostname" {
  value       = aws_db_instance.travit_db_instance.address
  description = "DB hostname"
}

output "db_name" {
  value       = aws_db_instance.travit_db_instance.db_name
  description = "DB name"
}
