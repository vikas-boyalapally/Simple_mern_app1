#it holds the information about db and collections

from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
client=MongoClient(os.getenv("mongo_url"))
db=client["vignan"] #creating a database in db
student_collection=db["student"]
staff_collection=db["staff"]

