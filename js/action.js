function sign(){
  window.open("https://auth.services.adobe.com/zh_HANS/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2Fadobedotcom2%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.adobe.com%252Fcn%252F%2523old_hash%253D%2526from_ims%253Dtrue%253Fclient_id%253Dadobedotcom2%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Cread_organizations%252Cadditional_info.projectedProductContext%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522%2522%252C%2522jslibver%2522%253A%2522v2-v0.38.0-17-g633319d%2522%252C%2522nonce%2522%253A%25226087639942745405%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=adobedotcom2&scope=AdobeID%2Copenid%2Cgnav%2Cread_organizations%2Cadditional_info.projectedProductContext%2Cadditional_info.roles&denied_callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fdenied%2Fadobedotcom2%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.adobe.com%252Fcn%252F%2523old_hash%253D%2526from_ims%253Dtrue%253Fclient_id%253Dadobedotcom2%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Cread_organizations%252Cadditional_info.projectedProductContext%252Cadditional_info.roles%26response_type%3Dtoken%26state%3D%257B%2522ac%2522%253A%2522%2522%252C%2522jslibver%2522%253A%2522v2-v0.38.0-17-g633319d%2522%252C%2522nonce%2522%253A%25226087639942745405%2522%257D&state=%7B%22ac%22%3A%22%22%2C%22jslibver%22%3A%22v2-v0.38.0-17-g633319d%22%2C%22nonce%22%3A%226087639942745405%22%7D&relay=12cbc2dc-0b1a-42bd-a4ef-075dcbd7f8b9&locale=zh_HANS&flow_type=token&idp_flow_type=login&s_p=google%2Cfacebook%2Capple&response_type=token#/");
}
function img1(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=NYTLR3CX&mv=other");
}
function img2(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=NYTLR3CX&mv=other");
}
function img3(){
  window.open("https://www.adobe.com/cn/acrobat.html");
}
function creativecloud(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function photoshop(){
  window.open("https://www.adobe.com/cn/products/photoshop.html");
}
function sheying(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function premierepro(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function elements(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function documentcloud(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function arobat(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function chakanjihua(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function chakansuoyou(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function creativecloudtuandui(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function creativecloudqiye(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function creativecloudtuandui(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function gaodeng(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function shuzihua(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function shenmo(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}function fenxi(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
function experience(){
  window.open("https://www.adobe.com/cn/lead/creativecloud/business.html?promoid=ZP46FD38&mv=other");
}
$(document).ready(function(){

     $(window).resize(function(){				        
      if( $(window).width() >640 ) {		         
          $(".phone>li").css('visibility','visible');
          $(".phone>li").show();
      }else{
          $(".phone>li").hide();
            $(".phone>li").css('visibility','hidden');
        }
    });

    const elements = document.querySelectorAll('.title');
    const lists = document.querySelectorAll('.end-list');
    lists.forEach(function(list) {
        list.classList.remove('active');
        list.classList.add('hidden');
    });

    elements.forEach(function(element, index) {
    element.addEventListener('click', function() {
      const isActive = lists[index].classList.contains('active');
      lists.forEach(function(list) {
            list.classList.remove('active');
            list.classList.add('hidden');
      });
      if (!isActive) {
        lists[index].classList.remove('hidden');
        lists[index].classList.add('active');
      }
    });
  });

});