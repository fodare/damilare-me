---
title: Automating windows apps startup using a batch script and Python commands
author: Dare O.
date: 2022-06-11
tag: Lessons
---

<h2 style="padding-bottom:1rem">Introduction</h2>

I often have to click around applications to prepare myself during the start of my work shift, so I thought of a way to automate this process by creating a simple python command that can loop through a list of application dir and start them.

This code is a template program to help start all desired applications automatically with a waiting period between each iteration using a .bat executable file and save time clicking around applications (More time for a cup of tea).

<h2 style="padding-bottom:1rem">Prerequisite</h2>

To run this program you would need to have the applications listed below installed on your laptop or desktop computer.

- <a className="post-links" target="_blank" href="https://git-scm.com/downloads/"> *Git*.</a>
- <a className="post-links" target="_blank" href="https://www.python.org/downloads/"> *Python*.</a>

<h2 style="padding-bottom:1rem">Usage</h2>

From your favourite terminal, Clone this git repo using the command below:

<div className="code-highlight">
<pre className=code-text>
git clone https://github.com/fodare/shift-start.git
</pre>
</div>

Once the repo is cloned, navigate to the cloned dir using the command:

<div className="code-highlight">
<pre className=code-text>
cd shift-start
</pre>
</div>

Using your favourite code editor, modify the start.py file to add the path to the local applications you would like to start automatically. Example below:

<div className="code-highlight">
<pre className=code-text>
app_list = {r"c:\path to app.exe 1",
            r"c:\path to app.exe 2",
            r"c:\path to app.exe 3",
            r"c:\path to app.exe 4",
            r"c:\path to app.exe 5",
            r"c:\path to app.exe 6",
            r"c:\path to app.exe 7"}
</pre>
</div>

Further down the code, you can modify the sleep period to either increase or decrease sleep period.

<div className="code-highlight">
<pre className=code-text>
time.sleep(10) # Wait for 10s before starting the next application in the list.
</pre>
</div>

Save the program and modify the script.bat file. You can change the file name if desired.

Modify template instruction by adding paths to where your python.exe file is stored and path to where your python program is stored. Example below:

Default template

<div className="code-highlight">
<pre className=code-text>
"path to where your python.exe file is located" "path to where your executable python code is stored."
</pre>
</div>

Will change to

<div className="code-highlight">
<pre className=code-text>
"c:\Python39\python.exe" "c:\Users\demo\Desktop\start.py"
</pre>
</div>

<h2 style="padding-bottom:1rem">Run .bat command</h2>

To reduce the number of clicks, you can add the .bat file to your desktop, so when you are resuming your shift, you can double-click the .ba file to execute the python program.
