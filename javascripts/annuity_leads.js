// JavaScript Document


d3.select("#circleTypesContainer")
.selectAll("div")
.on("mouseover", function(){
	d3.select(this)
	.transition()
	.duration(75)
	.delay(10)
	.style("-webkit-transform","scale(1.08)")
	.style("transform","scale(1.08)")
	
	d3.select(this)
	.transition()
	.duration(75)
	.delay(170)
	.style("-webkit-transform","scale(1)")
	.style("transform","scale(1)")
})

d3.select("#fixedType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("Recieive payments at a fixed rate that does not adjust for inflation. We can gauarantee your full principal plus earnings.")
	.style("left","0px")
	.style("opacity",1)
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","90px")
})



d3.select("#variableType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("Recieve payments at a rate that depends on the performance of an investment, usually a mutual fund.")
	.style("left","0px")
	.style("opacity",1)
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","284px")
})

d3.select("#immediateType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("Recieve payments immediately after purchasing the annuity until your death. Immidiate annuities can be fixed or variable.")
	.style("left","0px")
	.style("opacity",1)
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","478px")
})

d3.select("#indexedType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("Recieve payments at a rate based on a specific equity-based index. Earnings and losses are restricted by rate caps.")
	.style("left","0px")
	.style("opacity",1)
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","676px")
})

d3.select("#deferredType")
.on("click", function(){
	d3.select(".InfoPara")
	.transition()
	.duration(400)
	.style("left","-2000px")
	.style("opacity",0)
	
	d3.select(".InfoPara")
	.transition()
	.duration(600)
	.delay(250)
	.text("Delay your payments until you want to recieve them. Your earnings are tax-deferred until withdrawal.")
	.style("left","0px")
	.style("opacity",1)
	
	d3.select("#circleTypesInfoContainerTriangle")
	.transition()
	.duration(500)
	.style("left","870px")
})