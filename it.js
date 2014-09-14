var request=require('request');

exports.searchBook=function(text){

	request({

		uri:"http://it-ebooks-api.info/v1/search/"+text+"",
		method:"GET"
	},function(err,response,body){
     
		console.log(body);
	})
}