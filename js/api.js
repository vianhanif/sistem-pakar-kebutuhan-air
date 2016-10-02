const api = {
    bmkg:
      <?php
        // include cuaca.php
        require("api.php");

        // call function cuaca
        $cuaca = cuaca(); // return array print_r($cuaca);

        // convert array to JSON
        echo json_encode($cuaca);
      ?>
}

console.log(api);
