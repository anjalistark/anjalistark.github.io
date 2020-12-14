var likebutton=document.getElementById("like");
likebutton.onclick=incLikes;
function incLikes(){
	var likecount=document.getElementById("likecount");
	likecount.textContent++;
}
