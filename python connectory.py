from pymongo import MongoClient

client = MongoClient("mongodb+srv://minas:Y7zOCPUxJPVz30hQ@api-test.9doqc.mongodb.net/<dbname>?retryWrites=true&w=majority")

dbs = client.database_names()
# for db in dbs:
#     print(str(db))

db = client.get_database("minas")
col = db.get_collection("courses")
courses = col.findAll()
for movie in courses:
    print(movie)