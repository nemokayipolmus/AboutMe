<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Efşan Albayrak-19050151005</title>
    <style>
        #cont #to{
            margin-left: 18px;

        }


    </style>
</head>
<body>
<?php

$FROM = $_POST["from"]; 
$TO = 0; 
$CURRENCY1 = $_POST["cur1"];
$CURRENCY2 = $_POST["cur2"];

$rates = [
    'USD_CAN' => 1.25,
    'USD_EUR' => 0.9,
    'CAN_USD' => 0.80,
    'CAN_EUR' => 0.72,
    'EUR_USD' => 1.11,
    'EUR_CAN' => 1.38,
    ];
#converting USD to others
if($CURRENCY1 == "USD"){ 
    if($CURRENCY2 == "USD"){
        $TO = $FROM;
    }
    elseif($CURRENCY2 == "CAD"){
        $TO = bcmul($FROM, $rates['USD_CAN'],2);
        
    }
    elseif($CURRENCY2 = "EUR"){
        $TO = bcmul($FROM, $rates['USD_EUR'],2);
    }
}
#converting CAD to others
elseif($CURRENCY1 == "CAD"){
    if($CURRENCY2 == "CAD"){
        $TO = $FROM;
    }
    elseif($CURRENCY2 == "USD"){
        $TO = bcmul($FROM, $rates['CAN_USD'],2);
    }
    elseif($CURRENCY2 = "EUR"){
        $TO = bcmul($FROM, $rates['CAN_EUR'],2);
    }
}
#converting EUR to others
elseif($CURRENCY1 == "EUR"){
    if($CURRENCY2 == "EUR"){
        $TO = $FROM;
    }
    elseif($CURRENCY2 == "USD"){
        $TO = bcmul($FROM, $rates['EUR_USD'],2);
    }
    elseif($CURRENCY2 = "CAD"){
        $TO = bcmul($FROM,$rates['EUR_CAN'],2);
    }

}

?>
<div id="cont">
    <form  action="" method="post">

    <label>From:</label>
    <input id="from" name="from" type="text" value="<?php if(isset($_POST["from"])){ echo $_POST["from"]; } ?>"/>

    <label for="Currency">Currency:</label>
    <select id="cur1" name="cur1" >
        <option value="USD">US Dollar</option>
        <option value="CAD">Canadian Dollar</option>
        <option value="EUR">Euro</option>
    </select><br>

    <label>To: </label>
    <input id="to" name="to" type="text" value=<?php echo $TO ?>/>

    <label for="Currency">Currency:</label>
    <select id="cur2" name="cur2">
        <option value="USD">US Dollar</option>
        <option value="CAD">Canadian Dollar</option>
        <option value="EUR">Euro</option>
    </select><br>

    <input type="submit" value="convert"/>

    </form>
</div>
</body>
</html>