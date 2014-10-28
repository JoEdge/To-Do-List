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
