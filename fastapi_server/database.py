<<<<<<< HEAD
#it holds the information about db and collections
=======
#it holds the information about db and colection
>>>>>>> a64e54012ad105d451a49564aac115ce9828ca6d

from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
client=MongoClient(os.getenv("mongo_url"))
<<<<<<< HEAD
db=client["vignan"] #creating a database in db
student_collection=db["student"]
staff_collection=db["staff"]

=======
db=client["vignan"]    #create a database in db
student_collection=db["student"]
staff_collection=db["staff"]


>>>>>>> a64e54012ad105d451a49564aac115ce9828ca6d
