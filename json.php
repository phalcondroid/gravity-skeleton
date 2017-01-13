<?php

$data = json_encode(array(
    array(
        "id" => 1,
        "name" => "name uno",
        "last" => "last uno",
        "nested"  => array(
            "id" => 1,
            "game" => "wwd"
        )
    ),
    array(
        "id" => 2,
        "name" => "name dos",
        "last" => "last dos",
        "nested"  => array(
            "id" => 1,
            "game" => "cash of clans"
        )
    ),
    array(
        "id" => 3,
        "name" => "name three",
        "last" => "last three",
        "nested"  => array(
            "id" => 1,
            "game" => "angry birds"
        )
    ),
    array(
        "id" => 4,
        "name" => "name cuatro",
        "last" => "last cuatro",
        "nested"  => array(
            "id" => 1,
            "game" => "age of empires"
        )
    ),
    array(
        "id" => 5,
        "name" => "name cinco",
        "last" => "last cinco",
        "nested"  => array(
            "id" => 1,
            "game" => "rome total war"
        )
    ),
    array(
        "id" => 6,
        "name" => "name six",
        "last" => "last six",
        "nested"  => array(
            "id" => 1,
            "game" => "Mitology"
        )
    ),
    array(
        "id" => 7,
        "name" => "name seven",
        "last" => "last seven",
        "nested"  => array(
            "id" => 1,
            "game" => "Los simpsons"
        )
    ),
    array(
        "id" => 8,
        "name" => "name eight",
        "last" => "last eight",
        "nested"  => array(
            "id" => 1,
            "game" => "Halo combat envolved"
        )
    ),
    array(
        "id" => 9,
        "name" => "name nine",
        "last" => "last nueve",
        "nested"  => array(
            "id" => 1,
            "game" => "The incredible machine"
        )
    ),
    array(
        "id" => 10,
        "name" => "name ten",
        "last" => "last ten",
        "nested"  => array(
            "id" => 1,
            "game" => "Billard 3d"
        )
    )
));

if (isset($_POST["search"])) {

}

if (isset($_POST["save"])) {

}

if (isset($_POST["delete"])) {

}

if (isset($_POST["update"])) {

}

echo $data;
