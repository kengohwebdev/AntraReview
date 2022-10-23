using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace MyApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Solution solution = new Solution();
            int[] nums1 = { 1, 2, 3, 0, 0, 0 };
            int m = 3;
            int[] nums2 = { 2, 5, 6 };
            int n = 3;

            //solution.Merge(nums1, m, nums2, n);
            //solution.TwoSum(nums1, 3);

            string s = "PAYPALISHIRING";
            int numRows = 3;
            solution.Convert(s, numRows);



        }

    }


    public class Solution
    {
        public string Convert(string s, int numRows)
        {
            if (numRows == 1) return s;
            var sb = new StringBuilder();
            var totalIncrement = (numRows - 1) * 2;
            var incrementPair = new int[2];
            for (var i = 0; i < numRows; i++)
            {
                var zigZag = true;
                incrementPair[0] = totalIncrement - i * 2;
                incrementPair[1] = i * 2;
                var index = i;

                while (index < s.Length)
                {
                    sb.Append(s[index]);
                    if (zigZag)
                    {
                        index += incrementPair[0] == 0 ? incrementPair[1] : incrementPair[0];
                    }
                    else
                    {
                        index += incrementPair[1] == 0 ? incrementPair[0] : incrementPair[1];
                    }

                    zigZag = !zigZag;
                }
            }

            return sb.ToString();
        }
        public int[] TwoSum(int[] nums, int target)
        {
            var map = new Hashtable();
            for (int i = 0; i < nums.Length; i++)
            {
                if (map.ContainsKey(target - nums[i]))
                {
                    return new int[] { (int)map[target - nums[i]], i };
                }
                map[nums[i]] = i;
            }
            return new int[0];
        }
        public void Merge(int[] nums1, int m, int[] nums2, int n)
        {
            int i = m - 1;
            int j = n - 1;
            int k = m + n - 1;

            while (i >= 0 && j >= 0)
            {
                if (nums1[i] > nums2[j])
                {
                    nums1[k] = nums1[i];
                    i--;
                }
                else
                {
                    nums1[k] = nums2[j];
                    j--;
                }
                k--;
            }

            while (j >= 0)
            {
                nums1[k] = nums2[j];
                k--;
                j--;
            }
        }
        //public void Merge(int[] nums1, int m, int[] nums2, int n)
        //{
        //    int k = m-- + --n;
        //    while (n >= 0)
        //    {
        //        while (m >= 0 && nums1[m] > nums2[n])
        //            nums1[k--] = nums1[m--];

        //        while (n >= 0 && (m < 0 || nums1[m] <= nums2[n]))
        //            nums1[k--] = nums2[n--];
        //    }
        //}
    }
}