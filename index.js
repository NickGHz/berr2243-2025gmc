const { MongoClient } = require('mongodb');

const drivers = [
    {
        name: "John Doe",
        vehicleType: "Sedan",
        isAvalable: true,
        rating: 4.8
    },
    {
        name: "Alice Smith",
        vehicleType: "SUV",
        isAvalable: false,
        rating: 4.5
    }
];

console.log(drivers);

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("testDB");
        const collection = db.collection("users");
        const driversCollection = db.collection("drivers");

        drivers.forEach(async (driver) => {
            const result = await driversCollection.insertOne(driver);
            console.log(`New driver created with result; ${result}`);
        });

        const updatedResult = await db.collection('drivers').updateOne(
            { name: "John Doe" },   
            { $inc: { rating: 0.1 } }
        );
        console.log(`Driver updated with result: ${updatedResult}`);

        const availableDrivers = await db.collection('drivers').find({
            isAvalable: true, 
            rating: { $gte: 4.5 }
        }).toArray();
        console.log("Available drivers:", availableDrivers);

        await collection.insertOne({ name: "Goh Ming Chen", age: 21 });
        console.log("Document inserted!");

        const result = await collection.findOne({ name: "Goh Ming Chen" });
        console.log("Query result:", result);

        // const deleteResult = await db.collection(`drivers`).deleteOne({ isAvalable: false });
        // console.log(`Driver deleted with result: ${deleteResult}`);

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

main();
    