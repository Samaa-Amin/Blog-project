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

function create(){
    var list = JSON.parse(xhr.response);
    

        // i don't need this condition bec getarr is already created in landing page
        if(!getarr){
            for(i = 0 ; i<lisgett.length ; i++){
            var table = document.getElementsByTagName("table")[0];
        
            var tr =document.createElement("tr");
            table.appendChild(tr);
            var postname= document.createElement("td");
            var postcontent= document.createElement("td");
            var action= document.createElement("td");
            tr.appendChild(postname);
            tr.appendChild(postcontent);
            tr.appendChild(action);
        
            // create edite and delete buttons
            var edite = document.createElement("a");
            var remove  = document.createElement("button");
            action.appendChild(edite);
            action.appendChild(remove);
            edite.innerText="Edite";
            remove.innerText="Delete";

            console.log("data from ajax")

            // assign data from json file to created elements
            postname.innerText=list[i].title;
            postcontent.innerText=list[i].body;

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
                var table = document.getElementsByTagName("table")[0];
        
                var tr =document.createElement("tr");
                table.appendChild(tr);
                var postname= document.createElement("td");
                var postcontent= document.createElement("td");
                var action= document.createElement("td");
                tr.appendChild(postname);
                tr.appendChild(postcontent);
                tr.appendChild(action);
        
                // create edite and delete buttons
                var edite = document.createElement("a");
                var remove  = document.createElement("button");
                action.appendChild(edite);
                action.appendChild(remove);
                edite.innerText="Edite";
                remove.innerText="Delete";
            // assign data from local storage (arr) to created elements
                console.log("data from array")
                postname.innerText=getarr[i].title;
                postcontent.innerText=getarr[i].body;
            }
        }
    localStorage.setItem("key",JSON.stringify(arr));
}

function editebtn(){
    
    // convert btns from html collection into array
    var editebtn = document.getElementsByTagName("a");
    var edites= Array.from(editebtn)
    

    for(var i =0;  i<edites.length;i++){
        edites[i].addEventListener('click',edite)
        edites[i].setAttribute("href","./edite.html.html")
        edites[i].setAttribute("id",getarr[i].id);
    }
    function edite(){
        console.log("iam in")
        var id = this.getAttribute("id");
        for(var i =0;  i<getarr.length;i++){
            if(id==getarr[i].id){
                localStorage.setItem("id",getarr[i].id)
                localStorage.setItem("title",getarr[i].title)
                localStorage.setItem("body",getarr[i].body)
            }
        }
    }
}

function deletebtn(){
      // convert btns from html collection into array
    var deletebtn = document.getElementsByTagName("button");
    var deletes =Array.from(deletebtn);

    for(var i =0;  i<deletes.length;i++){
        deletes[i].addEventListener('click',deletehandler)
        deletes[i].setAttribute("name",getarr[i].id);
    }

    function deletehandler(){
        var conf = confirm("are you sure you want to delete this article?");
        if(conf){
            var name = this.getAttribute("name");
            for(var i =0;  i<getarr.length;i++){
                if(name==getarr[i].id){
                    this.parentElement.parentElement.remove();
                    var index = getarr.indexOf(getarr[i]);
                    console.log(index);
                    getarr.splice(index,1);
                    localStorage.setItem("key",JSON.stringify(getarr));
                }
            }
        }
    }
}

xhr.onload = function(){
    create();
    editebtn()
    deletebtn()
}