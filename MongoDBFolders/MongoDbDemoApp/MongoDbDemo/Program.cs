using MongoDB.Bson.Serialization.IdGenerators;
using System;

namespace MongoDBDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            MongoCRUD db = new MongoCRUD("AddressBook");

            //PersonModel person = new PersonModel
            //{
            //    FirstName = "Joe",
            //    LastName = "Smith",
            //    PrimaryAddress = new AddressModel
            //    {
            //        StreetAddress = "101 Oak Street",
            //        City = "Scranton",
            //        State = "PA",
            //        ZipCode = "18512"
            //    }
            //};

            //db.InsertRecord("Users", person);

            var recs = db.LoadRecords<NameModel>("Users");

            foreach (var rec in recs)
            {
                Console.WriteLine($"{rec.FirstName} {rec.LastName}");

                Console.WriteLine();
            }


            //foreach (var rec in recs)
            //{
            //    Console.WriteLine($"{rec.Id}: {rec.FirstName} {rec.LastName}");

            //    if (rec.PrimaryAddress != null)
            //    {
            //        Console.WriteLine(rec.PrimaryAddress.City);
            //    }
            //    Console.WriteLine();
            //}

            //var oneRec = db.LoadRecordById<PersonModel>("Users", new Guid("1d740006-8f43-4b64-9b10-195e6421f733"));

            //oneRec.DateOfBirth = new DateTime(1991, 9, 8, 0, 0, 0, DateTimeKind.Utc);
            //db.UpsertRecord("Users", oneRec.Id, oneRec);
            //db.DeleteRecord<PersonModel>("Users",oneRec.Id);

            Console.ReadLine();
        }
    }

}