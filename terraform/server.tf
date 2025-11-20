locals {
  project = "travit-e0e79"
}

###  GCE Service Account ###
resource "google_service_account" "travit-service-account" {
  project      = local.project
  account_id   = "travit-service-account"
  display_name = "Service account for Travit VM"
}

###  GCE Instance  ###
resource "google_compute_instance" "travit_server_instance" {
  project      = local.project
  name         = var.machine_name
  machine_type = var.machine_type
  zone         = var.zone
  boot_disk {
    initialize_params {
      image = "ubuntu-os-pro-cloud/ubuntu-minimal-pro-2204-lts"
    }
  }
  network_interface {
    network    = google_compute_network.travit_network.id
    subnetwork = google_compute_subnetwork.travit_subnet.id
  }

  metadata = {
    type = "server"
  }

  labels = {
    "type" = "server"
  }

  depends_on = [google_service_account.travit-service-account, google_compute_network.travit_network, google_compute_subnetwork.travit_subnet]

  service_account {
    email  = google_service_account.travit-service-account.email
    scopes = ["cloud-platform"]
  }

}

###  GCS Bucket for Storing Terraform State  ####
resource "google_storage_bucket" "travit_bucket" {
  project                     = local.project
  name                        = "travit-bucket-${random_id.random_number.hex}"
  location                    = var.region
  force_destroy               = true
  public_access_prevention    = "enforced"
  uniform_bucket_level_access = "true"

  versioning {
    enabled = true
  }
}

resource "random_id" "random_number" {
  byte_length = 8

}

resource "local_file" "backend" {
  file_permission = "0644"
  filename        = "${path.module}/backend.tf"

  # You can store the template in a file and use the templatefile function for
  # more modularity, if you prefer, instead of storing the template inline as
  # we do here.
  content = <<-EOT
  terraform {
    backend "gcs" {
      bucket = "${google_storage_bucket.travit_bucket.name}"
      prefix = "terraform/state"
    }
  }
  EOT

}
