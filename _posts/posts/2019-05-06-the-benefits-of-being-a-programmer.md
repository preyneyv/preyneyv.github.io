---
layout: blog
category: blog
published: true
title: The Benefits of Being a Programmer.
tags: []
---
Boring tasks. We've all had to do them before.

- "Create 340 email accounts, one for each student."
- "We need around 150 QR codes! And the event is in 2 days!"

Those are two tasks that I was assigned at school. But, there's one problem: I hate boring work (and I'm assuming most people do, hence its name). Now your average Joe would surrender to his destiny and sit down for 8 hours, doing what he has to do. But not this Joe. This Joe cracks his knuckles in eagerness and anticipation.

"But Pranav," I hear you ask, "didn't you just say you didn't like this type of task?"

Well, yes, I did. But I'm not eager for the task. As a programmer, instead of spending 8 hours manually typing out each first name, last name and email ID, I'd spend 8 hours typing out code to type out each first name, last name and email ID. And I find that more enjoyable.

## The First Task

At my school, we use Google Suite for Gmail, Drive, Docs, etc. Or at least, the teachers did. At the start of grade 11, a year after the school introduced iPads, I suggested, "Why don't we give students email IDs as well?" I thought that it would help everyone better utilize the iPads that we spent so much for. The task of creating these is monotonous. So, I turned to Python for help.

Luckily, the school had all their students' first names, last names and grades (and some other information) in an Excel sheet. If it were on a paper register, I'd be toast. I extracted just the columns I cared about and saved it as a .csv file. After poking around in the Google Admin panel, I saw that the panel supported bulk import via a specific structure of .csv file. It seemed simple enough - I'd write a Python script to take in the school's data file and spit out a file mirroring the structure needed by Google. But, as I should have known, nothing is ever that simple.

For the email IDs (which obviously weren't present in the data file), I decided to go with a simple enough format: `[first][last]@lsb.edu.in`. A little bit of Googling and some CSV readers and writers later, I had what I thought should have been a functioning script. I run it and... error. Apparently, some people in the data file didn't have a last name. I didn't even consider that as a possibility! Some error handling later and we have a file that Google Admin accepts.

Success!

## The Second Task

Recently, my school had the privilege of hosting an IC3 Regional Forum. It was absolutely amazing and it was one of the largest events held at my school. Naturally, in the weeks leading up to it, there was a flurry of planning and panic. Amidst this storm, my director sent me an email showcasing a QR code that he had received for a previous event. The idea was that it would speed up the long queues at the registration desk in front of every event. Brilliant!

Similar to the previous task, I didn't want to sit down and make QR codes for each and every individual delegate. Python to the rescue! See, the nice thing about code is that it doesn't have feelings (yet). It will do the same task over and over again if you need it to. I requested the events team for the delegates' details and I received them in the form of a Google Sheet.

The same drill: Download the sheet, delete the columns I don't care about, save as csv. I installed a QR code generating library for Python, then got to work. First, I decided to work on code to make a single image. Easy enough, the library was super developer-friendly. I then thought, hey, why have these normal, dull, square QR codes when you can make them unique?

{% include image.html
	src="/media/309qzt.jpg"
	alt="Drake QR code meme"
	caption="QR code blurred to hide information. Sorry!"
%}

So I brought out my image processing skills that I picked up at my internship and got to work making the QR code look much nicer, without affecting its ability to be scanned. Did you know that you can cover about 30% of the code and it will still scan correctly, without any problems?

Once I got the look I was going for, all that was left to do was to throw everything in a loop and voilà! Now I had 150 QR codes and... 150 people... to... email... them to. Dangnabbit.

My mind first went to mail merge. Now I'm not a fan of Outlook, but in dire times, you turn to even your worst enemy. Unfortunately, Outlook doesn't support changing the attachment per person you're send to, so that's a no-go. Idea #2 was a plugin for Google Sheets that does support mail merge with changing attachments, but I was smacked with a paywall limiting the number of accounts to 50.

Option 3, and what I ended up doing, was writing my own mail merge script in Python. Now, do note, I've never sent an email from Python before, and that would be fine, except that these emails were going to important people from all around the world. The school's image (or at least a part of it) was in my hands. With the time running out, I wrote a script that I thought would work for sending emails and tested it by sending from my school account to my personal one. It worked! So I informed my counsellor (from whom the emails would be going) that I had the code ready and that if he gave me his account details, I could send the emails.

He responded very quickly with his account details and I put them in the script. Fingers crossed, I ran the same test case and... error. It turns out that Gmail considered my script suspicious activity. Slightly offended, I proceeded to ask my counsellor to allow unsafe apps (you have to do this in order to use most unofficial email clients with Gmail). He did so but it still wouldn't work! It turns out that the script seemed so suspicious that Google decided to suspend his account! Unfreezing it was fairly simple (he just had to change his password) and after that, we sent the emails.

It was the most stressful thing ever, waiting and watching each checkmark appearing on my terminal. I had already tested this code many times over, but computers have a funny way of breaking at the worst time possible. Lucky me, nothing went wrong, though two emails failed to deliver (bad email IDs). It was a win-win: I didn't have to spend ten hours in front of a computer writing emails and the delegates had an effortless registration process.
