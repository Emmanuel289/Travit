resource "aws_db_subnet_group" "travit_db" {
  name       = "travit-db"
  subnet_ids = module.vpc.public_subnets

  tags = {
    Name = "Travit"
  }
}


resource "aws_security_group" "travit_rds" {
  name   = "travit_rds_sg"
  vpc_id = module.vpc.vpc_id

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr]
  }

  egress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Travit"
  }
}

resource "aws_db_instance" "travit_db_instance" {
  depends_on = [
    module.vpc,
  ]
  identifier             = "travit-db-instance"
  instance_class         = "db.t3.micro"
  allocated_storage      = 5
  engine                 = "postgres"
  db_name                = "travit"
  engine_version         = "14.7"
  username               = "travit"
  password               = var.db_password
  db_subnet_group_name   = aws_db_subnet_group.travit_db.name
  vpc_security_group_ids = [aws_security_group.travit_rds.id]
  parameter_group_name   = aws_db_parameter_group.travit_db_param_group.name
  publicly_accessible    = false
  skip_final_snapshot    = true
}

resource "aws_db_parameter_group" "travit_db_param_group" {
  name   = "travit"
  family = "postgres14"

  parameter {
    name  = "log_connections"
    value = "1"
  }
}
