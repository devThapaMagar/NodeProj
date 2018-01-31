function Event(client) {
    $('td').click(function() {
        var clsName = this.className;
        onTdClick(clsName, client);
    });
};

function onTdClick(clsName, client) {
	if(client.userIcon[client.user_name] == client.currentMove){
	    client.nodeClient.emit('onTdClick', clsName);
	}else{
		console.log('Not Your Turn');
	}
}