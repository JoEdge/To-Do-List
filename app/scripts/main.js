//To Do constructor
var ToDo = function  (options) {
	options= options || {};
	this.task= options.task;
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

//Set up templates
  var todo_template = $("#todo_items").html();
  var rendered = _.template(todo_template);

//All ToDos
	var totalItems=[];


	var listItem;
//add items to list and clear input field
	$('button').on('click', function(event){
		event.preventDefault;

		listItem= $('.input').val() + '<button id="away">x</button>';

	var item = new ToDo({
			task: listItem
	});

  //  $('.todoItems').append(rendered(item));

    $('<li>' + listItem + '</li>').appendTo('.toDoItems');

		$('.input').val("");

});

//remove items from list
		$('ul').on('click', '#away' , function(){
				$(this).parent().remove()
		});

//change background color of list item
		$('ul').on('click', 'li', function(){
				$(this).toggleClass('clicked');
		});




// var rendered = Handlebars.templates['items'];

// $('.toDoItems').append(rendered(listItem));
// 	console.log(item);
