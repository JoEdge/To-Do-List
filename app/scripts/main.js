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

var milk= new ToDo({
status: 'complete'
});

var listItem;

$('button').on('click', function(event){
	listItem= $('.input').val();
	event.preventDefault;
	console.log(listItem);
	$('.toDoItems').append('<li>' + listItem +'</li>');

// var rendered = Handlebars.templates['items'];

// $('.toDoItems').append(rendered(listItem));
// 	console.log(item);
 });
