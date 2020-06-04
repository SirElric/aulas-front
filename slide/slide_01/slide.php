  
<?php

    $slide="
    
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <meta http-equiv='X-UA-Compatible' content='ie=edge'>
            <title>SLIDE</title>
            <style>

                :root{
                    --width-slide: 1000px;
                    --height-slide: 300px;
                }
        
                #container{
                    width: 1400px;
                    height: 300px;
                    margin-left:auto;
                    margin-right:auto;
                }
        
                #containerImages{
                    display: flex;
                    width: var(--width-slide);
                    height: var(--height-slide);
                    overflow-x: hidden;
                    float:left;
                }
        
        
                .images{
                    width: 100%;
                    height: 100%;
                    transition: 1000ms;
                }
        
                #prev, #next{
                    position: absolute;
                    width: 40px;
                    height: inherit;
                    color:  orange;
                    text-align: center;
                    font: bold 30px/var(--height-slide) 'comic sans ms';
                    user-select: none;
                    float:left;
                    
        
                }
        
                #prev{
                    background-color: red;
                }
        
                #next{
                    background-color: red;
                    right:250px;     
                }
        
                #prev:hover, #next:hover {
                    background-color: rgb(255,255,255,0.2);
                    color: white;
                }
        
            </style>
        <body>
            
        </body>
        </html>
    
    "

?>