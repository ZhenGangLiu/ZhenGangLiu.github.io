console.log('666');
$.ajax({
	url: 'https://api.github.com/users/octocat/gists',
	type: 'get',
	susssess:function(data){
		alert(data)
	},
	error:function(){

	}
})

$.ajax({
        type:'get',
        url:'https://api.github.com/users/octocat/gists',
        success: function (data) {
        	console.log(data)
        },
        error: function(data) { console.log("err"); }
});