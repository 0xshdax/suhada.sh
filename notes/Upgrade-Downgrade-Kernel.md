
## Install Image Kernel
```
$ sudo apt install linux-image-6.2.0-20-generic
```

## Check Available Kernel

```
$ grep 'menuentry \|submenu ' /boot/grub/grub.cfg | cut -f2 -d "'"
Ubuntu
Advanced options for Ubuntu
Ubuntu, with Linux 6.2.0-39-generic
Ubuntu, with Linux 6.2.0-39-generic (recovery mode)
Ubuntu, with Linux 6.2.0-20-generic
Ubuntu, with Linux 6.2.0-20-generic (recovery mode)
```

## Update Grub

```
$ sudo cat /etc/default/grub
# GRUB_DEFAULT=0 # Before
GRUB_DEFAULT="Advanced options for Ubuntu>Ubuntu, with Linux 6.2.0-20-generic"  # After
[...]

$ sudo update-grub
$ sudo init 6
```
