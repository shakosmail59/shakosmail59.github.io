let navLinks = document.getElementById("navLinks");
let nav_links = document.querySelector(".nav-links");

function showMenu() {
    navLinks.style.right = "0";
    // nav_links.style.display = 'block';
}

function hideMenu() {
    navLinks.style.right = "-200px";
    // nav_links.style.display = 'none';
}


// class person
// {
//     constructor(name)
//     {
//         this.name = name;
//     }

//      print() 
//      {
//         console.log(this.name);
//      }
// }


// const per = new person("shako");
// per.print();