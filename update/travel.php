<!DOCTYPE html>
<html>
    <head>
        <?php require 'defaultImports.php';?>
        <link type="text/css" rel="stylesheet" href="resources/travel.css">
        <script type="text/javascript" src="js/js.js"></script>
	</head>
    <body class="travel" onload="setMapSize()">
        <?php require 'navigation.php';?>
        <header>
            <h1>Places I've been</h1>
        </header>
        <section class="content-full-width no-shrink">
            <iframe id="google-map" src="https://www.google.com/maps/d/u/0/embed?mid=1sZ3MHUmEYkVSxIWGfOa06bWkjGD1qeuS" width="1200" height="800"></iframe>
        </section>
        <?php require 'footer.php';?>
    </body>
</html>