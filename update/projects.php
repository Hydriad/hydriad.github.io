<!DOCTYPE html>
<html>
    <head>
        <?php require 'defaultImports.php';?>
        <script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js" charset="utf-8"></script>
        <link type="text/css" rel="stylesheet" href="resources/projects.css">
        <script type="text/javascript" src="js/js.js"></script>
        <script type="text/javascript" src="js/stickyNav.js"></script>
	</head>
    <body onload="loadBraceletImages()" class="projects">
        <?php require 'navigation.php';?>
        <header>
            <h1>Art & Projects</h1>
            <p>I've dabbled in a lot of artistic pursuits, but have lately found joy in making...</p>
        </header>
        <section class="content-full-width wrapper no-shrink">
            <section class="left-nav" id="projects-nav">
                <ul>
                    <li><a onclick="switchCategory('bracelets')">Friendship bracelets</a></li>
                    <li><a onclick="switchCategory('hackathon')">Hackthon projects</a></li>
                    <li><a onclick="switchCategory('murals')">Murals</a></li>
                    <li><a onclick="switchCategory('digital-art')">Digital art</a></li>
                </ul>
            </section>
            <seciton class="right-categories">
                <?php require 'projects/bracelets.php';?>
                <?php require 'projects/hackathon.php';?>
                <?php require 'projects/murals.php';?>
                <?php require 'projects/digital-art.php';?>
            </seciton>
        </section>
        <?php require 'footer.php';?>
    </body>
</html>