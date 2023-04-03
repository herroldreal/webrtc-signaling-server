variable "db_name" {
  type = string
  default = "webrtc-db"
}

variable "docdb_instance_class" {
  type = string
  default = "db.r4.large"
}

variable "docdb_password" {
  type = string
}
