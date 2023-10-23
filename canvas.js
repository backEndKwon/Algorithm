
/* 점으로 나선형 그리기 */
canvas.scale(1,-1)
canvas.translate(width/2,-height/2)

$('#erase').click(function(){
    canvas.clearReact(-widht, -height, width*2, height*2)
})

$('#draw').click(function(){
    if(parseFloat($('#degrees').val()) == 0){
        alert('각도를 입력하세요')
        return
    }else{
        for(let angle=0; angle<4*360; angle+=parseFloat($('#degrees').val())){
         let theta = 2*Math.PI*angle/360
         let r =theta *10
         canvas.beginPath()
         canvas.arc(r*Math.cos(theta), r*Math.sin(theta), 3, 0, 2*Math.PI,0)
         canvas.fill()
        }
    }
})