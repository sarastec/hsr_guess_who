<?php

require 'php/characters_table.php';
require 'php/functions.php';

?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <script src="script.js"></script> 
</head>
<body>
    <div class="header">
        <h1>Honkai: Star Rail Guess Who</h1>
    </div>
    <div class="game-container">
        <?php foreach ($characters as $character) {
            $code = $character['code'];
            $name = $character['name'];
            $picPath = 'assets/' . $code . '.png';

            require 'php/partials/character.php';
        } ?>
    </div>
</body>
</html> 