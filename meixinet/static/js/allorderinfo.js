

$(function(){

    //付款
    $('.btn-success').click(function () {
        var orderid = $(this).attr('orderid')
        console.log(orderid)

        $.get('/pay/',{'orderid':orderid},function (data) {
            window.open(data['alipay_url'], target='_self')
        })

    })

})
