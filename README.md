# Bose SoundTouch Hybrid Home Assistant App Repository

This repository is intended to be added to Home Assistant as a custom app repository.
It contains a Home Assistant wrapper for the original Bose SoundTouch Hybrid app:

https://github.com/TJGigs/Bose-SoundTouch-Hybrid-2026

## Donations
If you appreciate the app: [Buy me a Beer](https://www.paypal.com/paypalme/pieterverougstraete)

# Installation

## 1. Install **Music Assistant** (preferably as a Home Assistant app)

* Initial Setup: Once MASS is installed go to its web interface and create a long-lived access token, or keep using your existing username and password. A token is preferred for new installs.

* Configure Providers: Add your desired streaming providers (e.g., Local NAS, TuneIn, Spotify, etc.) and configure any local Music Library synchronization options. Examples of synchronization options are on Page 13 in the SoundTouch Hybrid Documentation

* Configure UPnP: Enable the DLNA/UPnP provider, and for each of your SoundTouch speakers ensure you select DLNA as your "Preferred Output Protocol." DLNA is recommended because the Bose SoundTouch Hybrid system’s self-healing logic, latency management, and real-time state synchronization are heavily optimized for DLNA/UPnP. The majority of stabilization regression testing was done with this protocol. See Page 12 in the SoundTouch Hybrid Documentation for an example.

## 2. Add custom app repo in Home Assistant Apps
repo: https://github.com/diddi8/HA-Bose-Soundtouch_Beta

## 3. Force Speakers to use Bose Hybrid instead of BOSE Cloud
See https://github.com/TJGigs/Bose-SoundTouch-Hybrid-2026
