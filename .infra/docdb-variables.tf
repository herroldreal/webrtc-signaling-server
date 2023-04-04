variable "db_name" {
  type = string
  default = "webrtc-db"
}

variable "docdb_instance_class" {
  type = string
  default = "db.r6g.large"
}

variable "docdb_password" {
  type = string
}
