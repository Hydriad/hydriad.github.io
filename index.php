<!DOCTYPE HTML>
<hmtl>
<head>
	<meta charset="utf-8">
	<title>Hayley Schluter</title>
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" charset="utf-8"></script>
	<link href = "style.css" rel = "stylesheet">
	<script type="text/javascript" src="js/javascript.js"></script>

</head>

<body>
	<!--page 1: index-->
	<div class = "page" id = "page1">
		<a href = "#page2"><img class = "downarrow arrow smoothscroll" src = "pics/downarrow.png" style="opacity:1;"></a>
		<img id = "lgtoptri" src = "pics/creativespaceROBOTO.png">
		<img class = "nametri" src = "pics/namecorner2.png">
	</div>
	<!--end page 1: index-->
	<!--page 2: capabilities-->
	<div class = "page" id = "page2">
		<!--navigation-->
		<?php include "navigation.php" ?>
		<div id = "whatido">
			<h1>WHAT I DO</h1>
			<p>I design and build responsive websites for all web platforms</p>
			<p>Focusing on usability and customized feel</p>
			<p>Using HTML5, CSS3, Javascript and JQuery</p>
			<p>To create a dynamic, unique user experience.</p>
		</div>
		<!--arrows-->
		<a href = "#page1"><img class = "uparrow arrow" src = "pics/uparrow.png"></a>
		<a href = "#page3"><img class = "downarrow arrow" src = "pics/downarrow.png"></a>
	</div>
	<!--end page 2: capabilities-->
	<!--page 3: about-->
	<div class = "page" id = "page3">
		<!--navigation-->
		<?php include "navigation.php" ?>
		<h1>PORTFOLIO</h1>
		<a href = "#page2"><img class = "uparrow arrow" src = "pics/uparrow.png"></a>
		<a href = "#page4"><img class = "downarrow arrow" src = "pics/downarrow.png"></a>
	</div>
	<!--end page 3: about-->
	<!--page 3: contact-->
	<div class = "page" id = "page4">
		<!--navigation-->
		<?php include "navigation.php" ?>
		<img id = "lgbottomtri" src = "pics/lgbottomtri.png">
		<h1>ABOUT ME</h1>
		<a href = "#page3"><img class = "uparrow arrow" src = "pics/uparrow.png"></a>
	</div>
	<!--end page 3: contact-->
</body>
</hmtl>