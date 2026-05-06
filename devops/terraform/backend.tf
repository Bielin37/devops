terraform {
  backend "s3" {
    bucket = "elasticbeanstalk-eu-central-1-536577228027"
    key    = "redwood/terraform.tfstate"
    region = "eu-central-1"
  }
}
