var xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
xhr.send();

var getarr = JSON.parse(localStorage.getItem("key"));

if(!getarr){
    var arr=[]
}else{
    var arr=getarr;
}

var obj;


// create and append to posts section
function create(){
    var list = JSON.parse(xhr.response);
    var posts = document.getElementsByClassName("posts")[0];


        if(!getarr){
            for(i = 0 ; i<list.length ; i++){
                var newdiv = document.createElement("div");
                posts.appendChild(newdiv);
        
                // create h2 and append it too new div
                var title = document.createElement("h2");
                newdiv.appendChild(title)
        
                // create p for body and append it to newdiv
                var body = document.createElement("p");
                newdiv.appendChild(body)

            console.log("data from ajax")
            
            // assign data from json file to created elements
            title.innerText=list[i].title;
            title.classList.add("underline");
            body.innerText=list[i].body;

            // create arr and push obj into it
            var obj={
                id:list[i].id,
                title:list[i].title,
                body:list[i].body
            }
            arr.push(obj);
        }
        }
        else{

            for(i = 0 ; i<getarr.length ; i++){
                var newdiv = document.createElement("div");
                posts.appendChild(newdiv);
        
                // create h2 and append it too new div
                var title = document.createElement("h2");
                newdiv.appendChild(title)
        
                // create p for body and append it to newdiv
                var body = document.createElement("p");
                newdiv.appendChild(body)
            // assign data from local storage (arr) to created elements
                console.log("data from array")
                title.innerText=getarr[i].title;
                title.classList.add("underline");
                body.innerText=getarr[i].body;
            }
        }
    
    // save arr in local storage
    localStorage.setItem("key",JSON.stringify(arr));
}


xhr.onload = function(){
    create();
}





