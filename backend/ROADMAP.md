# Backend Team Roadmap

## Overview

This document overviews the roadmap of the backend team for HydroSense referring to the [Gantt Chart](https://docs.google.com/spreadsheets/d/1e9eoLkB1Kq2ox62_Ni0hW2gtKSnam4YBcwduLEwICXs/edit?usp=sharing).

## To Do List

| Task                                                | Start Date | Due Date   | Status      |
| --------------------------------------------------- | ---------- | ---------- | ----------- |
| Learn Git & React                                   | 2023-10-05 | 2023-10-11 | In Progress |
| Setup Firebase with React app                       | 2023-10-05 | 2023-10-11 | In Progress |
| Setup user authentication                           | 2023-10-11 | 2023-10-15 | In Progress |
| Create and save spreadsheets for users              | 2023-10-11 | 2023-10-25 |             |
| Read and write data from device to Firebase         | TBD        | 2023-10-21 |             |
| Read and write data from Firebase onto spreadsheets | TBD        | 2023-10-31 |             |

## Task Description

- Setup Firebase with React app
- Setup user authentication
- Create and save spreadsheets for users 
- Read and write data from device to Firebase 
- Read and write data from Firebase onto spreadsheets

## Task Delegation

TBA

## Git Workflow Summary

### General use

1. Start on the main branch (use `git branch` to check). 
2. Fetch the latest changes from remote repository (`git fetch origin`). This fetches all updates from remote repository onto your local repository.
3. Pull all updates from remote repository into your local repository (`git pull`). This updates your main branch on your local repository.
4. Create or move into your own branch (to create: `git checkout -b <branch-name>`> | to move: `git checkout <branch-name>`)
5. Merge main branch into your own branch (`git merge origin/main`). This combines the changes from the main branch with the changes on your own branch.
6. Make the changes you want to the code.
7. Stage (use `git add .` to add entire directory or `git add <file directory>` to add specific files only)
8. Commit (`git commit -m "commit message"`)
9. Push (`git push -u origin <branch-name>`)
10. Create a pull request for team members to review
11. Address any review comments made by team members
12. MERGE!

### First time cloning

1. Git clone repository onto local host (`git clone https://github.com/lac-phong/hydro_sense.git`)
2. Go into hydro_sense folder through terminal (`cd hydro_sense`)
3. Run the command `npm install` to install all dependencies needed to run react
4. Run `npm start` to boot up our react application
5. Continue from step 6 in **General use** section

## Check-in

As for our first task (Github Exercise), let's put CHECKED-IN in our corresponding names to ensure that everyone is familiar with Git. Please start by making your own branch then push the code there and make a pull request to merge with this forked main. <br>
Our `Learn Git & React` task would be marked completed by finishing this.

| Name     | Status     | Date       |
| -------- | ---------- | ---------- |
| Lac      | CHECKED-IN | 2023-10-11 |
| Stefan   | CHECKED-OU | 2023-10-11 |
| Akshitaa |CHECKED-IN  | 2023-10-?? |
| Julia    |            | 2023-10-?? |

### Step-by-step Guide (Updated for branch making)

- Open terminal, navigate to a approriate directory using `cd DirectoryName` and type `git clone https://github.com/shallowsmith/hydro_sense.git` to clone the repository.
- Type `git checkout` to see which branch you are on. You should be on the **main** branch.
- Type `git checkout -b <your-branch-name>` to create a new branch, try using checkout to see what branch you are on now.
- Edit the ROADMAP.md file using any text editor or IDE (Visual Studio Code recommended).
- Open terminal once again, navigate to `hydro_sense`, and type `cd backend` to navigate into /backend directory.
- Try typing `git status` to see which changes have been staged, which haven't, and which files aren't being tracked by Git. If you have checked in with the ROADMAP.md file then you will see it flagged stating that the file is modified.
- Type `git add ROADMAP.md` to stage the README.md file.
- Type `git commit -m "Your Comment"` to commit.
- Type `git push -u origin <your-branch-name>` to push your change to your remote branch.
- If prompted of user authentication (username and password), please check and read ["Creating a personal access token (classic)"](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic), ["Setting your Git username for every repository on your computer
  "](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git), ["Setting your commit email address in Git"](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git), to complete user authentication. You will need to type in your Personal Access Token for the password.
  - On github, you will be able to create a pull request from your created branch to the main branch. Please select _the main branch_ for the pull request. After that, DON'T PROCEED WITH MERGING, I (Lac) will do it.
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
