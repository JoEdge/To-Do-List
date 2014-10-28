(function () {
  'use strict';

	describe('ToDo', function(){

		var item;
		beforeEach(function(){
			item= new ToDo();
		});


	 	describe('List Item Creation', function(){

			it('should create a new instance of ToDo', function(){
				expect(item).to.be.an.instanceof(ToDo);
	 		});
			it('should be marked incomplete by default', function(){
				expect(item.status).to.equal('incomplete');
			});
			it('should add one to the total number of items', function(){
				expect(totalItems).to.be.equal(totalItems);
			});

		});

		describe('Completed Item', function(){
			it('should be marked as completed after clicking on item', function(){
			expect(item.status).to.equal('incomplete');
			item.check();
			expect(item.status).to.equal('complete');
			});
		});


		describe('Delete a Task', function(){
			it('should remove an item from the list', function(){
			expect(item.active).to.equal(true);
			item.delete();
			expect(item.active).to.equal(false);
			});
		});





	});


})();
