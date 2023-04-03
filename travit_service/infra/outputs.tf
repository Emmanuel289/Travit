output "hostname" {
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
