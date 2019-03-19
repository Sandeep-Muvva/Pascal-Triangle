var PascalTraingle=function(rows) {
    if(rows === 0) return [];
    else if(rows === 1) return [[1]];
    var result = [[1]];
    var temp;
    for(var i=0;i<=rows-2;i++) {
         temp = [1];
        for(let j=0;j<i;j++)
            temp.push(result[i][j]+result[i][j+1]);
        temp.push(1);
        result.push(temp);
    }
	return result;
};