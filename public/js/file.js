$('input[type=file]').change(function () {
    if(this.files[0]["name"] == undefined){
        $(".file-text").val("파일을 올려주세요.");
    }
    else{
        $(".file-text").val(this.files[0]["name"]);
    }
});

// 알아서 연동하고