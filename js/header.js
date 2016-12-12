
	var dropMenuNode=$('.J_dropMenu');
	var dropSubMenuNode=$('.J_dropSubMenu');
	var bodyNode=$('body');
	dropMenuNode.mouseenter(function(){
		dropSubMenuNode.show();
	});
	bodyNode.click(function(){
		dropSubMenuNode.hide();
	});
