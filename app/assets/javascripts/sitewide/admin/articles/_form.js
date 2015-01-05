var AdminArticlessController = Paloma.controller('Admin/Articles');

AdminArticlessController.prototype.new = function() {
	var area = document.getElementById('article-area');
	area.onkeyup=function(){
		document.getElementById('article-pre').innerHTML=area.value;
	}

	var hide = false;
	var btn = $('.article-btn-pre');
	btn.click(function(){
		if(hide) {
			$('#article-pre').hide();
			btn.text('Montrer la prévisualisation');
			hide=false;
		} else {
			$('#article-pre').show();
			btn.text('Cacher la prévisualisation');
			hide=true;
		}
	});

}