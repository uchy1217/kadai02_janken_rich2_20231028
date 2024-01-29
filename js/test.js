// gu choki pa のどれかをクリックしたら、ランダムでコンピュータの手を算出
function p_hands(p_select){
    var random = Math.floor(Math.random()*3 + 1)
    console.log(random,"ランダムで数字出せるかな")

// あなたの手を表示
if(p_select === 1){
    $("#u_hands").attr('src',"img/janken_gu.png")

    }
    else if(p_select === 2 ){
    $("#u_hands").attr('src',"img/janken_choki.png")

    }
    else if(p_select === 3 ){
    $("#u_hands").attr('src',"img/janken_pa.png")
    }

// コンピュータの手を表示
    if(random === 1){
    console.log("PCはぐー")
    $("#pc_hands").attr('src',"img/janken_gu.png")


    }
    else if(random === 2 ){
    console.log("PCはちょき")
    $("#pc_hands").attr('src',"img/janken_choki.png")

    }
    else if(random === 3 ){
    console.log("PCはぱー")
    $("#pc_hands").attr('src',"img/janken_pa.png")
    }

// 勝ち負けの判断
if(random === p_select){
    console.log("引き分け")
    $("#judgment").attr('src',"img/pose_draw.png")

    var thiscount4 = $("#draw_count").html();
    thiscount4 = Number(thiscount4);
    thiscount4 = thiscount4 + 1;
    $("#draw_count").html(thiscount4);   

    }
    else if(random === 1 && p_select === 3 ){
    console.log("勝ち")
    $("#judgment").attr('src',"img/pose_win.png")
    
    var thiscount2 = $("#win_count").html();
    thiscount2 = Number(thiscount2);
    thiscount2 = thiscount2 + 1;
    $("#win_count").html(thiscount2);    
    }

    else if(random === 2 && p_select === 1 ){
        console.log("勝ち")
        $("#judgment").attr('src',"img/pose_win.png")
       
        var thiscount2 = $("#win_count").html();
        thiscount2 = Number(thiscount2);
        thiscount2 = thiscount2 + 1;
        $("#win_count").html(thiscount2); 
    }
    else if(random === 3 && p_select === 2 ){
        console.log("勝ち")
        $("#judgment").attr('src',"img/pose_win.png")
    
        var thiscount2 = $("#win_count").html();
        thiscount2 = Number(thiscount2);
        thiscount2 = thiscount2 + 1;
        $("#win_count").html(thiscount2); 
    }
    else {
    console.log("負け")
    $("#judgment").attr('src',"img/pose_lose.png")
    
    // 負けカウント
    var thiscount3 = $("#lose_count").html();
    thiscount3 = Number(thiscount3);
    thiscount3 = thiscount3 + 1;
    $("#lose_count").html(thiscount3); 
    }

// 合計のカウント
var thiscount = $("#total_count").html();
thiscount = Number(thiscount);
thiscount = thiscount + 1;
$("#total_count").html(thiscount);

}




// 勝ち負けの表示