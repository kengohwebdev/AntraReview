using System;
using System.Diagnostics;
using System.Threading;

public class Example
{
    public static void Main()
    {
        Thread mainThread = Thread.CurrentThread;
        mainThread.Start();
        Thread.Sleep(1000);
        mainThread.Abort();

        

        Thread th1 = new Thread(CountUp(s));
        Thread th2 = new Thread(CountDown);
        th1.Start();
    }

    public static void CountUp(string s)
    {
        for(int i=0; i<5; i++)
        {
            Console.WriteLine(i + " " + s);
            Thread.Sleep(2000);
      
        }

        Console.WriteLine("Finished");
    }

    public static void CountDown()
    {
        for (int i = 5; i >0; i--)
        {
            Console.WriteLine(i);
            Thread.Sleep(1000);
        }
        Console.WriteLine("Done");
    }


}