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
  $(document).on('click', '.img-edt',function() {
      var edit = $('#edt-post')
      if(edit.css('display')==='none'){
        $(edit).css('display', 'block');
      }
      else {
        $(edit).css('display', 'none');
      }
  });
});
 /*--------------------------------------------------------------------------------------------------------------------- */
//
$(document).on('click', '.button-edit',function() {
    //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
    $('.abcd').fadeIn();
    var post =$('#dialog-post');
    var areaPost = $('.area-post-text');
    var status=$('p#status-area').text();
    areaPost.text(status);
    //cho hiện hộp đăng nhập trong 300ms
    $(post).fadeIn(300);
    // thêm phần tử id="over" vào sau body
    $('body').append('<div id="over">');
    $('#over').fadeIn(300);
//chỉnh sử hình
    var srcImg=$("img.img-old-post-update").attr('src');
    var imgOldPost= $('.img-old-post');
    console.log(srcImg);
    imgOldPost.attr('src', srcImg);
//---------------------
    return false;
})
$(document).on('click', ".delete", function() {
  img=$('.abcd');
    if (confirm("Bạn Có Muốn Xóa ?")) {
      img.fadeOut();
      
    } else
      return false;
  });
 /*--------------------------------------------------------------------------------------------------------------------- */

//ẩn hiện hộp thoại chỉnh sửa chi tiết
/*xử lí ẩn hiện hộp thoại */
$(document).ready(function() {
  $('button.btn-edit-detail-profile').click(function() {
      //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
      var post =$('.dialog-edit-detail')

      //cho hiện hộp đăng nhập trong 300ms
      $(post).fadeIn(300);

      // thêm phần tử id="over" vào sau body
      $('body').append('<div id="over">');
      $('#over').fadeIn(300);

      return false;
});

// khi click đóng hộp thoại
$(document).on('click', "a.close, #over", function() {
    $('#over, .dialog-edit-detail').fadeOut(300 , function() {
        $('#over').remove();
    });
   return false;
  });
});
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
$('tr').hover(function(){
  var id =$(this).attr('id');
  var stringID="#"+id+" ";
  $(stringID+".btn-like").on('click',function(){
    if( $(stringID+'.like ').css('color')==='rgb(28, 48, 101)'){
    $(stringID+'.like').css('color','#ff0000');
    $(stringID+'.btn-like').css('color','#ff0000');
    $(stringID+'#number-like').text(1+Number($(stringID+'#number-like').text()));
    }
    else {
      $(stringID+'.like').css('color','#1C3065');
      $(stringID+'.btn-like').css('color','#1C3065');
      $(stringID+'#number-like').text(Number($(stringID+'#number-like').text())-1);
    }
  });

//nút cmt
$(stringID+'.btn-cmt').click(function(){
    $(stringID+'#cmt').focus();
});
//Hiển thị bình luận

$(stringID+'.sl-cmt').on('click',function(){
  var cmtDisplay=$(stringID+'.cmt-of-everyone').css('display');
  if(cmtDisplay==='none'){
    $(stringID+'.cmt-of-everyone').css('display','block');
  }
  else $(stringID+'.cmt-of-everyone').css('display','none');
  });
});
//Đổi ảnh đại diện---------------------------------------------------------------------------------
$(document).ready(function(){
  $(".icon-edt-img-profile").click(function() {
    $("input[id='files-img-profile']").click();
});
});	    				    				
function handleFileSelectImgProfile(evt) {
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
      
      $('.img-profile').attr('src', e.target.result);
      //.innerHTML = ['<img class="img-profile" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');

    };
  })
  (f);
// Read in the image file as a data URL.     
reader.readAsDataURL(f);
}
}
document.getElementById('files-img-profile').addEventListener('change', handleFileSelectImgProfile, false);
//click
