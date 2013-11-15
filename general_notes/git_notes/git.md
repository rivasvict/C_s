This is a notebook about GIT
============================

Adding SSH-keys
---------------

- **STEP 1**: Check for ssh keys

Checking existng keys on your computer

	$ cd ~/.ssh
	#This is the directory of ssh keys
	$ ls
	#Showing previous ssh keys added on your computer

- **STEP 2**: Generate your ssh key for github

Generating a new ssh on your computer

	$ ssh-keygen -t rsa -C "your@email.com"
	#It creates a new ssh key
	#Press enter until it stop asking you for ssh keys
	$ ssh-add id_rsa

- **STEP 3**: Adding your ssh key to github

Generating ssh key string and adding your ssh key to github.com

	$ yum install xclip
	$ xclip -sel clip < ~/.ssh/id_rsa.pub
	$ cat id_rsa.pub
	#Copy the whole content of this file

	- Go to www.github.com account settings.
	- Click on SSH-keys
	- Click on "add a new key"
	- Paste the content of "id_rsa.pub" file that you have previously copied to the clipboard
	- Click on "add key"

There you are!! :D
