$(function($) {
    var user_name = '',
        hashValue = window.location.hash;
    $(window).on('hashchange', function() {
        user_name = window.location.hash.substr(1);
        if (user_name.length > 0) {
            startServer(user_name);
        }
    });
    $("form").submit(function(e) {
        e.preventDefault();
    });
    $('#submitBtn').click(function() {
        var user_name = $('#user_name').val();
        window.location.hash = '#'+user_name;
    });

    $('#tictactoe-blk').hide();

    if (hashValue.length == 0) {
        $('#user-blk').show();
    } else {
        $('#user-blk').hide();
        user_name = window.location.hash.substr(1);
        startServer(user_name);
    }
});
var startServer = function(user_name) {
    var client = {},
        client_event = {},
        host = 'http://' + window.location.host,
        port = 8190;
    client = new NodeClient(host, port, user_name);
};