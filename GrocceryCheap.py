#scrape major groccery stores for prices and compare them to find the cheapest one

#get the items in the list and store them in a list
#loop through the list and search for the item in the stores

import requests, bs4, re

#list of items to search for are in the webapp.html file in the same directory make dynamic request to get the list of items 
#and store them in a list

# file:///home/sakomm/Documents/Documents/Groccery/webapp.html#cheapest-location 
#GET THE CONTENTS OF //*[@id="grocery-lis