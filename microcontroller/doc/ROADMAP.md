# Microcontroller Team Roadmap

## Overview

This document overviews the roadmap of the microcontroller team for HydroSense referring to the [Gantt Chart](https://docs.google.com/spreadsheets/d/1e9eoLkB1Kq2ox62_Ni0hW2gtKSnam4YBcwduLEwICXs/edit?usp=sharing).

## To Do List

| Task                         | Start Date | Due Date   | Status      |
| ---------------------------- | ---------- | ---------- | ----------- |
| Learn Git & Python           | 2023-10-05 | 2023-10-11 | In Progress |
| OS, Wireless & Library Setup | 2023-10-05 | 2023-10-12 | In Progress |
| Data Retrieval               | TBD        | 2023-10-15 |             |
| RESTful API Integration      | TBD        | 2023-10-21 |             |

## Task Description

- Learn Git & Python: Learn Git commands and be familiar with Python syntax.
- OS, Wireless & Library Setup: Flash the SD card with Raspberry Pi OS Lite, configure wifi credentials. Enable SSH to allow remote access and management of the Raspberry Pi. Install Python onto the Raspberry Pi to run scripts and applications in a headless environment.
- Data Retreival: Utilize Python scripts to communicate with the moisture sensor and retrieve real-time data.
- RESTful API Integration: Design a RESTful API to allow external services to request and receive moisture data.

## Task Delegation

TBA

## Check-in

As for our first task (Github Exercise), let's put CHEKCED-IN in our corresponding names to ensure that everyone is familiar with Git. Please start by making your own branch then push the code there and make a pull request to merge with this forked main. <br>
Our `Learn Git & Python` task would be marked completed by finishing this.

| Name     | Status     | Date       |
| -------- | ---------- | ---------- |
| James    | CHECKED-IN | 2023-10-10 |
| Drew     | CHECKED-IN | 2023-10-10 |
| Michelle |            | 2023-10-10 |

### Step-by-step Guide (Updated for branch making)

- Open terminal, navigate to a approriate directory using `cd DirectoryName` and type `git clone https://github.com/shallowsmith/hydro_sense.git` to clone the repository.
- Type `git checkout` to see which branch you are on. You should be on the **main** branch.
- Type `git checkout -b <your-branch-name>` to create a new branch, try using checkout to see what branch you are on now.
- Edit the ROADMAP.md file using any text editor or IDE (Visual Studio Code recommended).
- Open terminal once again, navigate to `hydro_sense`, and type `cd microcontroller/doc` to navigate into /microcontroller/doc directory.
- Try typing `git status` to see which changes have been staged, which haven't, and which files aren't being tracked by Git. If you have checked in with the ROADMAP.md file then you will see it flagged stating that the file is modified.
- Type `git add ROADMAP.md` to stage the README.md file.
- Type `git commit -m "Your Comment"` to commit.
- Type `git push -u origin <your-branch-name>` to push your change to your remote branch.
- If prompted of user authentication (username and password), please check and read ["Creating a personal access token (classic)"](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic), ["Setting your Git username for every repository on your computer
  "](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git), ["Setting your commit email address in Git"](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git), to complete user authentication. You will need to type in your Personal Access Token for the password.
  - On github, you will be able to create a pull request from your created branch to the main branch. Please select _the forked main branch_ for the pull request. After that, DON'T PROCEED WITH MERGING, I will do it.
  - Upon request, I will merge the pull requests after checking.
    <br>
  - After everything is done, type `git checkout main` to switch your working branch to main.
  - Also, you can delete your branch by typing `git branch --delete <your-branch-name>`
- When you realize your branch is behind on commits, you can fetch the changes and pull from the newly committed branch.

### Most Used Command Lines (Mac OS [zsh], Linux [Bash])

- `pwd`: Check the present working directory.
- `ls`: List the contents of the current directory.
- `cd [directory]`: Change directory. Navigate to the specified directory.
- `cd ..`: Navigate to the directory immediately above the current one.
- `mkdir [directory name]`: Create a new directory with the given name.
- `rmdir [directory name]`: Remove the specified directory (only if it's empty).
- `rm [file name]`: Remove the specified file.
- `rm -r [directory name]`: Recursively remove a directory and its contents.
- `touch [file name]`: Create a new file with the given name.
- `echo [text]`: Display the specified text in the terminal.
- `cat [file name]`: Display the contents of a file.
- `man [command]`: Display the manual page for the specified command.

## Updates

Please feel free to edit this document freely regarding our To Do List and Task Delegation.

## Resources

If you are still lost, you can ask me directly or checkout these websites I have found. <br>
[Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)<br>
[Git Push Local Branch to Remote – How to Publish a New Branch in Git](https://www.freecodecamp.org/news/git-push-local-branch-to-remote-how-to-publish-a-new-branch-in-git/) <br>
[4 ways to create a Git branch quickly by example](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Git-Branch-Create-Example-Command-Checkout-Commit-Tag) <br>
[How to delete a local Git branch](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/delete-local-git-branch-origin-force-merge-all)
