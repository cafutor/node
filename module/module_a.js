module.exports=(function(){
	function Obj(){
		this.fn=function(a){
			console.log(a instanceof Array)
			if(a instanceof Array)
			{
			for(var i=0;i<a.length;i++){
			}
			}else{
	                    console.log("a is not an array"); 
			} 
			return this;
		}
		this.showname=function(){
			console.log("huangweidong");
			return this;
		}
	};
	return new Obj();
})()
