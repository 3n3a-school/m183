# A06 - CSRF Exploitation

In the `index.html` file all the forms which were given can be exploited.

## Change Password

This form was exploited simply by getting the Username and then tricking the
user into thinking they're reporting a vulnerability, but instead changin their
password :).

## Change Email

It took me a few minues to find the function which generates the CSRF-Token in the
original application. Essentially all this function does is take the current time and
encode it with the SHA-256 algorightm, and then taking only the first 20 characters of 
the string.

## Creating a Blog Post

tbd
