from sentence_transformers import SentenceTransformer, util
model = SentenceTransformer('all-MiniLM-L6-v2')

# Two lists of sentences
sentences1 = ['The First World War created economic and political situation 1. eXPENDITURE: There was a new in India. a huge increase in the defense expenditure which was financed by war loans duties were introduced.. and increasing taxes: custom raised and income tax was introduced.']

sentences2 = ['The war created a new economic situation, It led to a huge increase in defence expenditure and increasing taxes, Customs duties were raised, Income tax introduced, Through the war years prices increased-doubling between 1913 and 1918, Leading to extreme hardship for the common people.']

# Compute embedding for both lists
embeddings1 = model.encode(sentences1, convert_to_tensor=True)
embeddings2 = model.encode(sentences2, convert_to_tensor=True)

# Compute cosine-similarities
cosine_scores = util.cos_sim(embeddings1, embeddings2)

# Output the pairs with their score
for i in range(len(sentences1)):
    print("{} \t\t {} \t\t Score: {:.4f}".format(
        sentences1[i], sentences2[i], cosine_scores[i][i]*100))