var db,chat,chat1,inp,userid,messno=0;
var pos=30;
var Input;
var play;
var chatpin,chatpin1;
function preload(){
 play= loadSound("ping.mp3")
}
function setup(){
    createCanvas(500,500);
    db=firebase.database();
    var chit=db.ref('Input');
    chit.on('value',readChat,showError);
    userid=prompt("are you user 1 or 2? Type only the number.")
    var chit1=db.ref('Input1');
    chit1.on('value',readChat1,showError);
    inp=createInput("send here!");
    pos=30
}
function draw(){
    background("red");
if(userid==1){
    if(keyCode==ENTER){
        chatt(inp.value())
    }
    text(chat,10,pos);
    text(chat1,10,pos+30);
    if(chatpin!==chat1){
        play.play()
        chatpin=chat1
    }
}
if(userid==2){
    if(keyCode==ENTER){
        chatt1(inp.value())
    }
    text(chat1,10,pos);
    text(chat,10,pos+30);
    if(chatpin1!==chat){
        play.play()
        chatpin1=chat
    }
}
}

function chatt(chat1){
    db.ref("Input").set({
     "Chat":chat1
    })    
}
function chatt1(chat1){
    db.ref("Input1").set({
     "Chat":chat1
    })    
}

function readChat(data){
    Input=data.val();
     chat=Input.Chat;
}
function readChat1(data){
    Input1=data.val();
     chat1=Input1.Chat;
}
function showError(){
    console.log("errormsg");
    
}

