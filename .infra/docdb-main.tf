resource "aws_docdb_subnet_group" "service" {
  name       = "tf-${var.app_name}"
  subnet_ids = "${tolist(aws_subnet.private-subnet.*.id)}"
}

resource "aws_docdb_cluster_instance" "service" {
  count              = 1
  identifier         = "tf-${var.app_name}-${count.index}"
  cluster_identifier = aws_docdb_cluster.service.id
  instance_class     = var.docdb_instance_class
}

resource "aws_docdb_cluster" "service" {
  skip_final_snapshot             = true
  db_subnet_group_name            = aws_docdb_subnet_group.service.name
  cluster_identifier              = "tf-${var.app_name}"
  engine                          = "docdb"
  master_username                 = "webrtc_app"
  master_password                 = var.docdb_password
  db_cluster_parameter_group_name = aws_docdb_cluster_parameter_group.service.name
  vpc_security_group_ids          = [aws_security_group.rtc-db.id]
}

resource "aws_docdb_cluster_parameter_group" "service" {
  family = "docdb4.0"
  name   = "tf-${var.app_name}"

  parameter {
    name  = "tls"
    value = "disabled"
  }
}
