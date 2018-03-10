# EGift-Voucher
The app starts with a login screen which connects with the server for verification.
On sucessfull login,the user will be navigated to a list page which contains a list of Gift card based upon the category
This list json is fed from the server based upon the cateogry.
Upon Click on any item in the list a detailed page will pop up prompting the user to enter from,to,message, quantity and delivery
On clicking proceed Successfull sent message will be shown to the user.

This is a progressive web app which works even in offline mode.
So the Service worker will be caching all the images,libraries and network calls using the fetch listener.

Being a PWA it can be viewed in mobile as well. Using Port Forwarding the same link can be viewed in broswer window of the mobile device.

The front end is built using Ionic material,angular and back end using express.

Screenshots are available under screenshot folder.
