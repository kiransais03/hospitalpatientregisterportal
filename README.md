# Hospital Patient Register Portal Backend :

##### Technologies Used : PostgreSQL,Express,Node.js.

#### Dev Tools : VS Code,Github,Render,ElephantSQL,Prisma

#### Web App Development Approach :

##### Backend :

--To store the Data, PostgreSQL has been used.

--–For creating the tables in PostgreSQL an ORM called Prisma Migrate is used. 

--The Backend is Built on Express framework with Node.js runtime.

#####  Schema Of PostgreSQL Tables :

##### Table 1. "hospitals" :
#####  Attributes 
  hospitalid     Int       @unique
  hospitalname   String    @db.VarChar(255) @unique

##### Table 2. "psychiatrists" :
#####  Attributes 
  psychid           String    @db.VarChar(255) @unique
  psychname         String    @db.VarChar(255)
  hospitalid        Int       @unique

##### Table 3. "patientdetails" :
#####  Attributes 
  patientid            String    @db.VarChar(255) @unique
  patientname          String    @db.VarChar(255)
  address              String    @db.VarChar(255)
  email                String    @db.VarChar(255)
  phoneno              String    @db.VarChar(255)
  password             String    @db.VarChar(255)
  patientphotolink     String    @db.VarChar(255)
  psychid              String    @db.VarChar(255)
  hospitalid           String    @db.VarChar(255)

### API End Points :  For this Endpoints add the Domain URL.Refer to Filemanger.Postman.collection file in repository


### Steps Required To Run Applications :

#### Backend :

--"npm install"
     For install all the depencies and packages in the "node-modules" folder.

--"npm install --force"
    If any version conflicts use "--force" flag to  install all the depencies and packages in the "node-modules" folder.

--"node index.js"
   To start and run the server.  
   Open http://localhost:8080 to view it in your browser.

### Deployed Links :

#### --Backend : 

### Attaching The Postman API Documentations : Refer Github Repository

