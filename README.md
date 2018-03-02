# EDCAN APPLY Backend

## API Document

* POST /apply : 신입생 동아리 신청

> Params

    name : 이름

    Student_id : 학번

    Phone_number : 전화번호

    email : 이메일

    Introduce : 자기소개

    Motive : 지원동기

    Ability : 전공능력


> Response

    HTTP 200 : {message : "save success!"}

    HTTP 500 : {message : "save failed!"}
