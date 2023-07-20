provider "aws" {
  # profile = var.aws_profile
  region = var.aws_region
}

locals {
  username = "ubuntu"
}
resource "aws_instance" "travit_svc_instance" {
  ami           = var.ami_id
  instance_type = var.instance_type

  vpc_security_group_ids      = [aws_security_group.travit_sg.id]
  subnet_id                   = var.vpc_id == "" ? module.vpc.public_subnets[0] : var.subnet_id
  associate_public_ip_address = true

  key_name   = var.key_name
  monitoring = true

  root_block_device {
    volume_type = "gp2"
    volume_size = var.disk_size
  }

  tags = {
    "Name" = var.name
  }
}

resource "null_resource" "travit_svc_config" {
  depends_on = [aws_instance.travit_svc_instance]

  provisioner "file" {
    source      = "setup"
    destination = "/home/${local.username}/setup"
  }

  connection {
    type        = "ssh"
    user        = local.username
    private_key = file(var.key_file) # Path to a valid key file
    host        = aws_instance.travit_svc_instance.public_ip
  }
}
