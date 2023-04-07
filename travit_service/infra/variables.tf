variable "name" {
  default     = "travit-svc"
  description = "Deployment name"
}

variable "ami_id" {
  type        = string
  description = "AMI ID"
  default     = "ami-0abc4c35ba4c005ca"
}

variable "aws_region" {
  default     = "ca-central-1"
  description = "AWS region to deploy to"
}

variable "aws_profile" {
  default     = ""
  description = "AWS profile to use when authenticating"
}

variable "aws_credentials" {
  default     = "~/.aws/credentials"
  description = "AWS credentials file to use when authenticating"
}

variable "remote_cache" {
  default     = "/home/ubuntu/.cache/travit"
  description = "Remote cache directory"

}
variable "key_name" {
  default     = "travit-svc-key"
  description = "Key pair name"
}

variable "vpc_id" {
  default     = ""
  description = "Existing VPC ID"
}

variable "subnet_id" {
  default     = ""
  description = "Existing subnet ID"
}

variable "vpc_cidr" {
  default     = "10.0.0.0/20"
  description = "VPC CIDR range"
}

variable "instance_type" {
  default     = "t2.micro"
  description = "Server instance type"
}

variable "disk_size" {
  default     = 8
  description = "Server disk size"
}

variable "key_file" {
  default     = "~/.ssh/travit-svc-key.pem"
  description = "Path to private key file"
}


variable "db_password" {
  type        = string
  default     = ""
  description = "Database password"
  sensitive   = true
}
