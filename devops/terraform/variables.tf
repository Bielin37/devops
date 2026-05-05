variable "region" {
  default = "eu-central-1"
}

variable "instance_type" {
  default = "t3.small"
}

variable "public_key_path" {
  description = "Path to SSH public key"
  type        = string
}
