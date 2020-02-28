var titlearea = document.getElementById("title");
var bodyarea = document.getElementById("body");

// get title and body from local storage

var title = localStorage.getItem("title");
titlearea.defaultValue =title;

var body = localStorage.getItem("body");
bodyarea.defaultValue=body;

var id = localStorage.getItem("id")

// after editing

var save = document.getElementById("btn");
save.addEventListener("click",savehandler)

function savehandler(e){
    e.preventDefault();
    if(bodyarea.value && titlearea.value){
        var getarr = JSON.parse(localStorage.getItem("key"));
        localStorage.setItem("title",titlearea.value);
        localStorage.setItem("body",bodyarea.value);

        for(i=0 ; i<getarr.length ;  i++){
            if(id==getarr[i].id){
                getarr[i].title=localStorage.getItem("title");
                getarr[i].body = localStorage.getItem("body");
            }
        }
        localStorage.setItem("key",JSON.stringify(getarr));
    }
    window.location.href = "./manage.html"
}


