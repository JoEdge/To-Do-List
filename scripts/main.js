var ToDo = function  (options) {
	options= options || {};
this.status=  options.status ||'incomplete';
this.active=  true;
this.delete= function(){
this.active= false;
};
this.check= function(){
	this.status='complete'
	};
this.count= 1;
};

var totalItems=[];

var item = new ToDo({

});

var listItem;

$('button').on('click', function(event){
	event.preventDefault;

		listItem= $('.input').val() + '<button id="away">x</button>';

    $('<li>' + listItem + '</li>').appendTo('.toDoItems')

		$('ul').on('click', '#away' , function(away){
				$(this).parent().remove()
		});
});
// var rendered = Handlebars.templates['items'];

// $('.toDoItems').append(rendered(listItem));
// 	console.log(item);
