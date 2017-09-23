var temp = 0;
var step = 5;
var check = false;
function SendGet() {
    var obj;
    temp+=step;
    var Url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=6082202216.d826c7e.536c85cbfa394df1991f44f274f03bd4&count=' + temp;
    $.ajax({
    url: Url,
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    success: function(data){
        obj = data.data;
        //alert(obj[0].images.low_resolution.url);
        for(var i = temp-step;i < temp;i++){
            if(obj.length-i>0){
            document.getElementById('download').style='background-color: ghostwhite;';
            document.getElementById('download').value='See more!';
            var tr = document.createElement('tr');
            tr.id = 'tr' + i;
            var td1 = document.createElement('td');
            document.getElementById('result').appendChild(tr);
            if(obj[i].caption!==null){
                td1.innerHTML='<img align=left src="' + obj[i].images.standard_resolution.url + '"/>' +'<div id="message"> '+ ""+obj[i].caption.text + '<div align="bottom" id="heart"></div>'+'<div align="bottom" id="text">'+ obj[i].likes.count +'</div>' + '</div> ';
            }
            else{
                td1.innerHTML='<img align=left src="' + obj[i].images.standard_resolution.url + '"/>' +'<div id="message"> '+ "" + '<div align="bottom" id="heart"></div>'+'<div align="bottom" id="text">'+ obj[i].likes.count +'</div>' + '</div> ';
            }
            document.getElementById('tr' + i).appendChild(td1);
        }
        else{
            document.getElementById('download').style='background-color: gray;';
            document.getElementById('download').value='No more pictures!';
            return;
        }
        }
    }    
    });
}


