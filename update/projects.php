<!DOCTYPE html>
<html>
    <head>
        <?php require 'defaultImports.php';?>
        <script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js" charset="utf-8"></script>
        <link type="text/css" rel="stylesheet" href="resources/projects.css">
	</head>
    <body onload="loadProjectImages()" class="projects">
        <?php require 'navigation.php';?>
        <header>
            <h1>Art & Projects</h1>
            <p>I've dabbled in a lot of artistic pursuits, but have lately found joy in making...</p>
        </header>
        <section class=".content-full-width wrapper no-shrink">
            <section class="fixed-left-nav">
                <ul>
                    <li><a href="#bracelets">Friendship bracelets</a></li>
                    <li><a href="#hackathon">Hackthon projects</a></li>
                    <li><a href="#murals">Murals</a></li>
                    <li><a href="#photo-edits">Photo edits</a></li>
                    <li><a href="#whiteboard">Whiteboard doodles</a></li>
                </ul>
            </section>
            <seciton class="right-categories">
                <div class="category" id="bracelets">
                    <h2>Friendship bracelets</h2>
                    <p class="desc">
                        I usually follow patterns from <a href="https://friendship-bracelets.net">friendship-bracelets.net</a>, but shoutout to Heather's Friendship Bracelets for getting me started!
                    </p>
                    <div class="gallery-vertical" id="gallery-bracelets"></div>
                </div>
                <div class="category" id="hackathon">
                    <h2>Hackathon projects</h2>
                    <p class="desc">
                        Here are some hackathon projects I've done that I'm proud of.
                    </p>
                    <div class="videos">
                        <div class="video">
                            <h3>Programmable RGB LEDs (2017)</h3>
                            <p>Winner of "Prettiest Hack" and the "Neato Burrito" awards.</p>
                            <iframe width="450" height="315" src="https://www.youtube.com/embed/jZtNySYtD6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="video">
                            <h3>Kyle's photography website (2018)</h3>
                            <p>A website I made for my boyfriend, Kyle, to show off his photography skills.</p>
                            <iframe width="450" height="315" src="https://www.youtube.com/embed/eH65rVPF_Hc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="video">
                            <h3>otakustats.moe (2019)</h3>
                            <p>A website to bring better searching and statistics to fellow anime lovers.</p>
                            <iframe width="450" height="315" src="https://www.youtube.com/embed/zbmO4_WXTyw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="video">
                            <h3>Peer to Peer Network research (2019)</h3>
                            <p>Winner of "Best non-company hack".</p>
                            <iframe width="450" height="315" src="https://www.youtube.com/embed/8vH67aJRQNg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="category" id="murals">
                    <h2>Murals</h2>
                    <p class="desc">
                        I led the painting of two colorful murals in my office, where coworkers helped paint them over the course of a few months.
                    </p>
                    <h3>Mountains (2017)</h3>
                    <p class="desc">This one took two months to complete, with two coats of paint for each of the six layers of mountains. I drew a general guide of the mountain shapes for us to follow, but we free-handed the gentle bumps on each layer to make it more realistic.</p>
                    <div class="gallery-horizontal" id="gallery-mural1"></div>
                    <h3>Colorful triangles (2018 - 2019)</h3>
                    <p class="desc">This one took a little over three months to complete. Again, two coats per triangle. It was difficult because we could never paint triangles that were adjacent to each other at the same time. In the future I'd do less colors (this one has nine), and mark the triangles on the wall in pencil instead of pen, as the pen ended up showing through some of the lighter colors. But I really love how it turned out!</p>
                    <div class="gallery-horizontal" id="gallery-mural2"></div>
                </div>
                <div class="category" id="photo-edits">
                    <h2>Photo edits</h2>
                    <p class="desc">
                        There is so much freedom and room for experimetation in digital art. I edit photos of myself most often because there are no expectations.
                    </p>
                    <div class="gallery-vertical" id="gallery-photo-edits"></div>
                </div>
                <div class="category" id="whiteboard">
                    <h2>Whiteboard doodles</h2>
                    <p class="desc">
                        
                    </p>
                </div>
            </seciton>
        </section>
        <?php require 'footer.php';?>
    </body>
</html>