//header

const timepriHoverImg = document.querySelectorAll(".dropdown-img");// lay ra toan bo the img co class la .dropdown-img
const aTagTimepriHoverImg = document.querySelectorAll(".timepieces-a-hover"); //lay ra toan bo the a co class la .timepieces-a-hover

const jewelHoverImg = document.querySelectorAll(".jewel-dropdown-img"); //lay ra toan bo the img co class la .jewel-dropdown-img
const aTagJewelHoverImg = document.querySelectorAll(".jewellery-a-hover");//lay ra toan bo the a co class la .jewellery-a-hover

const posHoverImg = document.querySelectorAll(".pos-dropdown-img"); //lay ra toan bo the img co class la .pos-dropdown-img
const posATagHoverImg = document.querySelectorAll(".pos-a-hover");//lay ra toan bo the a co class la .pos-a-hover

const hobHoverImg = document.querySelectorAll(".hob-dropdown-img");//lay ra toan bo the img co class la .hob-dropdown-img
const hobATagHoverImg = document.querySelectorAll(".hob-a-hover");//lay ra toan bo the a co class la .hob-a-hover

const sHoverImg = document.querySelectorAll(".s-dropdown-img");//lay ra toan bo the img co class la .s-dropdown-img
const sATagHoverImg = document.querySelectorAll(".s-a-hover");//lay ra toan bo the a co class la .s-a-hover

const hHoverImg = document.querySelectorAll(".h-dropdown-img");//lay ra toan bo the img co class la .h-dropdown-img
const hATagHoverImg = document.querySelectorAll(".h-a-hover");//lay ra toan bo the a co class la ..h-a-hover

const userServiceIcon = document.querySelector("#userService"); //lay ra icon user co id #userService
const divUserServiceChoice = document.querySelector(".user-services"); //lay ra the div co class .user-services



showHoverImg(timepriHoverImg,0); // hien thi anh o vi tri 0 trong timepriHoverImg
showHoverImg(jewelHoverImg,0);// hien thi anh o vi tri 0 trong jewelHoverImg
showHoverImg(hobHoverImg,0);// hien thi anh o vi tri 0 trong hobHoverImg
showHoverImg(sHoverImg,0);// hien thi anh o vi tri 0 trong sHoverImg
showHoverImg(hHoverImg,0);// hien thi anh o vi tri 0 trong hHoverImg
showHoverImg(posHoverImg,0);// hien thi anh o vi tri 0 trong posHoverImg


//// tao ham hien thi anh o vi tri n trong mang anh imgArr
function showHoverImg( imgArr, n) {
    for (let i = 0; i < imgArr.length; i++) {
        imgArr[i].style.display ='none';
    }
    if(n < imgArr.length) {
        imgArr[n].style.display = 'block';
    }
}


// tao su kien khi click vao icon userServiceIcon de hien thi div divUserServiceChoice
userServiceIcon.addEventListener("click", ()=> {
    divUserServiceChoice.style.display = 'block';
    divUserServiceChoice.classList.add("opacity-up");
});

// tao su kien khi click ra ben ngoai icon userServiceIcon thi se dong the div divUserServiceChoice
document.addEventListener('click', function(event) {
    let isClickInsideDiv = divUserServiceChoice.contains(event.target);
    let isClickInsideIcon = userServiceIcon.contains(event.target);

    if (!isClickInsideDiv && !isClickInsideIcon) {
        divUserServiceChoice.style.display ='none';
        if (divUserServiceChoice.classList.contains("opacity-up")) divUserServiceChoice.classList.remove("opacity-up");
    }
});
// tao su kien khi hover vao the a trong aTagTimepriHoverImg thi se hien thi anh trong danh sach anh timepriHoverImg tai vi tri ung voi vi tri cua the a
for (let i = 0; i < aTagTimepriHoverImg.length; i++) {
    aTagTimepriHoverImg[i].addEventListener("mouseover" ,()=>{
        showHoverImg(timepriHoverImg,i);
    });
}
// tao su kien khi hover vao the a trong aTagJewelHoverImg thi se hien thi anh trong danh sach anh jewelHoverImg tai vi tri ung voi vi tri cua the a
for (let i = 0; i < aTagJewelHoverImg.length; i++) {
    aTagJewelHoverImg[i].addEventListener("mouseover" ,()=>{
        showHoverImg(jewelHoverImg,i);
    });
}
// tao su kien khi hover vao the a trong hobATagHoverImg thi se hien thi anh trong danh sach anh hobHoverImg tai vi tri ung voi vi tri cua the a
for (let i = 0; i < hobATagHoverImg.length; i++) {
    hobATagHoverImg[i].addEventListener("mouseover" ,()=>{
        showHoverImg(hobHoverImg,i);
    });
}
// tao su kien khi hover vao the a trong sATagHoverImg thi se hien thi anh trong danh sach anh sHoverImg tai vi tri ung voi vi tri cua the a
for (let i = 0; i < sATagHoverImg.length; i++) {
    sATagHoverImg[i].addEventListener("mouseover" ,()=>{
        showHoverImg(sHoverImg,i);
    });
}
// tao su kien khi hover vao the a trong hATagHoverImg thi se hien thi anh trong danh sach anh hHoverImg tai vi tri ung voi vi tri cua the a
for (let i = 0; i < hATagHoverImg.length; i++) {
    hATagHoverImg[i].addEventListener("mouseover" ,()=>{
        showHoverImg(hHoverImg,i);
    });
}
// tao su kien khi hover vao the a trong posATagHoverImg thi se hien thi anh trong danh sach anh posHoverImg tai vi tri ung voi vi tri cua the a
for (let i = 0; i < posATagHoverImg.length; i++) {
    posATagHoverImg[i].addEventListener("mouseover" ,()=>{
        showHoverImg(posHoverImg,i);
    });
}
// end header

//check login
let isLogin = false; // tao bien kiem tra dang nhap
let signOut = document.getElementById("signout"); // lay ra the a co id la signout
let registerAndSignIn = document.querySelectorAll(".user-services-element");  // lay ra toan bo the a co class la .user-services-element

if (window.sessionStorage.getItem("account")!= null) isLogin = true; // kiem tra xem trong sessionStorage xem co item nao bang account ko neu co thi da dang nhap, neu khong thi chua dang nhap

// neu da dang nhap thi an 2 the a trong registerAndSignIn va hien thi the a signOut
if (isLogin) {
    for (let i = 0 ; i < registerAndSignIn.length; i++) registerAndSignIn[i].style.display="none";
    signOut.style.display = "block";
    signOut.style.marginTop = "40px";
    signOut.addEventListener("click",()=> {
        window.sessionStorage.removeItem("account");
        isLogin = false;
        window.location.href = "index.html";
    })
} else { // neu khong thi an the a signOut
    for (let i = 0 ; i < registerAndSignIn.length; i++) registerAndSignIn[i].style.display="block";
    signOut.style.display = "none";
}
