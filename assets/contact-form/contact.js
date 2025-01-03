
// Validate Contact Form
$("#ContactForm").validate({
    rules: {
        full_name: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            minlength: 4
        }
        ,
        mobile: {
            required: true
        },
        subject: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        full_name: {
            required: "لطفا نام را وارد کنید",
            minlength: "نام باید حداقل از 3 حرف تشکیل شود"
        },
        email: {
            required: "لطفا یک ایمیل تهیه کنید",
            minlength: "ایمیل باید حداقل 4 حرف داشته باشد"
        },
        mobile: {
            required: "لطفا شماره تلفن همراه را ارائه دهید"
        },
        subject: {
            required: "لطفا موضوع را وارد کنید"
        },
        message: {
            required: "لطفا پیام را وارد کنید"
        }
    },

    submitHandler: function(form) {
  
        var formdata = jQuery("#ContactForm").serialize();
        jQuery.ajax({
            type:"POST",
            url:"assets/contact-form/contact.php",
            data:formdata,
            dataType:'json',
            async: false,
            success:function(data){
                if(data.success){
                    alert('ممنون. پیام شما فرستاده شد');
                }else{
                    alert('خطا در ارسال پیام ، لطفا دوباره امتحان کنید');
                }

            },
            error:function(error){
                alert('مشکلی پیش آمد');
            }

        });
    }
});

