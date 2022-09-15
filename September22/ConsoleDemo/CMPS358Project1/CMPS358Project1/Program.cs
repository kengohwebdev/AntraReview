using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using CMPS358Project1;
using System.IO.Pipes;

namespace Project1
{
    public class Program
    {
        static void Main(string[] args)
        {


            List<HADS> hads1 = new List<HADS>();


            string filePath = @"C:\Users\kenai\Desktop\somedata\somedata\1993.txt";

            List<string> lines = File.ReadAllLines(filePath).ToList();


            foreach (var line in lines)
            {
                //Console.WriteLine(line);
                string[] entries = line.Split(',');

                HADS newHads = new HADS();

                newHads.age = int.Parse(entries[0]);
                newHads.region = int.Parse(entries[1]);
                newHads.lmed = double.Parse(entries[2]);
                newHads.fmr = double.Parse(entries[3]);
                newHads.l30 = double.Parse(entries[4]);
                newHads.l50 = double.Parse(entries[5]);
                newHads.l80 = double.Parse(entries[6]);
                newHads.bedrooms = int.Parse(entries[7]);
                newHads.value = double.Parse(entries[8]);
                newHads.rooms = int.Parse(entries[9]);
                newHads.utility = double.Parse(entries[10]);

                hads1.Add(newHads);
            }

            int sumAge = 0;
            int sumRegion = 0;
            double sumLmed = 0;
            double sumFmr = 0;
            double sumL30 = 0;
            double sumL50 = 0;
            double sumL80 = 0;
            int sumBedrooms = 0;
            double sumValue = 0;
            int sumRooms = 0;
            double sumUtility = 0;

            int count = 0;
            foreach (var item in hads1)
            {
                //Console.WriteLine($"{item.age},{item.region},{item.lmed},{item.fmr},{item.l30},{item.l50},{item.l80},{item.bedrooms},{item.value},{item.rooms},{item.utility}");
                //if (item.age >0 )
                //{
                //    sumAge += item.age;
                //    count++;
                //}

                sumAge += item.age;
                    
                    sumRegion += item.region;
                    sumLmed += item.lmed;
                    sumFmr += item.fmr;
                    sumL30 += item.l30;
                    sumL50 += item.l50;
                    sumL80 += item.l80;
                    sumBedrooms += item.bedrooms;
                    sumValue += item.value;
                    sumRooms += item.rooms;
                    sumUtility +=item.utility;
       

            }


            int meanAge = sumAge / hads1.Count;
            int meanRegion = sumRegion /hads1.Count;
            double meanLmed = sumLmed /hads1.Count;
            double meanFmr = sumFmr /hads1.Count;
            double meanL30 = sumL30 /hads1.Count;
            double meanL50 = sumL50 /hads1.Count;
            double meanL80 = sumL80 /hads1.Count;
            int meanBedrooms = sumBedrooms /hads1.Count;
            double meanValue = sumValue /hads1.Count;
            int meanRoom = sumRooms /hads1.Count;
            double meanUtility = sumUtility /hads1.Count;

  

            Console.WriteLine("\n\n");
            Console.WriteLine("|  \t\t| All Regions \t|\t Regions 1 \t|\t Region 2 \t|\t Region 3 \t|\t Region 4 |");
            Console.WriteLine($"| Age \t\t| FakeData \t|\t {meanAge} \t|\t FakeData \t|\t FakeData \t|\t FakeData |");
            Console.WriteLine($"| LMED \t\t| FakeData \t|\t {meanRegion} \t|\t FakeData \t|\t FakeData \t|\t FakeData |");
            Console.WriteLine($"| FMR \t\t| FakeData\t|\t {meanFmr}  \t|\t FakeData \t|\t FakeData \t|\t FakeData |");
            Console.WriteLine($"| L30 \t\t| FakeData \t|\t {meanL30} \t|\t FakeData \t|\t FakeData \t|\t FakeData |");
            Console.WriteLine($"| L50 \t\t| FakeData \t|\t {meanL50} \t|\t FakeData \t|\t FakeData \t|\t FakeData |");
            Console.WriteLine($"| L80 \t\t| FakeData \t|\t {meanL80} \t|\t FakeData \t|\t FakeData \t|\t FakeData |");
            Console.WriteLine($"| Bedrooms \t| FakeData \t|\t {meanBedrooms} \t|\t FakeData \t|\t FakeData \t|\t FakeData |");
            Console.WriteLine($"| Value \t| FakeData \t|\t {meanValue} \t|\t FakeData \t|\t FakeData \t|\t FakeData |");
            Console.WriteLine($"| Rooms \t| FakeData \t|\t {meanRoom} \t|\t FakeData \t|\t FakeData \t|\t FakeData |");
            Console.WriteLine($"| Utility \t| FakeData \t|\t {meanUtility} \t|\t FakeData \t|\t FakeData \t|\t FakeData |");

            Console.ReadLine();

        }
    }

}