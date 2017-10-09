---
title: Beta Download
---


### 1.0b10 / September 29, 2016

#### New features
- **Context menus:** Right clicking on transactions now reveals a context menu. From there you can search for an email receipt, Google unfamiliar merchant names, copy transaction data, or find similar transactions.
- **Receipt search:** You can now easily search Gmail or Inbox for email receipts. Just right click on a transaction and select Search Gmail for Receipt.
- **⌘R to sync and ⌘F to search:** We added two keyboard shortcuts: one for syncing your transaction and account data and another for initiating a search.

#### Bugs squashed
- **Wrong institutions linked to certain bank buttons:** We'd had reports that people were experiencing issues logging in through the Charles Schwab and Fidelity buttons. This is now fixed and you should be able to log into both without issue.
- **Removing accounts under the same institution:** Previously, adding multiple accounts under one institution and then attempting to remove one caused Balance to crash. No longer! This is now fixed.

#### Design tweaks
- **Bank colors and logos:** We added custom header bars in the accounts tab for most common institutions. Let us know if your bank is missing a logo and we'll add it to our list.
- **New tab icons:** We redesigned the tab bar icons in Balance. They're now slightly less prominent and more uniform.
- **Renamed Feed to Notifications:** After much deliberation, we decided Notifications was a better name for this feature. We'll soon be adding an option to enable desktop notifications.



### 1.0b7 / August 22, 2016

#### New features
- **Feed:** We now have a first version of our feed system ready for testing. You can add a new rule by clicking on the gear icon &gt; Preferences &gt; Feed. Transactions that match a rule’s criteria will be added to the feed. For example, transactions with an amount of more than $100 and less than $500. Or any transaction with the word “Fee” in it.
- **Insights:** We have a couple of insights into your money. The first is the new merchants section which shows you the new people you spent money with each week or month. We find this really useful for quickly scanning our transaction history for potentially fraudulent transactions. The second is your total spent at various merchants. This is a great way to see where you’re spending the most money. We want to add many more interesting visualizations to the insights tab including a bunch of graphs. However, we want to make sure we have high data quality before showing you the graphs. We want to add the ability for you to exclude transactions from a graph if there is an issue. We would much rather not show you a graph than display something that you don’t trust.
- **Tokenized search:** In plain English, this means you can filter down searches with parameters. So if you wanted to search PayPal for transactions with James you would enter “James in:( PayPal)”. We also have token search by category:(), which can be activated by clicking on any of the categories of a transaction. If you want to search for specific amounts you can search with “more:($100) less:($1000)”. We’ll be adding UI to make this process a lot simpler.
- **Keyboard shortcuts:** You can now set a keyboard shortcut to pop open Balance. This can be adjusted in the preferences pane which you can access by clicking on the gear icon > Preferences... > General (or go ⌘ + ,). The default shortcut is ⌃ +  ⌥ + ⌘ + B (and if you don’t read Mac hieroglyphics, that means Control + Option + Command + B). You can also change tabs with ⌘ + 1 for accounts and 2, 3,4 for transactions, notifications & insights.
- **Expandable Account Cells:** When you click on an account’s balance you’ll see the number of transactions we have downloaded, the earliest transaction, and buttons to remove the account’s balance from your total balance or search or transactions that occurred in that account.

#### Design tweaks
- **A new app icon:** A dark ball for now. We are still thinking about what’s best.
- **Making it clear that Notifications and Insights are not live:** Thanks to Anand Sharma and Rori Baron for pointing out that the mockups we were presenting looked too real.
- **Replacing *•••••••* with *password* in the password entry field:** It was a little confusing.
- **Adjusted the palette:** The dark theme is a little clearer now. The contrast is better.

#### Behind-the-scenes changes
- **Check for updates on sync:** The app now checks for a new version every time you sync transactions.
- **Database encryption:** We are now encrypting all the financial data stored on your Mac. It is only accessible through the Balance app.



### 1.0b4 / July 8, 2016

#### Design tweaks
- **A new app icon:** A dark ball for now. We are still thinking about what’s best.
- **Making it clear that Notifications and Insights are not live:** Thanks to Anand Sharma and Rori Baron for pointing out that the mockups we were presenting looked too real.
- **Replacing *•••••••* with *password* in the password entry field:** It was a little confusing.

#### Behind-the-scenes changes
- **Check for updates on sync:** The app now checks for a new version every time you sync transactions.



### 1.0b3 / July 7, 2016

#### New features
- **Tokenized search:** In plain English, this means you can filter down searches with parameters. So if you wanted to search PayPal for transactions with James you would enter “James in:( PayPal)”. We also have token search by category:(), which can be activated by clicking on any of the categories of a transaction. If you want to search for specific amounts you can search with “more:($100) less:($1000)”. We’ll be adding UI to make this process a lot simpler.
- **Keyboard shortcuts:** You can now set a keyboard shortcut to pop open Balance. This can be adjusted in the preferences pane which you can access by clicking on the gear icon > Preferences... > General (or go ⌘ + ,). The default shortcut is ⌃ +  ⌥ + ⌘ + B (and if you don’t read Mac hieroglyphics, that means Control + Option + Command + B). You can also change tabs with ⌘ + 1 for accounts and 2, 3,4 for transactions, notifications & insights.
- **Expandable Account Cells:** When you click on an account’s balance you’ll see the number of transactions we have downloaded, the earliest transaction, and buttons to remove the account’s balance from your total balance or search or transactions that occurred in that account.

#### Bugs squashed
- **Update the balance:** Thanks to Andrew McCallister and Lachy Groom for pointing out the disparity between the balance displayed in Balance and the actual balance in their accounts. A huge thank you to Sam Duke for debugging.
- **Selecting the balance:** Thanks to Toby Wilcocks for pointing out that when you selected the total balance it turned grey. That was a weird one!
- **Some transactions with a location were not showing a map:** Thanks *again* to Toby for pointing out that some transactions that had location data were not showing a map when he clicked on them. Very helpful indeed!
- **Search crashes:** Thanks to Andrew McCallister for finding lots of weird search crashing issues. We found the array that contained the new array of the previous array and we said: hooray!

#### Design tweaks
- **Matching the mockups:** A huge amount of energy was put into getting the look of app to match the quality of our design mockups. Thanks to Tom Moor and Brian Lovin for their comments and encouragement in this area.
- **Hidden total bar when you are viewing a single account:** We removed the total number of transactions and the amount it represented until we have a design that’s not confusing. Thanks again to Andrew McCallister for highlighting that usability issue.
- **Shorter section headers for accounts:** They were a little too tall and so we cut them down to size.
- **Empty search state:** When you search for something and we can’t find any transactions that match it, we show you the earliest transaction that we currently have access to.
- **Refine the download button:** We made it clear that the button is downloading your transactions from your bank account.
- **Display the available balance:** We were showing you the balance of your account without pending transactions subtracted. Now we show you the spendable money in your account, which is much more useful.
- **Changed the app name from Bal to Balance:** That was a little oversight from us. Bal was the initial name of the project in our Dropboxes.
- **A revamped account adding flow:** We have made the process of adding an account a lot cleaner. We are also explaining our security measures right inside the account connection flow.
- **Added tabs for Notifications & Insights:** These are two huge feature sets that we’ll be rolling out in the next month.
