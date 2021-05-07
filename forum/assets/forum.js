$(document).ready(function(){
  $(".hinh").click(function() {
    $("input[id='files']").click();
});
});	    				    				
function handleFileSelect(evt) {
var files = evt.target.files; // FileList object
// Loop through the FileList and render image files as thumbnails.
for (var i = 0, f; f = files[i]; i++) {
// Only process image files.
if (!f.type.match('image.*')) {
  continue;
}
var reader = new FileReader(); //biến hiện images ra   
// Closure to capture the file information.
reader.onload = (function(theFile) {
    return function(e) {
      // render thumbnail.
      var span = document.createElement('span');
      span.classList.add('abc');
      span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>', '<i class="fa fa-times time " ></i>'].join('');
      document.getElementById('previewImg').insertBefore(span, null); //chèn images vào span dựng sẵn có ID previewImg

    };
  })
  (f);
// Read in the image file as a data URL.     
reader.readAsDataURL(f);
}
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);
//hàm xóa
$(document).on('click', ".time", function() {
  if (confirm("Bạn Có Muốn Xóa ?")) {
    $(this).closest("span").fadeOut();
    $("#files").val(null); //xóa tên của file trong input
  } else
    return false;
});

/*-------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------*/
/*xử lí ẩn hiện hộp thoại */
 $(document).ready(function() {
     $('button.update-button').click(function() {
       $('.delete-img').attr('style','display:none')
         //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var post =$('#dialog-post')
        var areaPost = $('.area-post-text');
        areaPost.text("");
        $('.abcd').fadeOut();
         //cho hiện hộp đăng nhập trong 300ms
         $(post).fadeIn();
 
         // thêm phần tử id="over" vào sau body
         $('body').append('<div id="over">');
         $('#over').fadeIn();
 
         return false;
  });
 // khi click đóng hộp thoại
 $(document).on('click', "a.close, #over", function() {
       $('#over, .dialog-post-place').fadeOut(300 , function() {
           $('#over').remove();
       });
       $('#edt-post').fadeOut();
      return false;
 });
});
 /*--------------------------------------------------------------------------------------------------------------------- */

//nút edit bài viết
$(document).ready(function() {
  $(document).on('click', '.img-hide',function() {
    if (confirm("Bạn Có Muốn Ẩn Bài Viết ?")) {
      //ẩn bài viết
    } else
      return false;
  });
});
 /*--------------------------------------------------------------------------------------------------------------------- */
 $(document).ready(function(){
  $("img.img-post-cmt").click(function() {
    $("input[id='files-post-cmt']").click();
});
});	    				    				
function handleFileSelectCmt(evt) {
var files = evt.target.files; // FileList object
// Loop through the FileList and render image files as thumbnails.
for (var i = 0, f; f = files[i]; i++) {
// Only process image files.
if (!f.type.match('image.*')) {
  continue;
}
var reader = new FileReader(); //biến hiện images ra   
// Closure to capture the file information.
reader.onload = (function(theFile) {
    return function(e) {
      // render thumbnail.
      var span = document.createElement('span');
      span.classList.add('abc');
      span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>', '<i class="fa fa-times time " ></i>'].join('');
      document.getElementById('img-cmt').insertBefore(span, null); //chèn images vào span dựng sẵn có ID previewImg

    };
  })
  (f);
  reader.readAsDataURL(f);
}
}
document.getElementById('files-post-cmt').addEventListener('change', handleFileSelectCmt, false);
//Sự kiện click tungwg button
//nút like
$('.btn-like').click(function(){
  if( $('.like').css('color')==='rgb(28, 48, 101)'){
  $('.like').css('color','#ff0000');
  $('.btn-like').css('color','#ff0000');
  $('#number-like').text(1+Number($('#number-like').text()));
}
else {
  $('.like').css('color','#1C3065');
  $('.btn-like').css('color','#1C3065');
  $('#number-like').text(Number($('#number-like').text())-1);
}
});
//nút cmt
$('.btn-cmt').click(function(){
    $('#cmt').focus();
})
//nút share
$(document).ready(function() {
  $(document).on('click', '.btn-share',function() {
    if (confirm("Bạn có muốn share bài viết về trang cá nhân hay không ?")) {
      //share bài viết
    } else
      return false;
  });
});
//nút hiện cmt
$('.sl-cmt').click(function(){
  var cmtDisplay=$('.cmt-of-everyone').css('display');
  if(cmtDisplay==='none'){
    $('.cmt-of-everyone').fadeIn(100);
  }
  else $('.cmt-of-everyone').fadeOut(100);
});