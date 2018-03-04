const file_exist = false;

$('.apply-btn-box').click(()=> {
    axios.post("http://iwin247.info/apply",
     {name: $(".name").val(),
      Student_id: $(".school-number").val(),
      Phone_number: $(".phone").val(),
      email: $(".email").val(),
      Introduce: $(".self-explain").val(),
      Motive: $(".go-edcan").val(),
      Ability: $(".career").val(),
      portfolio: file_exist,
    })
    .then(()=>{
        if(file_exist) location.href = "iwin247.kr:3222"
        else location.href = "iwin247.info:3222/finish"
    });
    
});

$(".club-apply-btn").click(()=> {
    $("#apply").show();
    location.href = "#apply";
});
