# Hospital Patient Register Portal Backend :

##### Technologies Used : PostgreSQL,Express,Node.js.

#### Dev Tools : VS Code,Github,Render,ElephantSQL

#### Libraries : Prisma,joi

#### Web App Development Approach :

##### Backend :

--To store the Data, PostgreSQL from ElephantSQL which is Cloud  DB has been used.

--–For creating the tables in PostgreSQL an ORM called Prisma Migrate is used. 

--For the validation of the input data from the client an npm package called 'joi' has been implemented.

--The Backend is Built on Express framework with Node.js runtime.

-- All the errors are handled with proper responses.

#####  Schema Of PostgreSQL Tables :

##### Table 1. "hospitals" :
#####  Attributes 
 - hospitalid     String    @id @db.VarChar(255) @unique
 - hospitalname   String    @db.VarChar(255) @unique

##### Table 2. "psychiatrists" :
#####  Attributes 
 - psychid           String    @id @db.VarChar(255) @unique
 - psychname         String    @db.VarChar(255)
 - hospitalid        Int       @unique

##### Table 3. "patientdetails" :
#####  Attributes 
 - patientid            String    @id @default(autoincrement())
 - patientname          String    @db.VarChar(255)
 - address              String    @db.VarChar(255)
 - email                String    @db.VarChar(255) @unique
 - phoneno              String    @db.VarChar(255) @unique
 - password             String    @db.VarChar(255)
 - patientphotolink     String    @db.VarChar(255)
 - psychid              String    @db.VarChar(255)
 - hospitalid           String    @db.VarChar(255)

### API End Points :  For this Endpoints add the Domain URL.Refer to Hospital Patient Register Portal.Postman.collection file in repository

To add the patient data (POST) :
-- https://hospital-patient-register-portal.onrender.com/patients/addpatient

To retrieve the hospital data (GET) :
-- https://hospital-patient-register-portal.onrender.com/hospitals/gethospitaldata/4

### Steps Required To Run Applications :

##### Backend 

--"npm install"
     For install all the depencies and packages in the "node-modules" folder.

--"npm install --force"
    If any version conflicts use "--force" flag to  install all the depencies and packages in the "node-modules" folder.

--"node index.js"
   To start and run the server.  
   Open http://localhost:8080 to view it in your browser.

### Deployed Links :

#### --Backend : https://hospital-patient-register-portal.onrender.com/

### Attaching The Postman API Documentations : Refer Github Repository

