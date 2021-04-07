function countRegNumber(reg) {
	//var reg = "CA 182736,CY 523519,CJ 812328";
  	var nam = reg.split(",");
  	return nam.length;
  //console.log(nam.length);
}/*
var regCount = countRegNumber("CA 182736,CY 523519,CJ 812328")
var num = regCount.split(",");*/
