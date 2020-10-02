## Password generator

## Description

This program asks users a series of five questions:
    (a) How many characters?
    (b) Do you want lower case letters?
    (c) Do you want upper case letters?
    (d) Do you want numbers?
    (e) Do you want special characters?

The program generates a password based on these specifications and displays a password. This program is useful for users who need to have very secure passwords and want something that isn't easily guessed. 

## Generating user interface

1. Create a popup that asks the user for how long the password length should be, then convert it into a number

2. Validate that length is between 8 and 128

3. Added series of pop up questions and redirects for invalid responses

## Creating a password in javascript

4. Made a function to make random letters (started with all lower case)
    Adopted function from: https://www.geeksforgeeks.org/generate-random-alpha-numeric-string-in-javascript/

5. Making a variable to add together the strings that the person chose to add together to be applied to the function from #4

6. The javascript generates a password, stored as a string called genPasswd

7. Removed the parameters from the function definition as they will not change while the page is active

8. Combined the function that I made in 4 with that given from the repo such that it would print to the screen and not just the console log 


                        



