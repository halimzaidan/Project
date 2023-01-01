var arr=[{tag:'php',name:'react native',price:29,image:'react.png'},{tag:'php',name:'react native',price:29,image:'PHP-logo.svg.png'},
{tag:'php',name:'react none',price:29,image:'introduction-CSS-web-og-v1.png'},
{tag:'js',name:'react la',price:23,image:'index.png'},
{tag:'js',name:'react ba',price:10,image:'index.jpg'},
{tag:'js',name:'react hopa',price:10,image:'CSSTutorial.png'},
{tag:'js',name:'react os',price:20,image:'react.png'},
{tag:'php',name:'react op',price:5,image:'react.png'}
]

var search;

function clear() {
var first = root.firstElementChild;
    while (first) {
    first.remove();
    first = root.firstElementChild;
    }
    }




function clickHandler(tag){
    if(tag=="all"){
        search=arr;
        clear();
        search.forEach(element => {
            addcartecourse(element,root);
        }); 
    }else{
       search=arr.filter(element=>element.tag==tag);
    clear();
    search.forEach(element => {
        addcartecourse(element,root);
    }); 
    }
    
}

   

var range=document.getElementById("range-min");
function changeHandler(event) {
    document.getElementById("valueofslider").innerText=document.getElementById("range-min").value;
    var j=document.getElementById("range-min").value;
    console.log(j);
    clear();
    search=arr.filter(element=>element.price<= j);
    console.log(search);
    search.forEach(element => {
        addcartecourse(element,root);
    });
 }

 


range.addEventListener('change',changeHandler);

var root=document.getElementById("component");


function addcartecourse(element,root){
    var a=document.createElement("div");
    var imagen=document.createElement("img");
    imagen.setAttribute("src",element.image);
    imagen.setAttribute("width","200px");
    imagen.setAttribute("height","100px");
    var title=document.createElement("p");
    title.textContent=element.name;
    title.style.margin="1px";
    title.style.color="gray";
    var price=document.createElement("p");
    price.textContent=element.price+"$";
    price.style.margin="1px";
    imagen.style.borderRadius="3px";

    a.style.width="200px";
    a.style.height="130 px";
    a.style.display="flex";
    a.style.flexDirection="column";
    a.style.textAlign="center";
    a.appendChild(imagen);
    a.appendChild(title);
    a.appendChild(price);
    root.appendChild(a);    
}










