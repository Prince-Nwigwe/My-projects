var gameOver = 0;
document.getElementById("sound").style.display="none"
document.getElementById("difficulty").style.display="none"
document.getElementById("character").style.display="none"
function AI() {
    document.getElementById("div").style.display="none"
    document.getElementById("character").style.display="block"

}
document.getElementById("AI").onclick=AI

function X() {
    document.getElementById("character").style.display="none"
    document.getElementById("difficulty").style.display="block"
    function possible() {

        document.getElementById("difficulty").style.display="none"   
        function a() {
		if(this.innerHTML == "❌" || this.innerHTML == "⭕" || gameOver == 1)
			{}
		else{

            this.innerHTML="❌"
            var s="❌"
            var r="⭕"

        var choose=Math.floor(Math.random()*4+1)      
        var ac =document.getElementById("box1").innerHTML
        var b =document.getElementById("box2").innerHTML
        var c= document.getElementById("box3").innerHTML
        var d= document.getElementById("box4").innerHTML
        var e= document.getElementById("box5").innerHTML
        var f= document.getElementById("box6").innerHTML
        var g= document.getElementById("box7").innerHTML
        var h= document.getElementById("box8").innerHTML
        var i= document.getElementById("box9").innerHTML

        

        function has() {
        
            if (choose===1&&(ac!=s&&ac!=r)) {
                document.getElementById("box1").innerHTML=r    
            }
            else if (choose===2&&(c!=s&&c!=r)) {
                document.getElementById("box3").innerHTML=r    
            }
            else if (choose===3&&(i!=s&&i!=r)) {
                document.getElementById("box9").innerHTML=r    
            }
            else if (choose===4&&(g!=s&&g!=r)) {
                document.getElementById("box7").innerHTML=r    
            }
        }

        function pri() {
            if (ac!=p&&ac!=r) {
                document.getElementById("box1").innerHTML=r
            } 
            else if (b!=p&&b!=r) {
                document.getElementById("box2").innerHTML=r
            }
            else if (c!=p&&c!=r) {
                document.getElementById("box3").innerHTML=r
            }
            else if (d!=p&&d!=r) {
                document.getElementById("box4").innerHTML=r
            }
            else if (e!=p&&e!=r) {
                document.getElementById("box5").innerHTML=r
            }
            else if (f!=p&&f!=r) {
                document.getElementById("box6").innerHTML=r
            }
            else if (g!=p&&g!=r) {
                document.getElementById("box7").innerHTML=r
            }
            else if (h!=p&&h!=r) {
                document.getElementById("box8").innerHTML=r
            }
            else if (i!=p&&i!=r) {
                document.getElementById("box9").innerHTML=r
            }
        
        }


        if (ac==s&&b==s&&c==s) {
            document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
            var audio=document.getElementById("sound")
            audio.play(); gameOver = 1
        }
        else if(d===s&&e===s&&f===s) {
            document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
            var audio=document.getElementById("sound")
            audio.play(); gameOver = 1
        }
        else if(g===s&&h===s&&i===s) {
            document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
            var audio=document.getElementById("sound")
            audio.play(); gameOver = 1
        }
        else if (c===s&&f===s&&i===s) {
            document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
            var audio=document.getElementById("sound")
            audio.play(); gameOver = 1
        }
        else if (b===s&&e===s&&h===s) {
            document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
            var audio=document.getElementById("sound")
            audio.play(); gameOver = 1
        }
        else if(ac===s&&d===s&&g===s) {
            document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
            var audio=document.getElementById("sound")
            audio.play(); gameOver = 1
        }
        else if(ac===s&&e===s&&i===s) {
            document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
            var audio=document.getElementById("sound")
            audio.play(); gameOver = 1
        }
        else if(c===s&&e===s&&g===s) {
            document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
            var audio=document.getElementById("sound")
            audio.play(); gameOver = 1
        }

        else if ((ac===s||ac===r)&&(c===s||c===r)&&(g===s||g===r)&&(i===s||i===r)&&(b===s||b===r)&&(f===s||f===r)&&(h===s||h===r)&&(d===s||d===r)&&(e===s||e===r)) {
            this.innerHTML=s    
        }
        
        
           else if (ac===r&&e==r&&i!=(s)) {
                document.getElementById("box9").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            
            else if (ac===r&&i===r&&e!=(s)) {
                document.getElementById("box5").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (i===r&&e===r&&ac!=(s)) {
                document.getElementById("box1").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (c===r&&e===r&&g!=(s)) {
                document.getElementById("box7").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (c===r&&g===r&&e!=(s)) {
                document.getElementById("box5").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (g===r&&e===r&&c!=(s)) {
                document.getElementById("box3").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (ac===r&&b===r&&c!=(s)) {
                document.getElementById("box3").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (ac===r&&c===r&&b!=(s)) {
                document.getElementById("box2").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (c===r&&b===r&&ac!=(s)) {
                document.getElementById("box1").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (d===r&&e===r&&f!=(s)) {
                document.getElementById("box6").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (d===r&&f===r&&e!=(s)) {
                document.getElementById("box5").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (f===r&&e===r&&d!=(s)) {
                document.getElementById("box4").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (g===r&&h===r&&i!=(s)) {
                document.getElementById("box9").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (g===r&&i===r&&h!=(s)) {
                document.getElementById("box8").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (h===r&&i===r&&g!=(s)) {
                document.getElementById("box7").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (ac===r&&d===r&&g!=(s)) {
                document.getElementById("box7").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (ac===r&&g===r&&d!=(s)) {
                document.getElementById("box4").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (d===r&&g===r&&ac!=(s)) {
                document.getElementById("box1").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (h===r&&b===r&&e!=(s)) {
                document.getElementById("box5").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (e===r&&b===r&&h!=(s)) {
                document.getElementById("box8").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (e===r&&h===r&&b!=(s)) {
                document.getElementById("box2").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (c===r&&f===r&&i!=(s)) {
                document.getElementById("box9").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (c===r&&i===r&&f!=(s)) {
                document.getElementById("box6").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (f===r&&i===r&&c!=(s)) {
                document.getElementById("box3").innerHTML=r
                document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
        

            else if (ac===s&&i===s&&e===r&&(h!=s&&h!=r)) {
                document.getElementById("box8").innerHTML=r
            }
             else if (ac===s&&i===s&&e===r&&(b!=s&&b!=r)) {
                document.getElementById("box2").innerHTML=r
             }
             else if (c===s&&g===s&&e===r&&(b!=s&&b!=r)) {
                document.getElementById("box2").innerHTML=r
             }
             else if (c===s&&g===s&&e===r&&(h!=s&&h!=r)) {
                document.getElementById("box8").innerHTML=r
             }
             else if (d===s&&f===s&&e===r&&(g!=s&&g!=r)) {
                document.getElementById("box7").innerHTML=r
             }
             else if (d===s&&f===s&&e===r&&(c!=s&&c!=r)) {
                document.getElementById("box3").innerHTML=r
             }
             else if (b===s&&h===s&&e===r&&(i!=s&&i!=r)) {
                document.getElementById("box9").innerHTML=r
             }
             else if (b===s&&h===s&&e===r&&(ac!=s&&ac!=r)) {
                document.getElementById("box1").innerHTML=r
             }
             else if (ac===s&&e===s&&i===r&&(c!=s&&c!=r)) {
                document.getElementById("box3").innerHTML=r
             }
             else if (i===s&&e===s&&ac===r&&(g!=s&&g!=r)) {
                document.getElementById("box7").innerHTML=r
             }
             else if (g===s&&e===s&&c===r&&(ac!=s&&ac!=r)) {
                document.getElementById("box1").innerHTML=r
             }
             else if (c===s&&e===s&&g===r&&(i!=s&&i!=r)) {
                document.getElementById("box9").innerHTML=r
             }
         


            
            else if (i===s&&c===s&&(f!=s&&f!=r)) {
                document.getElementById("box6").innerHTML=r
            }
            
            else if (ac===s&&d===s&&(g!=s&&g!=r)) {
                document.getElementById("box7").innerHTML=r
            }
		else if (ac===s&&g===s&&(d!=s&&d!=r)) {
                document.getElementById("box4").innerHTML=r
            }
            else if (d===s&&g===s&&(ac!=s&&ac!=r)) {
                document.getElementById("box1").innerHTML=r
            }
            else if (g===s&&h===s&&(i!=s&&i!=r)) {
                document.getElementById("box9").innerHTML=r
            }
            else if (i===s&&h===s&&(g!=s&&g!=r)) {
                document.getElementById("box7").innerHTML=r
            }
            else if (i===s&&f===s&&(c!=s&&c!=r)) {
                document.getElementById("box3").innerHTML=r
            }
            else if (c===s&&f===s&&(i!=s&&i!=r)) {
                document.getElementById("box9").innerHTML=r
            }
            else if (b===s&&c===s&&(ac!=s&&ac!=r)) {
                document.getElementById("box1").innerHTML=r
            }
            else if (b===s&&ac===s&&(c!=s&&c!=r)) {
                document.getElementById("box3").innerHTML=r
            }
            else if (ac===s&&e===s&&(i!=s&&i!=r)) {
                document.getElementById("box9").innerHTML=r
            }
            else if (e===s&&i===s&&(ac!=s&ac!=r)) {
                document.getElementById("box1").innerHTML=r
            }
            else if (c===s&&e===s&&(g!=s&&g!=r)) {
                document.getElementById("box7").innerHTML=r
            }
            else if (e===s&&g===s&&(c!=s&&c!=r)) {
                document.getElementById("box3").innerHTML=r
            }
            else if (d===s&&e===s&&(f!=s&&f!=r)) {
                document.getElementById("box6").innerHTML=r
            }    
            else if (e===s&&f===s&&(d!=s&&d!=r)) {
                document.getElementById("box4").innerHTML=r
            }
            else if (e===s&&h===s&&(b!=s&&b!=r)) {
                document.getElementById("box2").innerHTML=r
            }
            else if (e===s&&b===s&&(h!=s&&h!=r)) {
                document.getElementById("box8").innerHTML=r
            }
        
        
            else if (h===r&&e===r&&b===s&&(d!=s&&d!=r)) {
                document.getElementById("box4").innerHTML=r
            }
            else if (d===r&&e===r&&f===s&&(h!=s&&h!=r)) {
                document.getElementById("box8").innerHTML=r
            }
            else if (b===r&&e===r&&h===s&&(f!=s&&f!=r)) {
                document.getElementById("box6").innerHTML=r
            }
            else if (f===r&&e===r&&d===s&&(b!=s&&b!=r)) {
                document.getElementById("box2").innerHTML=r
            }
            else if (g===s&&i===s&&(h!=s&&h!=r)) {
                document.getElementById("box8").innerHTML=r
            }
            else if (ac===s&&g===s&&(d!=s&&d!=r)) {
                document.getElementById("box4").innerHTML=r
            }
            else if (ac===s&&c===s&&(b!=s&&b!=r)) {
                document.getElementById("box2").innerHTML=r
            }
            
            else if (ac===s&&i===s&&(e!=s&&e!=r)) {
                document.getElementById("box5").innerHTML=r
            }
            else if (c===s&&g===s&&(e!=s&&e!=r)) {
                document.getElementById("box5").innerHTML=r
            }
            else if (d===s&&f===s&&(e!=s&&e!=r)) {
                document.getElementById("box5").innerHTML=r
            }
            else if (b===s&&h===s&&(e!=s&&e!=r)) {
                document.getElementById("box5").innerHTML=r
            }
        
            else if (b===s&&d===s&&(f!=s&&f!=r)) {
                document.getElementById("box6").innerHTML=r
            }
            else if (d===s&&h===s&&(b!=s&&b!=r)) {
                document.getElementById("box2").innerHTML=r
            }
            else if (h===s&&f===s&&(d!=s&&d!=r)) {
                document.getElementById("box4").innerHTML=r
            }
            else if (b===s&&f===s&&(h!=s&&h!=r)) {
                document.getElementById("box8").innerHTML=r
            }
            else if (b===s&&g===s&&(h!=s&&h!=r)) {
                document.getElementById("box8").innerHTML=r
            }
            else if (d===s&&i===s&&(f!=s&&f!=r)) {
                document.getElementById("box6").innerHTML=r
            }
            else if (h===s&&c===s&&(b!=s&&b!=r)) {
                document.getElementById("box2").innerHTML=r
            }
            else if (f===s&&ac===s&&(d!=s&&d!=r)) {
                document.getElementById("box4").innerHTML=r
            }
            else if (h===s&&ac===s&&(b!=s&&b!=r)) {
                document.getElementById("box2").innerHTML=r
            }
            else if (d===s&&c===s&&(f!=s&&f!=r)) {
                document.getElementById("box6").innerHTML=r
            }
            else if (f===s&&g===s&&(d!=s&&d!=r)) {
                document.getElementById("box4").innerHTML=r
            }
            else if (b===s&&i===s&&(h!=s&&h!=r)) {
                document.getElementById("box8").innerHTML=r
            }
        
            else if (e===s) {
                has()
            }
        
        
        else if (ac===s||c===s||g===s||i===s||b===s||f===s||h===s||d===s&&(e!=s&&e!=r)) {
            document.getElementById("box5").innerHTML=r
        }
            else if (ac===(s||r)||c===(s||r)||g===(s||r)||i===(s||r)||b===(s||r)||f===(s||r)||h===(s||r)&&d!=(s&&r)) {
                document.getElementById("box4").innerHTML=r        
            }
            else if (ac===(s||r)||c===(s||r)||g===(s||r)||i===(s||r)||b===(s||r)||f===(s||r)&&h!=(s&&r)) {
                document.getElementById("box8").innerHTML=r        
            }
            else if (ac===(s||r)||c===(s||r)||g===(s||r)||i===(s||r)||b===(s||r)&&f!=(s&&r)) {
                document.getElementById("box6").innerHTML=r        
            }
            else if (ac===(s||r)||c===(s||r)||g===(s||r)||i===(s||r)&&b!=(s&&r)) {
                document.getElementById("box2").innerHTML=r        
            }
            else if (ac===(s||r)||c===(s||r)||g===(s||r)&&i!=(s&&r)) {
                document.getElementById("box9").innerHTML=r        
            }
            else if (ac===(s||r)||c===(s||r)&&g!=(s&&r)) {
                document.getElementById("box7").innerHTML=r        
            }
            else if (ac===(s||r)&&c!=(s&&r)) {
                document.getElementById("box3").innerHTML=r        
            }
        
        
            else {
                pri()
            }
	     }
         }    

        document.getElementById("box1").onclick=a
        document.getElementById("box2").onclick=a
        document.getElementById("box3").onclick=a
        document.getElementById("box4").onclick=a
        document.getElementById("box5").onclick=a
        document.getElementById("box6").onclick=a
        document.getElementById("box7").onclick=a
        document.getElementById("box8").onclick=a
        document.getElementById("box9").onclick=a
    
    }
    document.getElementById("possible").onclick=possible
    function impossible() {
        document.getElementById("difficulty").style.display="none"
function a() {
if(this.innerHTML == "❌" || this.innerHTML == "⭕" || gameOver == 1)
			{}
		else{

    this.innerHTML="❌"
    var s="❌"
    var r="⭕"
var choose=Math.floor(Math.random()*4+1)      
var ac =document.getElementById("box1").innerHTML
var b =document.getElementById("box2").innerHTML
var c= document.getElementById("box3").innerHTML
var d= document.getElementById("box4").innerHTML
var e= document.getElementById("box5").innerHTML
var f= document.getElementById("box6").innerHTML
var g= document.getElementById("box7").innerHTML
var h= document.getElementById("box8").innerHTML
var i= document.getElementById("box9").innerHTML
function has() {

    if (choose===1&&(ac!=s&&ac!=r)) {
        document.getElementById("box1").innerHTML=r    
    }
    else if (choose===2&&(c!=s&&c!=r)) {
        document.getElementById("box3").innerHTML=r    
    }
    else if (choose===3&&(i!=s&&i!=r)) {
        document.getElementById("box9").innerHTML=r    
    }
    else if (choose===4&&(g!=s&&g!=r)) {
        document.getElementById("box7").innerHTML=r    
    }
}

function pri() {
    if (ac!=s&&ac!=r) {
        document.getElementById("box1").innerHTML=r
    } 
    else if (b!=s&&b!=r) {
        document.getElementById("box2").innerHTML=r
    }
    else if (c!=s&&c!=r) {
        document.getElementById("box3").innerHTML=r
    }
    else if (d!=s&&d!=r) {
        document.getElementById("box4").innerHTML=r
    }
    else if (e!=s&&e!=r) {
        document.getElementById("box5").innerHTML=r
    }
    else if (f!=s&&f!=r) {
        document.getElementById("box6").innerHTML=r
    }
    else if (g!=s&&g!=r) {
        document.getElementById("box7").innerHTML=r
    }
    else if (h!=s&&h!=r) {
        document.getElementById("box8").innerHTML=r
    }
    else if (i!=s&&i!=r) {
        document.getElementById("box9").innerHTML=r
    }

}


if (ac==s&&b==s&&c==s) {
    document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(d===s&&e===s&&f===s) {
    document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(g===s&&h===s&&i===s) {
    document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if (c===s&&f===s&&i===s) {
    document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if (b===s&&e===s&&h===s) {
    document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(ac===s&&d===s&&g===s) {
    document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(ac===s&&e===s&&i===s) {
    document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(c===s&&e===s&&g===s) {
    document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}

else if ((ac===s||ac===r)&&(c===s||c===r)&&(g===s||g===r)&&(i===s||i===r)&&(b===s||b===r)&&(f===s||f===r)&&(h===s||h===r)&&(d===s||d===r)&&(e===s||e===r)) {
    this.innerHTML=s    
}


   else if (ac===r&&e==r&&i!=(s)) {
        document.getElementById("box9").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    
    else if (ac===r&&i===r&&e!=(s)) {
        document.getElementById("box5").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (i===r&&e===r&&ac!=(s)) {
        document.getElementById("box1").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (c===r&&e===r&&g!=(s)) {
        document.getElementById("box7").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (c===r&&g===r&&e!=(s)) {
        document.getElementById("box5").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (g===r&&e===r&&c!=(s)) {
        document.getElementById("box3").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (ac===r&&b===r&&c!=(s)) {
        document.getElementById("box3").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (ac===r&&c===r&&b!=(s)) {
        document.getElementById("box2").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (c===r&&b===r&&ac!=(s)) {
        document.getElementById("box1").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (d===r&&e===r&&f!=(s)) {
        document.getElementById("box6").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (d===r&&f===r&&e!=(s)) {
        document.getElementById("box5").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (f===r&&e===r&&d!=(s)) {
        document.getElementById("box4").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (g===r&&h===r&&i!=(s)) {
        document.getElementById("box9").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (g===r&&i===r&&h!=(s)) {
        document.getElementById("box8").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (h===r&&i===r&&g!=(s)) {
        document.getElementById("box7").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (ac===r&&d===r&&g!=(s)) {
        document.getElementById("box7").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (ac===r&&g===r&&d!=(s)) {
        document.getElementById("box4").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (d===r&&g===r&&ac!=(s)) {
        document.getElementById("box1").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (h===r&&b===r&&e!=(s)) {
        document.getElementById("box5").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (e===r&&b===r&&h!=(s)) {
        document.getElementById("box8").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (e===r&&h===r&&b!=(s)) {
        document.getElementById("box2").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (c===r&&f===r&&i!=(s)) {
        document.getElementById("box9").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (c===r&&i===r&&f!=(s)) {
        document.getElementById("box6").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (f===r&&i===r&&c!=(s)) {
        document.getElementById("box3").innerHTML=r
        document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }

	else if (i===s&&c===s&&(f!=s&&f!=r)) {
        document.getElementById("box6").innerHTML=r
    }
    
    else if (ac===s&&d===s&&(g!=s&&g!=r)) {
        document.getElementById("box7").innerHTML=r
    }
    else if (d===s&&g===s&&(ac!=s&&ac!=r)) {
        document.getElementById("box1").innerHTML=r
    }
    else if (g===s&&h===s&&(i!=s&&i!=r)) {
        document.getElementById("box9").innerHTML=r
    }
    else if (i===s&&h===s&&(g!=s&&g!=r)) {
        document.getElementById("box7").innerHTML=r
    }
    else if (i===s&&f===s&&(c!=s&&c!=r)) {
        document.getElementById("box3").innerHTML=r
    }
    else if (c===s&&f===s&&(i!=s&&i!=r)) {
        document.getElementById("box9").innerHTML=r
    }
    else if (b===s&&c===s&&(ac!=s&&ac!=r)) {
        document.getElementById("box1").innerHTML=r
    }
    else if (b===s&&ac===s&&(c!=s&&c!=r)) {
        document.getElementById("box3").innerHTML=r
    }
    else if (ac===s&&e===s&&(i!=s&&i!=r)) {
        document.getElementById("box9").innerHTML=r
    }
    else if (ac===s&&g===s&&(d!=s&&d!=r)) {
        document.getElementById("box4").innerHTML=r
    }
    else if (e===s&&i===s&&(ac!=s&ac!=r)) {
        document.getElementById("box1").innerHTML=r
    }
    else if (c===s&&e===s&&(g!=s&&g!=r)) {
        document.getElementById("box7").innerHTML=r
    }
    else if (e===s&&g===s&&(c!=s&&c!=r)) {
        document.getElementById("box3").innerHTML=r
    }
    else if (d===s&&e===s&&(f!=s&&f!=r)) {
        document.getElementById("box6").innerHTML=r
    }    
    else if (e===s&&f===s&&(d!=s&&d!=r)) {
        document.getElementById("box4").innerHTML=r
    }
    else if (e===s&&h===s&&(b!=s&&b!=r)) {
        document.getElementById("box2").innerHTML=r
    }
    else if (e===s&&b===s&&(h!=s&&h!=r)) {
        document.getElementById("box8").innerHTML=r
    }

    

    else if (ac===s&&i===s&&e===r&&(h!=s&&h!=r)) {
        document.getElementById("box8").innerHTML=r
    }
     else if (ac===s&&i===s&&e===r&&(b!=s&&b!=r)) {
        document.getElementById("box2").innerHTML=r
     }
     else if (c===s&&g===s&&e===r&&(b!=s&&b!=r)) {
        document.getElementById("box2").innerHTML=r
     }
     else if (c===s&&g===s&&e===r&&(h!=s&&h!=r)) {
        document.getElementById("box8").innerHTML=r
     }
     else if (d===s&&f===s&&e===r&&(g!=s&&g!=r)) {
        document.getElementById("box7").innerHTML=r
     }
     else if (d===s&&f===s&&e===r&&(c!=s&&c!=r)) {
        document.getElementById("box3").innerHTML=r
     }
     else if (b===s&&h===s&&e===r&&(i!=s&&i!=r)) {
        document.getElementById("box9").innerHTML=r
     }
     else if (b===s&&h===s&&e===r&&(ac!=s&&ac!=r)) {
        document.getElementById("box1").innerHTML=r
     }
     else if (ac===s&&e===s&&i===r&&(c!=s&&c!=r)) {
        document.getElementById("box3").innerHTML=r
     }
     else if (i===s&&e===s&&ac===r&&(g!=s&&g!=r)) {
        document.getElementById("box7").innerHTML=r
     }
     else if (g===s&&e===s&&c===r&&(ac!=s&&ac!=r)) {
        document.getElementById("box1").innerHTML=r
     }
     else if (c===s&&e===s&&g===r&&(i!=s&&i!=r)) {
        document.getElementById("box9").innerHTML=r
     }

    
    


    else if (h===r&&e===r&&b===s&&(d!=s&&d!=r)) {
        document.getElementById("box4").innerHTML=r
    }
    else if (d===r&&e===r&&f===s&&(h!=s&&h!=r)) {
        document.getElementById("box8").innerHTML=r
    }
    else if (b===r&&e===r&&h===s&&(f!=s&&f!=r)) {
        document.getElementById("box6").innerHTML=r
    }
    else if (f===r&&e===r&&d===s&&(b!=s&&b!=r)) {
        document.getElementById("box2").innerHTML=r
    }
    else if (g===s&&i===s&&(h!=s&&h!=r)) {
        document.getElementById("box8").innerHTML=r
    }
    else if (ac===s&&g===s&&(d!=s&&d!=r)) {
        document.getElementById("box4").innerHTML=r
    }
    else if (ac===s&&c===s&&(b!=s&&b!=r)) {
        document.getElementById("box2").innerHTML=r
    }
    
    else if (ac===s&&i===s&&(e!=s&&e!=r)) {
        document.getElementById("box5").innerHTML=r
    }
    else if (c===s&&g===s&&(e!=s&&e!=r)) {
        document.getElementById("box5").innerHTML=r
    }
    else if (d===s&&f===s&&(e!=s&&e!=r)) {
        document.getElementById("box5").innerHTML=r
    }
    else if (b===s&&h===s&&(e!=s&&e!=r)) {
        document.getElementById("box5").innerHTML=r
    }

    else if (b===s&&d===s&&(ac!=s&&ac!=r)) {
        document.getElementById("box1").innerHTML=r
    }
    else if (d===s&&h===s&&(g!=s&&g!=r)) {
        document.getElementById("box7").innerHTML=r
    }
    else if (h===s&&f===s&&(i!=s&&i!=r)) {
        document.getElementById("box9").innerHTML=r
    }
    else if (b===s&&f===s&&(c!=s&&c!=r)) {
        document.getElementById("box3").innerHTML=r
    }
    else if (b===s&&g===s&&(ac!=s&&ac!=r)) {
        document.getElementById("box1").innerHTML=r
    }
    else if (d===s&&i===s&&(g!=s&&g!=r)) {
        document.getElementById("box7").innerHTML=r
    }
    else if (h===s&&c===s&&(i!=s&&i!=r)) {
        document.getElementById("box9").innerHTML=r
    }
    else if (f===s&&ac===s&&(c!=s&&c!=r)) {
        document.getElementById("box3").innerHTML=r
    }
    else if (h===s&&ac===s&&(g!=s&&g!=r)) {
        document.getElementById("box7").innerHTML=r
    }
    else if (d===s&&c===s&&(ac!=s&&ac!=r)) {
        document.getElementById("box1").innerHTML=r
    }
    else if (f===s&&g===s&&(i!=s&&i!=r)) {
        document.getElementById("box9").innerHTML=r
    }
    else if (b===s&&i===s&&(c!=s&&c!=r)) {
        document.getElementById("box3").innerHTML=r
    }

    else if (e===s) {
        has()
    }


else if (ac===s||c===s||g===s||i===s||b===s||f===s||h===s||d===s&&(e!=s&&e!=r)) {
    document.getElementById("box5").innerHTML=r
}
    else if (ac===(s||r)||c===(s||r)||g===(s||r)||i===(s||r)||b===(s||r)||f===(s||r)||h===(s||r)&&d!=(s&&r)) {
        document.getElementById("box4").innerHTML=r        
    }
    else if (ac===(s||r)||c===(s||r)||g===(s||r)||i===(s||r)||b===(s||r)||f===(s||r)&&h!=(s&&r)) {
        document.getElementById("box8").innerHTML=r        
    }
    else if (ac===(s||r)||c===(s||r)||g===(s||r)||i===(s||r)||b===(s||r)&&f!=(s&&r)) {
        document.getElementById("box6").innerHTML=r        
    }
    else if (ac===(s||r)||c===(s||r)||g===(s||r)||i===(s||r)&&b!=(s&&r)) {
        document.getElementById("box2").innerHTML=r        
    }
    else if (ac===(s||r)||c===(s||r)||g===(s||r)&&i!=(s&&r)) {
        document.getElementById("box9").innerHTML=r        
    }
    else if (ac===(s||r)||c===(s||r)&&g!=(s&&r)) {
        document.getElementById("box7").innerHTML=r        
    }
    else if (ac===(s||r)&&c!=(s&&r)) {
        document.getElementById("box3").innerHTML=r        
    }


    else {
        pri()
    }
  }
 }
document.getElementById("box1").onclick=a
document.getElementById("box2").onclick=a
document.getElementById("box3").onclick=a
document.getElementById("box4").onclick=a
document.getElementById("box5").onclick=a
document.getElementById("box6").onclick=a
document.getElementById("box7").onclick=a
document.getElementById("box8").onclick=a
document.getElementById("box9").onclick=a
}
document.getElementById("impossible").onclick=impossible


}


function O() {
    document.getElementById("character").style.display="none"
    var ac =document.getElementById("box1").innerHTML
    var b =document.getElementById("box2").innerHTML
    var c= document.getElementById("box3").innerHTML
    var d= document.getElementById("box4").innerHTML
    var e= document.getElementById("box5").innerHTML
    var f= document.getElementById("box6").innerHTML
    var g= document.getElementById("box7").innerHTML
    var h= document.getElementById("box8").innerHTML
    var i= document.getElementById("box9").innerHTML
    
    var chose=Math.floor(Math.random()*6+1)
    var s="❌"
    var r="⭕"

    if (chose===1) {
        document.getElementById("box5").innerHTML=s
    }
     else if (chose==2) {
        document.getElementById("box1").innerHTML=s
     }
     else if (chose===3) {
        document.getElementById("box3").innerHTML=s
     } 
     else if (chose===4) {
        document.getElementById("box9").innerHTML=s
     } 
     else if (chose===5) {
        document.getElementById("box7").innerHTML=s
     } 
     else if (chose===6) {
        document.getElementById("box5").innerHTML=s
     }  


    function a() {
	if(this.innerHTML == "❌" || this.innerHTML == "⭕" || gameOver == 1)
			{}
		else{

        this.innerHTML="⭕"

        var p="❌"
            var r="⭕"

            var ac =document.getElementById("box1").innerHTML
            var b =document.getElementById("box2").innerHTML
            var c= document.getElementById("box3").innerHTML
            var d= document.getElementById("box4").innerHTML
            var e= document.getElementById("box5").innerHTML
            var f= document.getElementById("box6").innerHTML
            var g= document.getElementById("box7").innerHTML
            var h= document.getElementById("box8").innerHTML
            var i= document.getElementById("box9").innerHTML


function pri() {
    if (ac!=p&&ac!=r) {
        document.getElementById("box1").innerHTML=p
    } 
    else if (b!=p&&b!=r) {
        document.getElementById("box2").innerHTML=p
    }
    else if (c!=p&&c!=r) {
        document.getElementById("box3").innerHTML=p
    }
    else if (d!=p&&d!=r) {
        document.getElementById("box4").innerHTML=p
    }
    else if (e!=p&&e!=r) {
        document.getElementById("box5").innerHTML=p
    }
    else if (f!=p&&f!=r) {
        document.getElementById("box6").innerHTML=p
    }
    else if (g!=p&&g!=r) {
        document.getElementById("box7").innerHTML=p
    }
    else if (h!=p&&h!=r) {
        document.getElementById("box8").innerHTML=p
    }
    else if (i!=p&&i!=r) {
        document.getElementById("box9").innerHTML=p
    }

}

if (ac===r&&b===r&&c===r) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(d===r&&e===r&&f===r) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(g===r&&h===r&&i===r) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if (c===r&&f===r&&i===r) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if (b===r&&e===r&&h===r) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(ac===r&&d===r&&g===r) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(ac===r&&e===r&&i===r) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(c===r&&e===r&&g===r) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}        

 else if ((ac===s||ac===r)&&(c===s||c===r)&&(g===s||g===r)&&(i===s||i===r)&&(b===s||b===r)&&(f===s||f===r)&&(h===s||h===r)&&(d===s||d===r)&&(e===s||e===r)) {
    this.innerHTML=p    
}

            else if (ac===p&&c===p&&(b!=p&&b!=r)) {
                document.getElementById("box2").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (d===p&&f===p&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (g===p&&i===p&&(h!=p&&h!=r)) {
                document.getElementById("box8").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (ac===p&&g===p&&(d!=p&&d!=r)) {
                document.getElementById("box4").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (b===p&&h===p&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (c===p&&i===p&&(f!=p&&f!=r)) {
                document.getElementById("box6").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (ac===p&&i===p&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (c===p&&g===p&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }

            else if (ac===p&&b===p&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (b===p&&c===p&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (e===p&&f===p&&(d!=p&&d!=r)) {
                document.getElementById("box4").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (g===p&&h===p&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (h===p&&i===p&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (d===p&&g===p&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (ac===p&&d===p&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (b===p&&e===p&&(h!=p&&h!=r)) {
                document.getElementById("box8").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (e===p&&h===p&&(b!=p&&b!=r)) {
                document.getElementById("box2").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (c===p&&f===p&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (f===p&&i===p&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (ac===p&&e===p&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (e===p&&i===p&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (c===p&&e===p&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }
            else if (e===p&&g===p&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
                document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
                var audio=document.getElementById("sound")
                audio.play(); gameOver = 1
            }





            else if (ac===r&&c===r&&(b!=p&&b!=r)) {
                document.getElementById("box2").innerHTML=p
            }
            else if (d===r&&f===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
            }
            else if (g===r&&i===r&&(h!=p&&h!=r)) {
                document.getElementById("box8").innerHTML=p
            }
            else if (ac===r&&g===r&&(d!=p&&d!=r)) {
                document.getElementById("box4").innerHTML=p
            }
            else if (b===r&&h===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
            }
            else if (c===r&&i===r&&(f!=p&&f!=r)) {
                document.getElementById("box6").innerHTML=p
            }
            else if (ac===r&&i===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
            }
            else if (c===r&&g===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
            }

            else if (ac===r&&b===r&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
            }
            else if (b===r&&c===r&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
            }
            else if (d===r&&e===r&&(f!=p&&f!=r)) {
                document.getElementById("box6").innerHTML=p
            }
            else if (e===r&&f===r&&(d!=p&&d!=r)) {
                document.getElementById("box4").innerHTML=p
            }
            else if (g===r&&h===r&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
            }
            else if (h===r&&i===r&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
            }
            else if (d===r&&g===r&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
            }
            else if (ac===r&&d===r&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
            }
            else if (b===r&&e===r&&(h!=p&&h!=r)) {
                document.getElementById("box8").innerHTML=p
            }
            else if (e===r&&h===r&&(b!=p&&b!=r)) {
                document.getElementById("box2").innerHTML=p
            }
            else if (c===r&&f===r&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
            }
            else if (f===r&&i===r&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
            }
            else if (ac===r&&e===r&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
            }
            else if (e===r&&i===r&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
            }
            else if (c===r&&e===r&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
            }
            else if (e===r&&g===r&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
            }

            
            else if (ac===p&&g===r&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
            }    
             else if (ac===p&&d===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (ac===p&&b===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (ac===p&&c===r&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
             }
             else if (ac===p&&f===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (ac===p&&i===r&&(e!=p&&e!=r)) {
                var random = Math.floor(Math.random()*2)+1
                if(random == 1){
                    document.getElementById("box7").innerHTML=p
                }
                if(random == 2){
                    document.getElementById("box3").innerHTML=p
                }
             }
             else if (ac===p&&h===r&&(i!=p&&i!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (ac===p&&e===r&&(f!=p&&f!=r)) {
                document.getElementById("box6").innerHTML=p
             }
             else if (ac===p&&e===r&&(h!=p&&h!=r)) {
                document.getElementById("box8").innerHTML=p
             }

             else if (c===p&&i===r&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
             }
             else if (c===p&&h===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (c===p&&g===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (c===p&&d===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (c===p&&ac===r&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
             }
             else if (c===p&&b===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (c===p&&f===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (c===p&&e===r&&(d!=p&&d!=r)) {
                document.getElementById("box4").innerHTML=p
             }
             else if (c===p&&e===r&&(h!=p&&h!=r)) {
                document.getElementById("box8").innerHTML=p
             }

             else if (i===p&&h===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (i===p&&g===r&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
             }
             else if (i===p&&d===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (i===p&&ac===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (i===p&&b===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (i===p&&c===r&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
             }
             else if (i===p&&f===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (i===p&&e===r&&(d!=p&&d!=r)) {
                document.getElementById("box4").innerHTML=p
             }
             else if (i===p&&e===r&&(b!=p&&b!=r)) {
                document.getElementById("box2").innerHTML=p
             }

             else if (g===p&&i===r&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
             }
             else if (g===p&&h===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (g===p&&d===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (g===p&&ac===r&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
             }
             else if (g===p&&b===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (g===p&&c===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (g===p&&f===r&&(e!=p&&e!=r)) {
                document.getElementById("box5").innerHTML=p
             }
             else if (g===p&&e===r&&(b!=p&&b!=r)) {
                document.getElementById("box2").innerHTML=p
             }
             else if (g===p&&e===r&&(f!=p&&f!=r)) {
                document.getElementById("box6").innerHTML=p
             }

             else if (e===p&&ac===r&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
             }
             else if (e===p&&c===r&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
             }
             else if (e===p&&i===r&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
             }
             else if (e===p&&g===r&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
             }
             else if (e===p&&d===r&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
             }
             else if (e===p&&b===r&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
             }
             else if (e===p&&f===r&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
             }
             else if (e===p&&h===r&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
             }
             

            else if (ac===p&&e===p&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
             }
             else if (ac===p&&e===p&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
             }
             else if (c===p&&e===p&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
             }
             else if (c===p&&e===p&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
             }
             else if (i===p&&e===p&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
             }
             else if (i===p&&e===p&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
             }
             else if (g===p&&e===p&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
             }
             else if (g===p&&e===p&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
             }
             else if (ac===p&&i===p&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
             }
             else if (ac===p&&i===p&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
             }
             else if (c===p&&g===p&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
             }
             else if (c===p&&g===p&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
             }
             else if (ac===p&&h===p&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
             }
             else if (g===p&&f===p&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
             }
             else if (i===p&&b===p&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
             }
             else if (c===p&&d===p&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
             }
             else if (c===p&&h===p&&(i!=p&&i!=r)) {
                document.getElementById("box9").innerHTML=p
             }
             else if (i===p&&d===p&&(g!=p&&g!=r)) {
                document.getElementById("box7").innerHTML=p
             }
             else if (g===p&&b===p&&(ac!=p&&ac!=r)) {
                document.getElementById("box1").innerHTML=p
             }
             else if (ac===p&&f===p&&(c!=p&&c!=r)) {
                document.getElementById("box3").innerHTML=p
             }
            else{
                pri()
            }
	}
    }
    document.getElementById("box1").onclick=a
    document.getElementById("box2").onclick=a
    document.getElementById("box3").onclick=a
    document.getElementById("box4").onclick=a
    document.getElementById("box5").onclick=a
    document.getElementById("box6").onclick=a
    document.getElementById("box7").onclick=a
    document.getElementById("box8").onclick=a
    document.getElementById("box9").onclick=a    

}
document.getElementById("x").onclick=X
document.getElementById("o").onclick=O




function two_players() {
var check = 0;
function player_x() {
if(this.innerHTML == "❌" || this.innerHTML == "⭕" || gameOver == 1)
	{}
		else{

if(check == 0){

this.innerHTML="❌"
var a =document.getElementById("box1").innerHTML
var b =document.getElementById("box2").innerHTML
var c= document.getElementById("box3").innerHTML
var d= document.getElementById("box4").innerHTML
var e= document.getElementById("box5").innerHTML
var f= document.getElementById("box6").innerHTML
var g= document.getElementById("box7").innerHTML
var h= document.getElementById("box8").innerHTML
var i= document.getElementById("box9").innerHTML
    var x="❌"

    if (a==x&&b==x&&c==x) {
        document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if(d===x&&e===x&&f===x) {
        document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if(g===x&&h===x&&i===x) {
        document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (c===x&&f===x&&i===x) {
        document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if (b===x&&e===x&&h===x) {
        document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if(a===x&&d===x&&g===x) {
        document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if(a===x&&e===x&&i===x) {
        document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else if(c===x&&e===x&&g===x) {
        document.getElementById("winner").innerHTML="PLAYER X IS THE WINNER"
        var audio=document.getElementById("sound")
        audio.play(); gameOver = 1
    }
    else {
        //document.getElementById("winner").innerHTML="continue"
    }
check = 1;
}
else{
this.innerHTML="⭕"
player_o()
}
}
}
function player_o() {
var a =document.getElementById("box1").innerHTML
var b =document.getElementById("box2").innerHTML
var c= document.getElementById("box3").innerHTML
var d= document.getElementById("box4").innerHTML
var e= document.getElementById("box5").innerHTML
var f= document.getElementById("box6").innerHTML
var g= document.getElementById("box7").innerHTML
var h= document.getElementById("box8").innerHTML
var i= document.getElementById("box9").innerHTML
var o="⭕"

if (a===o&&b===o&&c===o) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(d===o&&e===o&&f===o) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(g===o&&h===o&&i===o) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if (c===o&&f===o&&i===o) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if (b===o&&e===o&&h===o) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(a===o&&d===o&&g===o) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(a===o&&e===o&&i===o) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else if(c===o&&e===o&&g===o) {
    document.getElementById("winner").innerHTML="PLAYER O IS THE WINNER"
    var audio=document.getElementById("sound")
    audio.play(); gameOver = 1
}
else {
    //document.getElementById("winner").innerHTML="continue"
}
check = 0
}

document.getElementById("box1").onclick=player_x
document.getElementById("box2").onclick=player_x
document.getElementById("box3").onclick=player_x
document.getElementById("box4").onclick=player_x
document.getElementById("box5").onclick=player_x
document.getElementById("box6").onclick=player_x
document.getElementById("box7").onclick=player_x
document.getElementById("box8").onclick=player_x
document.getElementById("box9").onclick=player_x

document.getElementById("div").style.display="none"
}
document.getElementById("multiplayer").onclick=two_players