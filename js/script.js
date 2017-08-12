function drawTree (height){
	for (i = 0 ; i <= height ; i++) {
		var star = '';
		for (j = 0 ; j <= i ; j++){
			star += '*';
		}
		console.log(star);
	}
}

drawTree(5);