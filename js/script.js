function drawTree (height){
	for (i = 0 ; i <= height ; i++) {
		var star = '';
		for (j = 0 ; j <= i - 1 ; j++){
			star += '*';
		}
		console.log(star);
	}
}

drawTree(5);