function RecursiveFlat(arr) 
{
return arr.reduce(
	function (acc,val)
    {
		if(Array.isArray(val)==true)
        {
			return acc.concat(RecursiveFlat(val));
        }
		else 
        {
			return acc.concat(val);
        }
    },
[]);
}
   
RecursiveFlat([1,2,3,[1,2,3,4, [2,3,4]]]);
