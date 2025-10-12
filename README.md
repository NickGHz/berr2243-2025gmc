# berr2243-2025gmc
For BERR2243 Purposes

1. Code Execution & Output

After running your index.js script:
- What exact text does the console display when the document is 
inserted?
=Connected to MongoDB!
Document inserted!
Query result: {_id: ObjectId, name: 'Alice', age: 25}

- What _id value is automatically assigned to the document?
68e7349f624804929a371fa0

2. Modify and Observe
Change the name field in index.js to your own name and the age to 
your birth year. Run the script again.

-What new _id is generated for this document?
=68ebb51c5e9887070f024fe9

-What error occurs if you forget to call await	client.connect()?
=No error

3. MongoDB Connection Failure
Intentionally break the MongoDB connection string (e.g., change the 
port to 27018).

-What error message does NodeJS throw?
=C:\Program Files\nodejs\node.exe --experimental-network-inspection .\index.js
Error: MongoServerSelectionError: connect ECONNREFUSED ::1:27018, connect ECONNREFUSED 127.0.0.1:27018
    at Topology.selectServer (c:\Users\Nickson Goh\node_modules\mongodb\lib\sdam\topology.js:327:38)
    at async Topology._connect (c:\Users\Nickson Goh\node_modules\mongodb\lib\sdam\topology.js:200:28)
    at async Topology.connect (c:\Users\Nickson Goh\node_modules\mongodb\lib\sdam\topology.js:152:13)
    at async topologyConnect (c:\Users\Nickson Goh\node_modules\mongodb\lib\mongo_client.js:264:17)
    at async MongoClient._connect (c:\Users\Nickson Goh\node_modules\mongodb\lib\mongo_client.js:277:13)
    at async MongoClient.connect (c:\Users\Nickson Goh\node_modules\mongodb\lib\mongo_client.js:202:13)
    at async main (C:\Users\Nickson Goh\Desktop\Cloud System\index.js:8:9) {errorLabelSet: Set(0), reason: TopologyDescription, code: undefined, stack: 'MongoServerSelectionError: connect ECONNREFUS…son Goh\\Desktop\\Cloud System\\index.js:8:9)', message: 'connect ECONNREFUSED ::1:27018, connect ECONNREFUSED 127.0.0.1:27018', …}

-What is the exact text of the error code (e.g., ECONNREFUSED)?
=MongoServerSelectionError: connect ECONNREFUSED ::1:27018, connect ECONNREFUSED 127.0.0.1:27018

4. MongoDB Shell Query
Use the MongoDB shell (not Compass) to:

-List all documents in the testDB.users collection.
={
  _id: ObjectId('68e7349f624804929a371fa0'),
  name: 'Alice',
  age: 25
}
{
  _id: ObjectId('68ebb51c5e9887070f024fe9'),
  name: 'Goh Ming Chen',
  age: 21
}

-What command did you use? Paste the full output.
=use testDB and db.users.find()

5. File System & Dependencies
= What is the absolute path to your project’s package-lock.json file?
-C:\Users\Nickson Goh\Desktop\Cloud System\Cloud\berr2243-2025gmc\node_modules

= What exact version of the mongodb driver is installed?
-Version 1.47.1

6. Troubleshooting Practice
Stop the MongoDB service and run the script.
=What error occurs?
-C:\Program Files\nodejs\node.exe --experimental-network-inspection .\index.js
Error: MongoServerSelectionError: connect ECONNREFUSED ::1:27017, connect ECONNREFUSED 127.0.0.1:27017
    at Topology.selectServer (c:\Users\Nickson Goh\node_modules\mongodb\lib\sdam\topology.js:327:38)
    at async Topology._connect (c:\Users\Nickson Goh\node_modules\mongodb\lib\sdam\topology.js:200:28)
    at async Topology.connect (c:\Users\Nickson Goh\node_modules\mongodb\lib\sdam\topology.js:152:13)
    at async topologyConnect (c:\Users\Nickson Goh\node_modules\mongodb\lib\mongo_client.js:264:17)
    at async MongoClient._connect (c:\Users\Nickson Goh\node_modules\mongodb\lib\mongo_client.js:277:13)
    at async MongoClient.connect (c:\Users\Nickson Goh\node_modules\mongodb\lib\mongo_client.js:202:13)
    at async main (C:\Users\Nickson Goh\Desktop\Cloud System\index.js:8:9) {errorLabelSet: Set(0), reason: TopologyDescription, code: undefined, stack: 'MongoServerSelectionError: connect ECONNREFUS…son Goh\\Desktop\\Cloud System\\index.js:8:9)', message: 'connect ECONNREFUSED ::1:27017, connect ECONNREFUSED 127.0.0.1:27017', …}

=What command restarts the service?
-net start MongoDB

7. GitHub Repository Structure
On GitHub, navigate to your repository’s.
=What timestamp is listed for your last commit?
-23:52:55.839

=How many files are present in this branch?
-4 

8. Performance Observation
Time how long it takes for the script to print "Connected	to	MongoDB!".
=What is the duration (in milliseconds)?
-103ms

=Does this time change if you run the script again? Why?
-because of external factors like system load, caching
