const search = () =>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const listitems=document.getElementById("product-list");
    const product=document.querySelectorAll(".product");
    const pname=listitems.getElementsByTagName("h2");
    for(var i=0;i<pname.length;i++){
        let match=product[i].getElementsByTagName("h2")[0];
        if(match){
            let x = match.textContent || match.innerHTML;
            if(x.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display="";
            }
            else{
                product[i].style.display="none"
            }
        }


    }
}