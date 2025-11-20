variable "name" {
  default     = "travit-svc"
  description = "Deployment name"
}

variable "region" {
  default     = "us-east1"
  description = "GCP region to deploy to"
}

variable "zone" {
  default     = "us-east1-c"
  description = "GCP zone to deploy to"
}

variable "network" {
  default     = "travit-network"
  description = "The VPC to host the service"
}

variable "subnet" {
  default     = "travit-subnet"
  description = "The subnet to host the service"
}

variable "cidr_range" {
  default     = "10.0.0.0/20"
  description = "The CIDR block for allocating IP addresses"
}

variable "machine_type" {
  description = "The machine type for the instance"
  default     = "e2-small"
}

variable "machine_name" {
  type        = string
  description = "The name of the VM running the service"
  default     = "travit-server"
}
