

        var select = document.getElementById("cmbusercountry");


let regionSelected = document.getElementById('cmbuserregion');
regionSelected.addEventListener('change', () =>{
    let Region  = regionSelected.options[regionSelected.selectedIndex].index;
    //console.log(Region);
    if (Region == 1) {
        RemoveCounties()
       CentralCounties();
    }else if(Region == 2){
        RemoveCounties()
        CoastalCounties();
    }else if(Region == 3){
        RemoveCounties();
        EasternCounties();
    }else if(Region == 4){
        RemoveCounties();
        NairobiCounties();
    }else if(Region == 5){
        RemoveCounties();
        NortheastCounties();
    }else if(Region == 6){
        RemoveCounties();
        NyanzaCounties();
    }else if(Region == 7){
        RemoveCounties();
        RiftValleyCounties();
    }else if(Region == 8){
        RemoveCounties();
        WesternCounties();
    }else{
        RemoveCounties();
         NoCounties();
    }
})

function RemoveCounties() {
   
    var options =  document.querySelectorAll(".addcounties"); 
      while (select.firstChild) {
  select.removeChild(select.firstChild);
}

        }
    NoCounties();
function NoCounties() {
   
    var counties = ["Select Region first"];
            for (var i = 0; i < counties.length; i++) {
                var optn = counties[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
               el.setAttribute("class","addcounties");
                select.appendChild(el);
            }

        }

function CentralCounties() {
   
    var counties = ["Nyandarua","Nyeri","Kirinyaga","Murang'a","Kiambu"];
            for (var i = 0; i < counties.length; i++) {
                var optn = counties[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                el.setAttribute("class","addcounties");
                select.appendChild(el);
            }

        }
function CoastalCounties() {

    var counties = ["Mombasa","Kwale","Kilifi","Tana River","Lamu","Taita–Taveta"];
            for (var i = 0; i < counties.length; i++) {
                var optn = counties[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                el.setAttribute("class","addcounties");
                select.appendChild(el);
            }

        }
 function EasternCounties() {
    var counties = ["Marsabit","Isiolo","Meru","Tharaka-Nithi","Embu","Kitui","Machakos","Makueni" ];
            for (var i = 0; i < counties.length; i++) {
                var optn = counties[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el);
            }

        }
 function NairobiCounties() {
    var counties = ["Nairobi"];
            for (var i = 0; i < counties.length; i++) {
                var optn = counties[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el);
            }

        }
 function NortheastCounties() {
    var counties = ["Garissa","Wajir","Mandera"];
            for (var i = 0; i < counties.length; i++) {
                var optn = counties[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el);
            }

        }
 function NyanzaCounties() {
    var counties = ["Siaya","Kisumu","Homa" ,"Bay","Migori","Kisii","Nyamira" ];
            for (var i = 0; i < counties.length; i++) {
                var optn = counties[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el);
            }

        }
 function RiftValleyCounties() {
     var counties = ["Turkana","West Pokot","Samburu","Trans-Nzoia","Uasin Gishu","Elgeyo-Marakwet","Nandi","Baringo","Laikipia","Nakuru","Narok","Kajiado","Kericho","Bomet" ];
            for (var i = 0; i < counties.length; i++) {
                var optn = counties[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el);
            }

        }
 function WesternCounties() {
    var counties = ["Kakamega","Vihiga","Bungoma","Busia" ];
            for (var i = 0; i < counties.length; i++) {
                var optn = counties[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el);
            }

        }
