<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8" />
        <title>Activity 4</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <?php
            $name = $_POST['name'];
            $username = $_POST['username'];
            $password = $_POST['password'];
            $address = $_POST['address'];
            $country = $_POST['country'];
            $zipcode = $_POST['zipcode'];
            $email = $_POST['email'];
            $sex = $_POST['sex'];
            $language = $_POST['language'];
            $about = $_POST['about'];

            $person = array();
            $person = array("Name" => $name, "Username" => $username, "Password" => $password, "Address" => $address,
            "Country" => $country, "Zipcode" => $zipcode, "Email" => $email, "Sex" => $sex, "Language" => $language, "About" => $about);

            foreach($person as $key => $value)
            {
                if($value == null)
                {
                    error_reporting(0);

                    echo $key.  ": Not provided <br/>"; 
                }

                else{
                    error_reporting(0);

                    if($key == "Language")
                    {
                        for($i=0;$i<sizeof($_POST['language']); $i++)
                        {
                            echo $_POST['language'][$i]. "<br/>";
                        }
                    }

                    else{
                    echo $value. '<br/>';
                    }
                }
            }
        ?>
    </body>
</html>