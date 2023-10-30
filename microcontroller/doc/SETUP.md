# OS, Wireless & Library Setup

## Getting Started

We will be working on this together!
<br>

### 1. Installing OS

- Format the Micro SD card to FAT32 format to be compatible with Raspberry Pi 4 Model B.

  - For Mac OS, use the disk utility to erase the card and rename it 'boot'. <br>

- Head over to [Raspberry Pi Official Website](https://www.raspberrypi.com/software/operating-systems/) and download their imager **Raspberry Pi Imager**.
  - Use the Raspberry Pi Imager to flash the Micro SD card, configure the SSH credentials and wifi credentials (updated).

### 2. Wireless Setup (Headless Mode)

- ~~Create a file named `wpa_supplicant.conf` and copy the code~~

```
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="wifi name"
    psk="wifi password"
}
```

- NOTE: Previous versions of Raspberry Pi OS made use of a wpa_supplicant.conf file which could be placed into the boot folder to configure wireless network settings. This is no longer possible from Raspberry Pi OS Bookworm onwards.

- Create a file named `ssh` with **no** extension and leave it blank. This will enable SSH on Raspberry Pi.
- Move `ssh` to MicroSD card 'boot'.

- Boot the Raspberry Pi by plugging it into a power source.
  - **WARNING: Depending on the model and SD card, your Raspberry Pi may require up to 5 minutes to boot and connect to your wireless network the first time it boots.**
- Open terminal, type `arp -a` to see all devices on the local network, determine the local address of Raspberry Pi.
- Type `ssh hydrosense@[IP ADDRESS]` in the termnial. When prompted, type in the SSH credential we have set for Raspberry Pi.
- We will now be able to access Raspberry Pi remotely. <br>
- For a detailed guide, please checkoout the [Official Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/computers/configuration.html#connect-to-a-wireless-network)

### 3. Python Installation

- In the terminal, type `sudo apt-get update`, `sudo apt-get updgrade`, `sudo apt-get install python3-pip`, `sudo apt-get install mc`, `sudo pip 3 install Pyrebase`
- Type `python3` to check the version.
- Type `sudo shutdown now` to shutdown the device.

### 4. Virtual Enviornment (or force install)

- To force install a library `pip3 install xyz --break-system-packages`
- If you are installing on the Bookworm version of Raspberry Pi OS, you will need to install your python modules in a virtual environment. To Install and activate the virtual environment, use the following commands: `sudo apt install python3.11-venv
python -m venv env --system-site-packages`
- To activate the virtual environment: `source env/bin/activate`
- To deactivate the virutal environment: `source env/bin/activate`

### 5. MISC.

- `sudo i2cdetect -y 1` to check i2c address for the sensor.
