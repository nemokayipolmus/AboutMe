<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>
        Currency Calculator
    </title>
    <style>
        div.fromTo {
            padding: 20px;
            min-height: 100px;
            min-width: 250px;
            position: relative;
            float: left;
        }
        div.from {
            position: absolute;
            top: 20px;
            left: 80px;
        }
        div.to {
            position: absolute;
            top: 40px;
            left: 80px;
        }
        div.main {
            min-height: 100px;
            min-width: 200px;
            position: relative;
            float: left;
        }
        div.currency {
            padding: 20px;
            text-align: left;
            top: 0;
        }
        div.submit {
            position: absolute;
            bottom: 0;
            right: 20px;
        }
    </style>
</head>
<body>
    <?php
    if(isset($_GET['from'])){
        $from = (float) $_GET['from'];
    }
    if(isset($_GET['currenciesTo'])){
        $currencyTo = $_GET['currenciesTo'];
    }
    if(isset($_GET['currenciesFrom'])){
        $currencyFrom = $_GET['currenciesFrom'];
    }

    $USDToCADpar = 1.25;
    $USDToEURpar = 0.92;
    $CADToEURpar = 0.74;

    $result = 0.0;
    if($currencyFrom == 'USD'){
        if ($currencyTo == 'USD'){
            $result = $from;
        }else if($currencyTo == 'CAD'){
            $result = $from * $USDToCADpar;
        }else if($currencyTo == 'EUR'){
            $result = $from * $USDToEURpar;
        }
    }else if($currencyFrom == 'CAD'){
        if ($currencyTo == 'USD'){
            $result = $from / $USDToCADpar;
        }else if($currencyTo == 'CAD'){
            $result = $currencyTo;
        }else if($currencyTo == 'EUR'){
            $result = $from * $CADToEURpar;
        }
    }else if($currencyFrom == 'EUR'){
        if ($currencyTo == 'USD'){
            $result = $from / $USDToEURpar;
        }else if($currencyTo == 'CAD'){
            $result = $from / $CADToEURpar;
        }else if($currencyTo == 'EUR'){
            $result = $from;
        }
    }
    ?>
    <form action="index.php" method="get">
        <div class="fromTo">
            From:
            <div class="from">
                <input type="text" name="from"/>
            </div>
            <br />
            To:
            <div class="to">
                <?php
                echo $result;
                ?>
            </div>
        </div>
        <div class="main">
            <div class="currency">
                Currency:
                <select name="currenciesTo">
                    <option value="USD" selected>US Dollar</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="EUR">Euro</option>
                </select>
                <br>
                Currency:
                <select name="currenciesFrom">
                    <option value="USD" selected>US Dollar</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="EUR">Euro</option>
                </select>
                <br>
            </div>
            <div class="submit">
                <input type="submit" value="Convert"/>
            </div>
        </div>
    </form>
    </body>
    </html>