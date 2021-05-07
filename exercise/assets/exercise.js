var today= new Date();
var date;
$('p.date').text(date);
//bấm nút thêm tóm tắt bài học
$('#add-lesson').click(function(){
    if($('#add-lesson').text()==='Thêm'){
    date ="Ngày: " + today.getDate()+"/"+today.getMonth() + "/" +today.getFullYear();
    $('.add-lesson').css('display','block');
    $('.lesson-body').css('display','none');
    $('#add-lesson').text('Hủy');
    }
    else{
    $('.add-lesson').css('display','none');
    $('.lesson-body').css('display','block');
    $('#add-lesson').text('Thêm');
    }
});
//bấm nút thêm video

// giáo viên bấm nút tạo bài tập
$('#exercise').click(function(){
    date ="Ngày: " + today.getDate()+"/"+today.getMonth() + "/" +today.getFullYear();
    $('.main-content-display').hide();
    $('.create-notification').hide();
    $('.create-exercise').css('display','block');
})
$('#btn-done-exercise').click(function(){
    $('.main-content-display').show();
    $('.create-exercise').hide();
    $('.create-notification').hide();
})
//giáo viên bấm nút tạo thông báo
$('#notification p').click(function(){
    $('.main-content-display').hide();
    $('.create-exercise').hide();
    $('.create-notification').css('display','block');
})
$('#btn-done-notify').click(function(){
    $('.main-content-display').show();
    $('.create-notification').hide();
    $('.create-exercise').hide();
})
//học viên bấm nút thông báo

    $('.icon-bell').click(function(){
        if($('.dialog-notification').css('display')==='none'){
        $('.dialog-notification').show(200);
        }
        else $('.dialog-notification').hide(200);
        return false;
    });

$(document).click(function() {
    $('.dialog-notification').hide();
});

$('.dialog-notification').click(function(e) {
    e.stopPropagation();
});
//hiện tất cả bảng điểm danh
$('#all').click(function(){
    $('table').css('width','2800px');
    var classLessons=".les-";
    for(var i=1;i<=30;i++){
        $(classLessons+i).show();
    }
});
//lọc lại thông tin buổi học
$('#choose-lesson').trigger('change');
var data, numberLesson, numberLessonTable;
$('#choose-lesson').change(function(){
    $('table').css('width', '60%');
    var classLessons=".les-";
    data= $(this).val(); 
    numberLesson=data.substr(7,2);
    numberLesson=numberLesson*1;
    console.log(numberLesson)
    for(var i=1;i<=30;i++){
        if(i===numberLesson){
            $(classLessons+i).show();
        }
        else{
            $(classLessons+i).hide();
        }
    }          
});
//nút tạo code
$('#create-code').click(function(){
    $('.create-code-letter').show();
});
$('#create-code-start').click(function(){
    $('canvas').remove();
    var codeRandom=Math.random().toString(36).substr(2, 8);
    $('#code').val(codeRandom);
    $('#qrcode').qrcode({width: 200,height: 200,text: codeRandom});
});
$('#btn-out').click(function(){
    $('.create-code-letter').hide();
    $('#code').val('');
})
//tạo QR
$('#create-qr').click(function(){
    $('.qr-code-create').show();
})
$('#btn-out-qr').click(function(){
    $('.qr-code-create').hide();
    $('#code').val('');
    $('canvas').remove();
})

//nút chọn file

