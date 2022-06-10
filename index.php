<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>JQuery tut</title>
</head>

<body>
    <div class="controls">
        <div class="fuel">
            <!-- <label for="Inject Fuel">Inject Fuel</label>
            <input type="number" value="Inject Fuel" class="inject"> -->
            <h3>Fuel Level</h3>
            <div class="lavelc">
                <div class="innerfuel"></div>
            </div>
        </div>
        <div class="ijectbtn">
            <input type="button" value="Inject Fuel" class="inject"> 
        </div>
        <div>
            <input type="button" value="Start" class="start">
            <input type="button" value="Reverce" class="reverce">
            <input type="button" value="Stop" class="stop">
        </div>
    </div>
    <div class="car"></div>
    <div class="container">

    </div>

    <div class="road">

    </div>
<div class="injectform">
    <div class="form">
        <span class="close">X</span>
        <h3 class="error">Fuel Overflow</h3>
        <h3>Price: 0.55$ per Liter</h3>
        Enter Amount
        <input type="number" name="dollers" id="dollers">
        <button class="submitamount">Inject</button>
        <h3 class="showlbox"> <span class="showliter"></span>Liters</h3>
    </div>
    
</div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>

</html>