const dec=document.getElementById("dec");
const res=document.getElementById("Res");
const inc=document.getElementById("Inc");
const countLabel=document.getElementById("LabelId");
let count=0; 
inc.onclick=function(){
    count++;
    countLabel.textContent=count;
}
dec.onclick=function(){
    count--;
    countLabel.textContent=count;
}
res.onclick=function(){
    count=0;
    countLabel.textContent=count;
}

