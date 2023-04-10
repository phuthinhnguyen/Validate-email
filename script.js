function validate_email(email){
    const pattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (pattern.test(email)==true){
        console.log("Email hop le")
    }
    else{
        console.log("Email khong hop le")
    }
}
