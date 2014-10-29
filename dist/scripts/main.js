var my_server= 'http://tiy-atl-fe-server.herokuapp.com/collections/chelseaandjoanna2';

var ToDo= function (options) {
	options= options||{};
	this.done= 'false';
	this.task= options.task || '';

};

var all=[];
var todo_list;
var task_template= $('#task_items').html();
var rendered = _.template(task_template);

$.getJSON(my_server).done( function(data){

	todo_list = data;

	_.each(todo_list, function(item){

		$('.toDoItems').append(rendered(item));
	});
});

var task, contents;
$('#button').on('click', function(event){
	event.preventDefault();


	var self=this;
	contents = $('.input').val()+ '<button id= "away">x</button>';

	task= new ToDo({
		task: contents
		});
	console.log(task);

	$.ajax({
		type: 'POST',
		url: my_server,
		data: task
	}).done( function(data){

			todo_list.push(data);

			$('.toDoItems').append(rendered(data));

		  $('.input').val('');

			var q =$('.toDoItems li').length;
				$('.total').html(q);

		});

});


$('ul').on('click', '#away', function(){
	$(this).parent().remove();

	var q = $('.toDoItems li').length - 0;
		$('.total').html(q);

		$.ajax({
			type: 'DELETE',
			url: my_server + "/" + todo_modifier._id,
		});
});


var todo_modifier;
$('.toDoItems').on('click', 'li', function(event){
	event.preventDefault();

var myID= $(this).attr('id');

todo_modifier=_.findWhere(todo_list, {_id: myID});

	if(todo_modifier.done ==='true'){
		todo_modifier.done = 'false';
		$(this).removeClass('completed');

		var w=$('.toDoList .done').length-0;
			$('.finished').html(w);
	}
	else{
		todo_modifier.done ='true';

		$(this).addClass('completed');
	}
	console.log(todo_modifier);


$.ajax({
	type: 'PUT',
	url: my_server + "/" + todo_modifier._id,
	data: todo_modifier,
});


});
