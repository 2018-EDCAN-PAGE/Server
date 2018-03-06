$('.apply-btn-box').click(()=> {
    if ($(".name").val() == "" || $(".school-number").val() == "" || $(".phone").val() == "" || $(".email").val() == "" || $(".self-explain").val() == "" || $(".go-edcan").val() == "" || $(".career").val() == "")
     alert("모든 내용을 체워주세요");
    else{
        axios.post("http://iwin247.info/apply",
        {name: $(".name").val(),
        Student_id: $(".school-number").val(),
        Phone_number: $(".phone").val(),
        email: $(".email").val(),
        Introduce: $(".self-explain").val(),
        Motive: $(".go-edcan").val(),
        Ability: $(".career").val(),
            portfolio: $("#portfolio_exist").prop('checked'),
        })
        .then(()=>{
            if ($("#portfolio_exist").prop('checked')) location.href = "http://iwin247.kr:3222"
            else location.href = "http://edcan.kr/finish"
        });
    }
});

$(".club-apply-btn").click(()=> {
    $("#apply").show();
    location.href = "#apply";
});

$(".file-btn").click(() => {
    var status = $("#portfolio_exist").prop('checked');
    $("#portfolio_exist").prop('checked', !status);
});
