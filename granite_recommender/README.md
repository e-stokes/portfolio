# Problem Statement:

Can we recommend a granite based on what the customer likes about other granite samples?


# Data

All data was acquired through a local business to build a recommender for their products. I then filtered through the data to determine which images were most suitable to be used in a Convolutional Neural Network(CNN).


# Challenges

1. No single slab of granite is alike  
  
  
2. There are thousands of different types of granite with various origins (countries)  
  
  
3. Granite names are not entirely reliable since they can be named for competitive advantages


# Building a Recommender

I trained a CNN using various images and tested the model against a pre-trained CNN model. I created six classes by color (beige, black, blue, green, gold, and white) with approximately 100 images per class to teach the CNN model. I was able to increase the classification ability 282% above the baseline. Due to size limitations of GitHub I used the pre-trained model since it is more lightweight for the situation, although the custom trained model would preform better given more data and time. Both models performed relavtively the same so I used the pre-trained model to build the recommender as I only needed the final dense layer and not the output of the model. I extracted the features to use for cosine similarity to identify certain features of different granite slabs. The recommender takes those similarities and compares the selected granite slab to images within a directory to determine which slabs are similar to the product selected. I used the cosine similiarity of the CNN features to match the most similar granite samples. The recommender utilizes Python Image Library and Numpy to process images into an array to create a dataframe of cosine similarity.The recommender function then takes an index input and returns the product with five of the most similar products.


# Conclusions

Despite the size limitations and the challenges above, I was able to create a usable recommender that will recommend similar products based on the product that is currently being viewed by a customer.


## Business Insights

This recommender's effect on the current business model:  
  
1. Decrease the time spent processing each inventory item to recommend by employees  
  
2. Increases the customer experience on the website by recommending products by appearance  
  
3. Allows sales representatives to access a tool to match a given product (from competitor or customer) to products within their inventory


