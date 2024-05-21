const [container] = document.getElementsByClassName("container")
const navSection = document.getElementById("navListMobile");
const navItems = document.getElementsByClassName("mobileNav")
container.addEventListener("click",()=>{
    if(navSection.classList.contains("show"))
    {
        closeNav();
    }
    else
    {
        openNav();
    }
})

const navLinks = document.getElementsByClassName("mobileNav");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click",function(){
        closeNav();
    })
}

function closeNav()
{
    navSection.classList.remove('show');
    for (let index = 0; index < navItems.length; index++) {
        const element = navItems[index];
        element.classList.remove("animate");
        element.style.visibility = "hidden"
    }
    navSection.style.maxHeight= "0vh";
}

function openNav()
{
    navSection.classList.add('show');
    navItems[0].classList.add("animate");
    for (let index = 0; index < navItems.length; index++) {
        const element = navItems[index];
        element.style.visibility = "visible"
        element.classList.add("animate");
    }
    navSection.style.maxHeight= "100vh";
}