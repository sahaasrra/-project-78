var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://thumbs.dreamstime.com/b/cute-girl-go-to-school-cartoon-illustration-87968461.jpg", "https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg" , "https://i.pinimg.com/736x/26/54/0c/26540c6037f048c80ffcf0be31c944ff.jpg", "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6", "https://i.postimg.cc/5ymDKL83/bro.jpg"];
var names = ["Fmaily Book","A sai sahaasrra", "Chandra kiran", "Akhil aryaman", "Chandana", "Deevansh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = (images[i]);
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = (names[i]) ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
