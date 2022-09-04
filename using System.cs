using System
class InfoSysTest
{
    static char getMaxOccuringChar(String str)
    {
        int []count = new int [];

        int len = str.Length;
        for (int i=0; i<len; i++)
        {
            count[str[i]]++
        }
        int max = -1 
        char result = ' ';

        for (int i=0; i<len; i++)
        {
            if (max <count[str[i]])
            {
                max= count[str[i]];
                result = srt[i];
            }
        }
        return result;
    }

    public static
}