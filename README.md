# KeepMullAnalysis

This repo explores how Once Upon a Time in the Legacy Elves deck effects the keepability of opening 7 card hands.

# How To Run

This project is a Deno project using a JavaScript runtime environment.

To run this project: 
1. Open up a command line interface inside the "KeepMullAnalysis" directory (folder)
2. Add your Elves decklist to the "userDeckList" file.
3. Choose the sample size in the "iterationLimit" file.
4. Save all changes
5. Run this command in the command line "deno run --allow-net main.ts"

The output should look something like this:

Keep/Mull Count:
{ KeepCount: 83650, MullCount: 16350 }
Keep Percentage:
83.65
Mull Percentage:
16.35
DONE!

You can even add and subtract data filtering conditions in the "analyzeData" file. Lines 9-11 check for IMS and OUaT, less than 5 lands, and hand quality. Tweak these conditions on and off by commenting the code lines out.


# OUaT Spreadsheet Data

https://docs.google.com/spreadsheets/d/1WhCxN4tLj7-79vlnPexeYtUd-mkQUoOIyYDGcebulAA/edit?usp=sharing
