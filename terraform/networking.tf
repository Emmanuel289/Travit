### VPC Network ###
resource "google_compute_network" "travit_network" {
  project                 = local.project
  name                    = var.network
  auto_create_subnetworks = false
}

### Subnet ###
resource "google_compute_subnetwork" "travit_subnet" {
  project       = local.project
  name          = var.subnet
  region        = var.region
  ip_cidr_range = var.cidr_range
  network       = google_compute_network.travit_network.id

  depends_on = [google_compute_network.travit_network]
}
