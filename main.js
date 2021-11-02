// toggle nav & sidenav
$("#btn").click(()=> {
  $(".back,#btn,#sidenav").toggleClass("act");
});
// outside clicking toggle off
document.onclick = ((e)=> {
  if (e.target.id !== 'btn' && e.target.id !== 'sidenav') {
    $(".back,#btn,#sidenav").removeClass("act");
  }
});
// check user net
if(window.navigator.onLine == true){
  //alert("You are Online");
}else{
  alert("You are Offline!");
}