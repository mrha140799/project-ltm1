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

//lay ra input co id la submit
const submit = document.getElementById("submit");

//tao 1 class co ten la Account va co 6 truong du lieu va 1 constructor
class Account {
    title;
    firstName;
    lastName;
    email;
    password;
    confirmPassword;
    constructor(title, firstName, lastName, email, password, confirmPassword) {
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

}
let listAccount = []; // tao 1 mang Account
let count =0; // tao bien dem =0

//tao su kien click vao submit
submit.addEventListener("click", () => {
    const title = document.getElementById("title").value; // lay ra du lieu nguoi nhap trong o input co id la title
    const firstName = document.getElementById("firstName").value; // lay ra du lieu nguoi nhap trong o input co id la firstName
    const lastName = document.getElementById("lastName").value; // lay ra du lieu nguoi nhap trong o input co id la lastName
    const emai = document.getElementById("email").value; // lay ra du lieu nguoi nhap trong o input co id la email
    const password = document.getElementById("password").value; // lay ra du lieu nguoi nhap trong o input co id la password
    const confirmPassword = document.getElementById("confirmPassword").value; // lay ra du lieu nguoi nhap trong o input co id la confirmPassword
    const box1 = document.getElementById("checkBox1").checked; // lay ra du lieu nguoi nhap co tich vao checkbox co id la checkBox1
    const box2 = document.getElementById("checkBox2").checked; // lay ra du lieu nguoi nhap co tich vao checkbox co id la checkBox2
    if (window.sessionStorage.getItem("BreguetAccounts") != null) { // kiem tra xem sessionStorage co key la BreguetAccounts co null khong neu khong thi
        listAccount= JSON.parse(window.sessionStorage.getItem("BreguetAccounts"));  // gan listAccount = du lieu ben trong sessionStorage co key la BreguetAccounts
        window.sessionStorage.removeItem("BreguetAccounts"); // xoa item trong session co key la BreguetAccounts
        count = listAccount.length; // gan count  = do dai cua listAccount
    }
    if (box1 && box2 && (emai !== "") && (password !== "") && (password === confirmPassword)) { // kiem tra nguoi dung da nhap du thong tin chua
        listAccount[count] = new Account(title,firstName,lastName,emai,password,confirmPassword); // them 1 tai khoan moi vao mang tai khoan
        count++; // tang bien count
        let accountJsonStr = JSON.stringify(listAccount); //chuyen mang thanh chuoi json
        window.sessionStorage.setItem("BreguetAccounts", accountJsonStr); // add chuoi json vao sessionstorage
        console.log(accountJsonStr);
        alert("Register successful!");//thong bao thanh cong
        window.location.href = "SignIn.html"; // chuyen nguoi dung den trang dang nhap
    } else {
        alert("Register Fail! Please input correct value!"); //thong bao that bai
        let accountJsonStr = JSON.stringify(listAccount);
        window.sessionStorage.setItem("BreguetAccounts", accountJsonStr); //add chuoi json vao sessionstorage tro lai
    }
});

