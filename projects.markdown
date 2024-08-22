---
layout: page
title:  "Projects"
permalink: /projects
---

## Spreadterm (Fall 2023)

[Spreadterm][spreadterm] is a terminal based spreadsheet application capable of processing numerical and boolean expressions,
storing data (strings, numbers, booleans and cell references) within cells, and accessing data within other cells. The project is written in Rust
and uses ncurses bindings to display it to the terminal. The project was creted for a certain CS class under a different name, however
the professor requested that when I posted it online I did not include the original name or the name of the class. 

## Rimplex (Fall 2022)

[Rimplex][rimplex] is a complex number calculator coded in Java and utilizing Java
Swing for graphics. The calculator is capable of performing various mathematical on complex numbers,
which can be inputted both via the keyboard as well as the number pad. This project was done as part of
the Software Engineering course (which I took in the Fall of 2022) as the second half of the semester, in which the professor took
on a role as product owner, and my group mates and I (there were about 5 of us) participated in three
two week long scrum sprints, including creating stories, epics and plotting out how long we thought 
various stories would take. My primary role in this project was in the backend, creating the code for 
managing the settings and evaluating the complex arithmetic, which can be seen as being done by my school 
github account, bushmaaj.

## Pacman AI Agent (Spring 2024)

As part of the Artificial Intelligence class that I have taken here at JMU, I created several AI algorithms for Pacman to run in Python, such as
an A*, Breadth-First Search, Depth-First Search, a Reflex Agent, Minimax (with and without Alpha-Beta Pruning), Expectimax, and QLearning (including the Epsilon-Greedy 
approach for learning the Q-values). The code for these approaches is based primarily in files that both heavily rely on the class-specific API and professor-written
code, so the project is not available on my GitHub, but certain code samples can be provided.

## DHCP Server and Client (Fall 2023)

As part of my CS 361 (Computer Systems II) class, I wrote a DHCP client and server pair in C that was capable of leasing and managing up to 10 IP addresses to the client, which requested them
according to the DHCP specifications. Certain code samples available upon request.

## Dukesh (Fall 2023)

Dukesh is a shell written in C that includes built-in utilities such as cd, echo (capable of parsing newlines and environment variables), pwd, quit, which, export, 
unset, and echo. It is able to save the return code of the previous run utility or binary with $?. As well, the environment contained standalone utilities such as ls, 
head, and env. Certain code samples available upon request.

## Y86 (Spring 2023)

Y86 is a smaller and simpler version of the x86_64 architecture. Throughout my CS 261 (Computer Systems I), I created a toy CPU emulator in C that was capable of reading
Y86 assembly code, reading in binary files, printing out data, and performing operations on a virtual memory space. Certain code samples available upon request.

[rimplex]: https://github.com/meepcode/Rimplex
[spreadterm]: https://github.com/meepcode/Spreadterm
