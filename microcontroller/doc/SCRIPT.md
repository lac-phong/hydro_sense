# Run script on start-up with your Raspberry Pi

## Using rc.local
There are a number of ways to have a command, script or program run when the Raspberry pi boots. This is especially useful if you want to power up your Pi in headless mode (that is without a connected monitor), and have it run a program without configuration or a manual start. I suggest to use the method that uses the `rc.local` file.

## Editing rc.local
On your Raspberry Pi, edit the file /etc/rc.local as root:

`sudo nano /etc/rc.local`

Add your commands below the comment, but leave the line `exit 0` at the end, then save the file and exit. For example, to run your script `myscript.py` add the line:

`python3 /home/pi/myscript.py`

or to run a custom bash schedule script, add the line:

`/home/pi/schedule.sh`

Be sure to reference absolute filenames rather than relative to your home folder, such as `/home/pi/myscript.py` rather than `myscript.py`.

Make sure that the file `rc.local` is executable otherwise it will not run:

`sudo chmod +x /etc/rc.local`

Now reboot your Raspberry Pi to test it:

`sudo reboot`

## Make boot not wait
If you add a script or command to your `/etc/rc.local` file, it will be added to the boot sequence. If your code gets stuck then the boot sequence cannot proceed. So be careful as to which code you are trying to run at boot and test the code a couple of times.

Alternatively, and if your script is not instant but runs continuously, you should fork the process by adding an ampersand to the end of the command:

`python3 /home/pi/myscript.py &`

The ampersand allows the command to run in a separate process and continue booting with the process running.

## Wait for network
It can be that rc.local is run before the Raspberry Pi has connected to the network. The simplest way to fix this is to add a simple command to have the Raspberry Pi wait for a couple seconds:

`sleep 5`

## Write to logfile
If you want to simultaneously write a logfile, run the command as follows:

`bash -c '/usr/bin/python3 /home/pi/myscript.py > /home/pi/mylog.log 2>&1' &`

## Using .bashrc
Rather than running a script upon boot we can run a script each time a terminal window is opened, such as upon boot but also with a new SSH connection. To do so we will use `.bashr`:

`sudo nano /home/pi/.bashrc`

Go to the last line of the file and add your commands, e.g. to print a statement and run a python script:

`echo Running sample script`

`sudo python /home/pi/sample.py`

The program can be aborted with `ctrl-c` while it is running!

## Reference
[The Raspberry Pi Guide](https://raspberrypi-guide.github.io/programming/run-script-on-boot#using-rclocal)