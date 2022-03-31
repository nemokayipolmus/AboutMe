<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8" />
        <title>Activity 4</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <h1>Registration Form</h1>
        <form action="activity4-preview.php" method="post">

            <label>Name: </label> <input type="text" name="name"> </br></br>

            <label>Username: </label> <input type="text" name="username"> </br></br>

            <label>Password: </label> <input type="password" name="password"> </br></br>

            <label>Address: </label> <input type="text" name="address"> </br></br>
            
            <label for="country">Country: </label>
            <select name="country" id="country">
             <option value="" selected disabled hidden>(Please select a country)</option>
             <option value="Turkey">Turkey</option>
             <option value="Usa">USA</option>
             <option value="France">France</option>
             <option value="Germany">Germany</option>
            </select> </br></br>

            <label>ZIP Code: </label> <input type="text" name="zipcode"> </br></br>

            <label>Email: </label> <input type="email" name="email"> </br></br>

            <label>Sex: </label> <input type="radio" name="sex" value="Male"> Male
            <input type="radio" name="sex" value="Female"> Female </br></br>

            <label>Language: </label> English <input type="checkbox" name="language[]" value="English"> 
            French <input type="checkbox" name="language[]" value="French"> 
            German <input type="checkbox" name="language[]" value="German"> </br></br>

            <label>About: </label> <textarea name="about"></textarea> </br></br>

            <input type="submit" value="Submit">

        </form>
    </body>
</html>