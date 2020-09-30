import pymongo
import dns
import main

client = pymongo.MongoClient("mongodb+srv://minasie:minas123@cluster0.xfjxd.mongodb.net/test?retryWrites=true&w=majority")
db = client['test']
col = db['test1']


# print(db.list_collection_names())
# pl = main.ProductLinks()
# wl = main.whiskyList(pl)
whisky = {
            'name': "name",
            'discription':"discription",
            'rating': "rating",
            'price': "price",
            'review':"review"
        }
# x = col.insert_many(wl)
y = col.delete_one(whisky)
print(y)

# print(pl)

