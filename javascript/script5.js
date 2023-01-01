var arr=[{tag:'php',name:'react native',price:29,image:'react.png'},{tag:'php',name:'react native',price:29,image:'react.png'},
{tag:'php',name:'react none',price:29,image:'react.png'},
{tag:'js',name:'react la',price:23,image:'react.png'},
{tag:'js',name:'react ba',price:10,image:'react.png'},
{tag:'js',name:'react hopa',price:10,image:'react.png'},
{tag:'js',name:'react os',price:20,image:'aaaa.png'},
{tag:'php',name:'react op',price:5,image:'aaaa.png'}
]

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
var aa=document.getElementById("c1");

for(i=0;i<3;i++){
    addcartecourse(arr[i],aa);
}



