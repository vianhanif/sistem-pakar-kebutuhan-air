<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistem Pakar Kebutuhan Air</title>
    <!-- <link rel="shortcut icon" href="./assets/favicon.ico"> -->


    <!-- styles -->
    <link rel="stylesheet" href="css/vendor/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="vendor/lightbox-bootstrap/ekko-lightbox.min.css"> -->

    <link rel="stylesheet" href="css/main.css">

    <!-- scripts -->
    <script src="js/dist/jquery-3.1.1.min.js"></script>
    <script src="css/vendor/js/bootstrap.min.js"></script>
    <!-- <script src="vendor/lightbox-bootstrap/ekko-lightbox.min.js"></script> -->

    <script src="js/dist/fontawesome.min.js"></script>
    <script src="js/dist/react.min.js"></script>
    <script src="js/dist/react-dom.min.js"></script>
    <script src="js/dist/browser.min.js"></script>
    <script src="js/script.js"></script>
  </head>
  <body>
    <div id="app"></div>

    <script type="text/babel">
      <?php include 'js/component.php'; ?>

      var destination = document.querySelector("#app");
      ReactDOM.render(
        <App>
        </App>,
        destination
      );
    </script>
  </body>
</html>
