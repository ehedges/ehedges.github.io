const [container] = document.getElementsByClassName("container")
const navSection = document.getElementById("navListMobile");
const navItems = document.getElementsByClassName("navItem")
container.addEventListener("click",()=>{
    console.log(navSection.classList);
    if(navSection.classList.contains("hidden"))
    {
        openNav();
    }
    else
    {
        closeNav();
    }
})

const navLinks = document.getElementsByClassName("navItem");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click",function(){
        closeNav();
    })
}

function closeNav()
{
    navSection.classList.remove('display');
    navSection.classList.add('hidden');
    for (let index = 0; index < navItems.length; index++) {
        const element = navItems[index];
        element.classList.remove("animate");
    }
}

function openNav()
{
    navItems[0].classList.add("animate");
    for (let index = 1; index < navItems.length; index++) {
        const element = navItems[index];
        element.classList.add("animate");
    }
    navSection.classList.add('display');
    navSection.classList.remove('hidden');
}