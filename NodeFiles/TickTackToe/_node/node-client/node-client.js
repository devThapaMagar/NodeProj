function NodeClient(url, port, user_name) {
    let me = this;
    me.server_url = url + ':' + port;

    me.nodeClient;

    me.currentMove;
    me.userIcon;
    me.user_name = user_name;
    var query = "user_name=" + user_name,
        nodeClient = me.nodeClient = io.connect(me.server_url, {
            'query': query
        });

    nodeClient.on('msg', function(msg) {
        console.log('msg >>', msg);
        $(selector + ' .msg').html(msg.msg);
    });

    nodeClient.on('errorMsg', function(msg) {
        console.log('error >>', msg);
    });
    nodeClient.on('disconnect', function(msg) {
        console.log('error >>', msg);
    });
    nodeClient.on('current_state', function(data) {
        if ('gameVisibility' in data) {
            if (data.gameVisibility) {
                $('#tictactoe-blk').show();
                if ('mainArr' in data) {
                    for (var i in data['mainArr']) {
                        var imgHtml = "<img src='" + url + "/NodeProj/NodeFiles/_include/img/" + data['mainArr'][i] + ".png' class='img-fluid'/> ";
                        $('.' + i + ' span').html(imgHtml);
                    }
                }
                if ('successTd' in data) {
                    if (data.successTd.length > 0) {
                        for (var i in data.successTd) {
                            $('.' + data.successTd[i]).addClass('table-danger');
                        }
                        me.nodeClient.io.disconnect();
                    }
                }
                if ('currentMove' in data) {
                    me.currentMove = data.currentMove;
                }
                if (me.userIcon == null && 'userIcon' in data) {
                    var htmlTxt = '';
                    for (var i in data['userIcon']) {
                        htmlTxt += "<div class='col'>" + i + ": <strong>" + data['userIcon'][i] + "</strong></div>";
                    }
                    me.userIcon = data.userIcon;
                    $('#information-blk').html(htmlTxt);
                }
            }
        }
    });
    me.client_event = new Event(me);
}