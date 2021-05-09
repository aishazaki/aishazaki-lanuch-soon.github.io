$(document).ready(function () {
    $(function () {
        var austDay = new Date();
        var year = austDay.getFullYear() + 1;
        austDay = new Date(year, 0, 26);
        $("#defaultcountdown").countdown({until: austDay, format: "odHMS"});
       /*  r هي austDay.getFullYear() + 1 بمعنى السنة الحالية ونضيف لها 1، ستعطيك قيمة 2021.
        month: قام الأستاذ بوضع قيمة 1 - 1، وذلك لأن الشهر الأول في جافاسكربت هو رقم 0 والشهر الثاني هو رقم 1، إذن قيمة الشهر هي شهر يناير.
         day: كتب قيمة 26، أي يوم 26 من الشهر.
        ليكون التاريخ النهائي لإنطلاق الموقع هو 26 يناير 2021 */
    })

    /*تفعيل مكتبةواو */
    new WOW().init(); /*تهيئتهاللعمل عبر التابع */



    /*التحقق من عنوان البريد الالكتروني */
    $(".form-control").blur(function () {
        var x= document.forms["myForm"]["email"].value
        /*متغير ليحتوى على القيمة المدخلة في مربع الادخال 
        forms() تابع نحدد فيه
         الاسم  البرمجي  للنموذج الذي نتعامل معة ..وهو ما يحتوية الخاصية نيم
         ثم الاسم  البرمجي لحقل الادخال */
         var atpos = x.indexOf("@"); /*يقوم بارجاع موضع العنصر المحدد على شكل رقم بالترتيب اي من البدية ويبدا برقم 0
         في حال عدم وجود العنصريرجع قيمة -1 */
         var dotpos = x.lastIndexOf(".");/*يبدا في تحديد موضع العنصر من النهاية 
         ويرجع -1 في  عدم وجودة */
         /*شرط التحقق يقسم الى 3 اقسام 
         الاول اذا كان موضع علامة ات اقل من واحد وذلك يعنى اما انها المحرف الاول اوانها غيرموجودة وذلك خاطئ
         الثاني ان علامة النقطة تظهر بعد علامة الات باقل من محرفين مما يعني ان اسم الدومين مثل جي ميل يتكون من اقل محرفين وذلك  خاطئ
         الثالث ان بعد النقطة يجب كتابة اكثر من حرفين مثل com / org /co...*/
         if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length) {
              $(this).parent().find(".alert-danger").fadeIn(50);
              $(this).parent().find(".alert-success").fadeOut(200);
         } else {
            $(this).parent().find(".alert-success").fadeIn(200);
            $(this).parent().find(".alert-danger").fadeOut(200);
            /* $(this)حقل الادخال
            .parent() حاوية دف ذو الصنف input-group
            .find(".alert-danger")لتحديدعنصر ما
            .fadeIn(200);  تستخدم fadeIn هي دالة لإخفاء عنصر ما بعد فترة زمنية معينة، هنا الأستاذ يقوم بإخفاء عنصر alert-danger بعد 200 ميلي ثانيةاظهار العنصر */
         };
    });
    $(".form-control").blur(function () {
        var x= document.forms["myForm2"]["email2"].value
    
        var atpos = x.indexOf("@"); 
        var dotpos = x.lastIndexOf(".");
        
        if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length)
        {
            $(this).parent().find(".alert-danger").fadeIn(50);
            $(this).parent().find(".alert-success").fadeOut(200);
        } 
        else 
        {
            $(this).parent().find(".alert-success").fadeIn(200);
            $(this).parent().find(".alert-danger").fadeOut(200);
        };
    });
})
