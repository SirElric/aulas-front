<?php
    $productBox = require_once('../functions/product.php');
    $productBox = require_once('../functions/menu_desktop.php');
    $productBox = require_once('../functions/slide.php');
    
?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>
            Padoka Hill Valley _home.
        </title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="../css/reset.css">
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <script src="../js/ancora.js"></script>
        <script src="../js/jquery.js"></script>
        <link rel="shortcut icon" href="../image/icones/bread.png">
    </head>
    <body>
        <header class="colorPrimaryDark">
            <div id="headerBox">
                <?php

                    echo($menu_desktop);

                ?>
                <div id="loginBox">
                    <form name="frmForm" method="post" action="home.php">
                        <div class="login">
                            Usuario:<br>
                            <input class="textInput" type="text" name="txtUser" value="">
                        </div>
                        <div class="login">
                            Senha:<br>
                            <input class="textInput" type="password" name="txtPassword" value="">
                        </div>
                        <div class="confirmButtonBox">
                            <input class="confirmButton" type="submit" name="btnConfirm" value="OK">
                        </div>
                    </form>
                </div>
            </div>
        </header>
        <main>
            <div id="mainBox">
                <div id="contentBox">
                    <div id="slideBox">
                        <div class="slide colorSecundary">
                            <!--<?php 
                                echo($slide);           
                            ?> -->   
                        </div>
                    </div>
                    <div id="menuItemBox">
                        <div class="menuItem colorPrimaryDark">
                            <?php 
                                echo(prudutosMenu());  
                                echo(prudutosMenu());  
                                echo(prudutosMenu());  
                                echo(prudutosMenu());  
                                echo(prudutosMenu());  
                                echo(prudutosMenu());            
                            ?>     
                        </div>
                    </div>
                    <div id="itensBox">
                        <div class="itens colorPrimaryLight">
                            <?php 
                                echo(produtos());
                                echo(produtos());
                                echo(produtos());
                                echo(produtos());
                                echo(produtos());
                                echo(produtos());                     
                            ?>                          
                        </div>
                    </div>
                </div>
                <div class="emptyBox">
                    <div id="redesBox">
                        <a><img class="redesIcon" src="../image/icones/facebook.png"></img></a>
                        <a><img class="redesIcon" src="../image/icones/instagram.png"></img></a>
                        <a><img class="redesIcon" src="../image/icones/twitter.png"></img></a>
                    </div>
                </div>
            </div>
        </main>
        <footer class="colorPrimaryDark">
            <div class="footerBox">
                <div id="sistemBox">
                    <div class="footerButton">Intern Sistem</div>
                </div>
                <div id="addressBox">
                    Address xxxxxxxx-xxxxxx-xxxx
                </div>
                <div id="downloadBox">
                    <div class="footerButton">Intern Sistem</div>
                </div>
            </div>
        </footer>
    </body>
</html>