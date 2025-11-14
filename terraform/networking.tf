module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  create_vpc = (var.vpc_id == "")

  name = "${var.name}-vpc"
  cidr = var.vpc_cidr

  azs = ["${var.aws_region}a", "${var.aws_region}b"]

  public_subnets = [
    cidrsubnet(var.vpc_cidr, 4, 0),
    cidrsubnet(var.vpc_cidr, 4, 1),
  ]
  private_subnets = []

  enable_nat_gateway   = true
  single_nat_gateway   = false
  enable_dns_hostnames = true
}

data "http" "myip" {
  url = "https://ipv4.icanhazip.com"
}

resource "aws_security_group" "travit_sg" {
  name        = "${var.name}-firewall"
  description = "Allow traffic to Travit server"
  vpc_id      = var.vpc_id == "" ? module.vpc.vpc_id : var.vpc_id

  ingress {
    description = "Allow SSH Access"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["${chomp(data.http.myip.response_body)}/32"]
  }

  ingress {
    description = "Allow HTTPS Access for Nginx Proxy"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["${chomp(data.http.myip.response_body)}/32"]
  }
  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
