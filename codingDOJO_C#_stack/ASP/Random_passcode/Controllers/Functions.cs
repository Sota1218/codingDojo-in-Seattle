namespace Random_passcode.Functions
{
    private string SessionPasscode()
    {
        get { return HttpContext.Session.GetString("passcode"); }
        set { HttpContext.Session.SetString("passcode", value); }
    }

    private int? SessionCount
    {
        get { return HttpContext.Session.GetInt32("count"); }
        set { HttpContext.Session.SetInt32("count", (int)value); }
    }

    public string GeneratePasscode()
    {
        string allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        string result = "";
        Random rInt = new Random();
        for (var i = 1; i < 15; i++)
            result += allowedCharacters[rInt.Next(allowedCharacters.Length)];
        return result;
    }
}