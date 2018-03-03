$('input[type=file]').change(function () {
    if(this.files[0]["name"] == undefined){
        $(".file-text").val("파일을 올려주세요.");
    }
    else{
        $(".file-text").val(this.files[0]["name"]);
    }
});

$('.apply-btn-box').click(()=> {
    axios.post("http://iwin247.info:3222/apply",
     {name: $(".name").val(),
      Student_id: $(".school-number").val(),
      Phone_number: $(".phone").val(),
      email: $(".email").val(),
      Introduce: $(".self-explain").val(),
      Motive: $(".go-edcan").val(),
      Ability: $(".career").val()});
});

$(".club-apply-btn").click(()=> {
    location.href = "#apply";
});

// 알아서 연동하고
