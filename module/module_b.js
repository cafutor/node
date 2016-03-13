module.exports=(function(){
	function Obj () {
		this.data_handling=function(){
			return JSON.stringify([1,2,3,4,5,6]);
		}
	}
	return new Obj()
})()
