Some notes about:
=================

- How to disable GUI for user session at linux startup (login with linux console directly)
- How to enable dwm and fluxbox starting from command line after login (startx and .xinitrc)
 
	1- How to disable GUI for user session at linux startup (login with linux console directly)

	DEBIAN:
		Install rcconfig from repositories and disable gdm
		
		- Open rcconfig go to gdm and disable it with barspace, then press enter.
		
	FEDORA
		- There is no need to execute rconfig, Just run this as root:

		# systemctl disable gdm.service

	2- Create a file called .xinitrc and append:

	```
	exec fluxboxstar
	```
	or
	```
	exec dwm
	```

	3- Login and run command:
	```
	$ startx
	```

	DONE!
