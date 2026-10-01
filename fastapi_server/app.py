from fastapi import FastAPI
<<<<<<< HEAD
from models import Student,staff
from database import student_collection,staff_collection
app=FastAPI()
#convert mongodb document into JSON Formate
=======
from models import Student,Staff
from database import staff_collection,student_collection
>>>>>>> a64e54012ad105d451a49564aac115ce9828ca6d


app=FastAPI()
def student_details(Student):
    return{
<<<<<<< HEAD
        "id":str(Student["id"]),
        "name":(Student["name"]),
        "email":(Student["email"]),
        "age":(Student["age"]),
        "marks":(Student["marks"]),
    }


def staff_details(Staff):
    return{
        "id":str(Staff["id"]),
        "name":(Staff["name"]),
        "email":(Staff["email"]),
        "designation":(staff["age"])
    }


=======
        "id":str(Student["_id"]),
        "name":Student["name"],
        "email":Student["email"],
        "age":Student["age"],
        "mark":Student["mark"]
    }
def staff_details(Staff):
    return{
        "id":str(Staff["_id"]),
        "name":Staff["name"],
        "email":Staff["email"],
        "designation":Staff["designation"]
    }
#STUDENT
>>>>>>> a64e54012ad105d451a49564aac115ce9828ca6d
@app.get("/getstudents")
def getstudents():
    students=student_collection.find()
    return [student_details(student) for student in students]

<<<<<<< HEAD

@app.post("/register")
def register(stu:Student):
    result=student_collection.insert_one(stu.model_dump())
    #model_dump is used to convert object data into json data
    return {"message":"data is inserted"}


=======
# student register
@app.post("/register")
def register(stu:Student):
    result=student_collection.insert_one(stu.model_dump())
    return {"message":"data is inserted"}




>>>>>>> a64e54012ad105d451a49564aac115ce9828ca6d
@app.put("/updateprofile")
def updateprofile():
    return "update profile is called"

@app.delete("/delete")
def delete():
    return "delete page is called"

@app.get("/getstudentDet/{userid}")
def getstudentDet(userid:int):
    return {"user_id":userid}    

@app.get("/getstudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return {"page":page,"limit":limit}

<<<<<<< HEAD

@app.get("/getstaff")
def getstaff():
    staff=staff_collection.find()
    return [staff_details(staff) for staff in staff]



#staff register
@app.post("/staffregister")
def register(stu:staff):
    result=staff_collection.insert_one(stu.model_dump())
    #model_dump is used to convert object data into json data
=======
#================================satff ===================================

@app.get("/getstaff")
def getstaff():
    staffs=staff_collection.find()
    return [staff_details(staff) for staff in staffs]


@app.post("/staffregister")
def register(stu:Staff):
    result=staff_collection.insert_one(stu.model_dump())
>>>>>>> a64e54012ad105d451a49564aac115ce9828ca6d
    return {"message":"data is inserted"}
