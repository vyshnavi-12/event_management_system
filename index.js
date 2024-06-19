var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()



app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name=req.body.name;
    var mobileno=req.body.mobileno;
    var email=req.body.email;
    var password=req.body.password;
    var confirmpassword=req.body.confirmpassword;

    var data={
        "name":name,
        "mobileno":mobileno,
        "email":email,
        "password":password,
        "confirmpassword":confirmpassword
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('login.html')

})

app.post("/sign_upA",(req,res)=>{
    var name=req.body.name;
    var mobileno=req.body.mobileno;
    var email=req.body.email;
    var clubcode=req.body.clubcode;
    var password=req.body.password;
    var confirmpassword=req.body.confirmpassword;

    var data={
        "name":name,
        "mobileno":mobileno,
        "email":email,
        "clubcode":clubcode,
        "password":password,
        "confirmpassword":confirmpassword
    }
    db.collection('admins').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('loginA.html')

})

app.post("/ccd_register", async (req, res) => {
    try {
        var name = req.body.name;
        var class1 = req.body.class1;
        var branch = req.body.branch;
        var rollno = req.body.rollno;
        var email = req.body.email;
        var eventname=req.body.eventname;
        var no_of_participants = req.body.no_of_participants;

        // You should perform validation and sanitization of user input here

        var data = {
            "name": name,
            "class1": class1,
            "branch": branch,
            "rollno": rollno,
            "email": email,
            "eventname":eventname,
            "no_of_participants": no_of_participants
        };

        await db.collection('ccd_registrations').insertOne(data);
        console.log("Record Inserted Successfully");

        return res.redirect('ccd.html');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post("/cosc_register", async (req, res) => {
    try {
        var name = req.body.name;
        var class1 = req.body.class1;
        var branch = req.body.branch;
        var rollno = req.body.rollno;
        var email = req.body.email;
        var eventname=req.body.eventname;
        var no_of_participants = req.body.no_of_participants;

        // You should perform validation and sanitization of user input here

        var data = {
            "name": name,
            "class1": class1,
            "branch": branch,
            "rollno": rollno,
            "email": email,
            "eventname":eventname,
            "no_of_participants": no_of_participants
        };

        await db.collection('cosc_registrations').insertOne(data);
        console.log("Record Inserted Successfully");

        return res.redirect('cosc.html');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post("/nss_register", async (req, res) => {
    try {
        var name = req.body.name;
        var class1 = req.body.class1;
        var branch = req.body.branch;
        var rollno = req.body.rollno;
        var email = req.body.email;
        var eventname=req.body.eventname;
        var no_of_participants = req.body.no_of_participants;

        // You should perform validation and sanitization of user input here

        var data = {
            "name": name,
            "class1": class1,
            "branch": branch,
            "rollno": rollno,
            "email": email,
            "eventname":eventname,
            "no_of_participants": no_of_participants
        };

        await db.collection('nss_registrations').insertOne(data);
        console.log("Record Inserted Successfully");

        return res.redirect('nss.html');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post("/nssA_register", async (req, res) => {
    try {
        var name = req.body.name;
        var class1 = req.body.class1;
        var branch = req.body.branch;
        var rollno = req.body.rollno;
        var email = req.body.email;
        var eventname=req.body.eventname;
        var no_of_participants = req.body.no_of_participants;

        // You should perform validation and sanitization of user input here

        var data = {
            "name": name,
            "class1": class1,
            "branch": branch,
            "rollno": rollno,
            "email": email,
            "eventname":eventname,
            "no_of_participants": no_of_participants
        };

        await db.collection('nssA_registrations').insertOne(data);
        console.log("Record Inserted Successfully");

        return res.redirect('nssA.html');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post("/ccdA_register", async (req, res) => {
    try {
        var name = req.body.name;
        var class1 = req.body.class1;
        var branch = req.body.branch;
        var rollno = req.body.rollno;
        var email = req.body.email;
        var eventname=req.body.eventname;
        var no_of_participants = req.body.no_of_participants;

        // You should perform validation and sanitization of user input here

        var data = {
            "name": name,
            "class1": class1,
            "branch": branch,
            "rollno": rollno,
            "email": email,
            "eventname":eventname,
            "no_of_participants": no_of_participants
        };

        await db.collection('ccdA_registrations').insertOne(data);
        console.log("Record Inserted Successfully");

        return res.redirect('ccdA.html');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post("/coscA_register", async (req, res) => {
    try {
        var name = req.body.name;
        var class1 = req.body.class1;
        var branch = req.body.branch;
        var rollno = req.body.rollno;
        var email = req.body.email;
        var eventname=req.body.eventname;
        var no_of_participants = req.body.no_of_participants;

        // You should perform validation and sanitization of user input here

        var data = {
            "name": name,
            "class1": class1,
            "branch": branch,
            "rollno": rollno,
            "email": email,
            "eventname":eventname,
            "no_of_participants": no_of_participants
        };

        await db.collection('coscA_registrations').insertOne(data);
        console.log("Record Inserted Successfully");

        return res.redirect('coscA.html');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post("/contactus",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var message=req.body.message;

    var data={
        "name":name,
        "email":email,
        "message":message,
    }
    db.collection('contactus').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Sent Successfully");
    });

    return res.redirect('contact.html')

});

app.post("/chathere",(req,res)=>{
    var message=req.body.message;

    var data={
        "message":message,
    };

    console.log("Attempting to insert data:", data);

    db.collection('chat').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Sent Successfully");
    });

    return res.redirect('ccd.html')

});

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
});

const User = mongoose.model('users', UserSchema);

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });

    try {
        const user = await User.findOne({ name: username });
        if (!user) {
            return res.status(401).send("<script>alert('Invalid username'); window.location.href = '/login.html';</script>");
        }

        if (user.password !== password) {
            return res.status(401).send("<script>alert('Invalid password'); window.location.href = '/login.html';</script>");
        }

        return res.send("<script>alert('Logged in successfully!'); window.location.href = '/code.html';</script>");
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

const AdminSchema = new mongoose.Schema({
    name: String,
    password: String,
    clubcode: String, // Adding the clubcode field
});

const Admin = mongoose.model('admins', AdminSchema); // Changed the collection name to 'admins'

app.post('/loginA', async (req, res) => {
    const { username, password, clubcode } = req.body;

    try {
        const admin = await Admin.findOne({ name: username });
        if (!admin) {
            return res.status(401).send("<script>alert('Invalid username'); window.location.href = '/loginA.html';</script>");
        }

        if (admin.password !== password) {
            return res.status(401).send("<script>alert('Invalid password'); window.location.href = '/loginA.html';</script>");
        }

        if (admin.clubcode !== clubcode) {
            return res.status(401).send("<script>alert('Invalid clubcode'); window.location.href = '/loginA.html';</script>");
        }

        return res.send("<script>alert('Logged in successfully!'); window.location.href = '/codeA.html';</script>");
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});



console.log("Listening on PORT 3000");