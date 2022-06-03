let userArray = [];

let userObject = function(pName,pHeight,pWeight){
    this.Name = pName;
    this.Height = parseInt(pHeight);
    this.Weight = parseInt(pWeight);
   
}
userArray.push(new userObject("Teni", 190, 300));
userArray.push(new userObject("Guts", 180, 210));

document.addEventListener("DOMContentLoaded", function () {

  createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {

       userArray.push(new userObject(document.getElementById("name").value, document.getElementById("height").value,
    document.getElementById("weight").value))
    })
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("name").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
    });

    document.getElementById("buttonSortHeight").addEventListener("click", function () {
        userArray.sort(userSort(Height));
        createList();
        document.location.href = "test.html#ListAll";
    });

    document.getElementById("buttonSortWeight").addEventListener("click", function () {
        userArray.sort(userSort(Weight));
        createList();
        document.location.href = "test.html#ListAll";
    });


    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListAll", function (event) {   // have to use jQuery 
        createList();
    });

    $(document).on("pagebeforeshow", "#details", function (event) {   
        let UserID = localStorage.getItem('parm');  // get the unique key back from the storage dictionairy
        document.getElementById("theUserID").innerHTML = UserID;
    });

})
function createList() {
   
    let theList = document.getElementById("myul");
    theList.innerHTML = "";

 

    userArray.forEach(function (element, i) {   
        var myLi = document.createElement('li');
        myLi.classList.add('oneUser');
        myLi.innerHTML =  element.Name + ":  " + element.Weight + "pounds  " + element.Height + "cm  ";

       
        myLi.setAttribute("data-parm", element.Name);
        
        theList.appendChild(myLi);
    });

    var liList = document.getElementsByClassName("oneUser");
   let newUserArray = Array.from(liList);

    newUserArray.forEach(function (element,i) {     
        element.addEventListener('click', function () {     
            
            var parm = this.getAttribute("data-parm"); 
            localStorage.setItem('parm', parm);
            document.location.href = "test.html#details";
        });
    });
  
};
function userSort() {
  
 (function(a,b){return a-b});
    
}

// function sportrecommend(){
// if(height>170){
//     "You should try some sports like basketball,volleyball,high jump"
// }
// else{"You should try soccer,"}
// if(this.Height>170 && this.Weight<180){
//     "You"
// }
// if(this.Weight>200 && this.Height < 180){
//     "Here are some excercises you should try "
// }
// }