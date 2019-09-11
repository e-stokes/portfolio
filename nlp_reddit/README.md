# Reddit Natural Language Processing


## Problem Statement:
Can we determine whether a post on Reddit.com will be found in Fantasy Hockey or the Official NHL subreddit?


# Data Gathering:

In order to solve our problem statement, we first need to gather the data. To do this I used BeautifulSoup to scrape the subreddit of Fantasy Hockey and NHL. The process of scraping data from Reddit involves using a function that will periodically scrape information and return it as a dataframe. The data collected is scraped as json format originally and using the pandas library, we use this to convert it into a dataframe.

# Data Cleaning:
Now that we have our data in a dataframe, we need to clean it up so that we can use it effectively. Our data has a lot of columns, they have useful information, however it is not useful for our Natural Language Processing model. So in the cleaning process I dropped all data columns except for 'selftext', 'title', and 'subreddit'. These three columns contain the information that we need for determining the location of which subreddit a post will likely end up. 

Starting out in our data cleaning involves getting rid of null and empty string values. Once we take care of that, it is all about getting rid of the noise that miscellaneous string characters can cause when using our NLP model. I used Regular Expressions to remove any unwanted string characters in our data. With our data now cleaned, I then concatenated the two subreddit dataframes together to make one single dataframe. Once concatenated, I used pandas get_dummies feature to biarnize the subreddit column into one column. This leaves us with a data frame containing three columns, ready to begin modeling our data.

# Modeling:

It may seem strange to model before exploring our data, but we want our model to give us the features it sees as the strongest candidates for predicting which subreddit will contain what posts. The modeling process we want to take is using Pipeline and Gridsearch to maximize the amount of models we can fit at one given time. This will reduce the amount of leg work we will have to do during this phase. Our models are running multiple parameters within a Count Vectorizer, TfidfVectorizer, and using two different classifiers: Multinomial Naives Bayes and RandomForest. The Vectorizers will basically numerate our words within selftext and title so that we can basically get a count. It does this by Tokenizing them (a fancy way of saying that it lists them) and from there our classifiers will determine the importance of those words in how they relate to predicting our subreddit. 


# Exploratory Analysis:
Now that we have run models, we can see and plot words that have greatest impact on whether a post will be found in the Fantasy Hockey subreddit or the Official NHL. The words I found interesting that Random Forest picked up were: "needs" , "joined", "kid", and "teammate". The other occuring words were actual player names, all these words would easily be found in both subreddits, so we can see how they would overlap and make it difficult for the model to predict with great accuracy. As for Multinomial Naives, the words I found interesting were: "relevent", "devils", "leaguesafe", "players", and "pool". I find these words to be very interesting as I sense the models favored one subreddit over the other. For instance it seems that Random Forest would have favored the Official NHL while the words from Naives Bayes seem to favor the Fantasy subreddit. I believe this because the language used in Naives Bayes "relevent" and "pool" would suggest that the player is no longer relevent for the fantasy team, and pool sounds like it is referring to money that the fantasy league has "pooled" together. The words from Random Forest learn to the idea that someone "joined" the team or "teammate" could refer to a player on a particular team. Obviously all these words can be found in both subreddits, but we cannot ignore the strong possibility of them favoring the opposite subreddits.

# Conclusion:

Based on my modeling, analysis of the data, and the strong relation of the subreddits. I conclude that we have a good model. Our model is able to predict with 88% effectiveness which subreddit a particular post would be categorized. I am surprised the model is able to identify some of the things we as humans would also interpret to be one subreddit vesus another subreddit. Having this insight into our data, can allow us to build more models on other subreddits and expect to recieve similar results.


# Recommendations:
For a company, how can I benefit from this data?

1. This model can help us determine the approximate user base that will view our content.

2. Knowing if a post we make could possibly be popular enough in start trending, and in return create interest for new users or returning users.

3. Allows us to gauge advertisements around the correct subreddit being visted by the user.


### Sources:
Photo sources:

Photo by Chris Liverani on Unsplash 

Photo by Jerry Yu on Unsplash 

Photo by Con Karampelas on Unsplash 

wikipedia website: https://en.wikipedia.org/wiki/Reddit