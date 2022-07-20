let now = new Date();
let m = now.getMonth();
let date = now.getDate();
let day = now.getDay();
let month = new Array('01','02','03','04','05','06','07','08','09','10','11','12');
let week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
document.getElementById('month').innerHTML = m + 1;
document.getElementById('date').innerHTML = date;
document.getElementById('day').innerHTML = week[day];

let info = month[m] + "월 " + day + "일 " + now.getHours() + ":" + now.getMinutes();
let news_brand = ['MBC', '중앙일보', '동아일보', 'YTN', '연합뉴스', '머니투데이', '한국경제', 'JTBC', 'SBS', '매일경제', 'KBS', '디지털데일리'];

const random1 = Math.floor(Math.random()*2);

$(document).ready(()=>{
    
    for(i=1;i<=3;i++){
        $(`.main_brick`).append(`
        <div class="brick brick${i}">
        </div>
        `)
        if(i === 1){
            $(".brick1").append(`
                <div class="brick_main_box">
                    <div class="main_item">
                        <div class="main_item_title">
                            <h3>언론사편집<a href="#"><span>기자 </span><span>연재 </span></a></h3>
                            <a href="#"> 구독중 <span>14</span><span class="icon-more"></span></a>
                        </div>
                    </div>
                </div>
            `)
        }
        for(let j=0; j<4; j++){
            const random2 = Math.floor(Math.random()*news_brand.length);
            $(`.brick${i}`).append(`
                <div class="brick_main_box">
                    <div class="main_item_news">
                        <a href="#" class="main_item_channel">
                            <div class="cjs_cmw">
                                <img src="images/${news_brand[random2]}.png" width="38" height="38" alt="cjs_cmw">
                            </div>
                            <div class="cjs_ctw">
                                <h4 class="channel">
                                    <span class="icon-subscribe">
                                        <div class="subscribe">
                                            <img src="images/subscribe.png" alt="subscribe">
                                        </div>
                                        <span class="blind"></span>
                                        500만
                                    </span>
                                    ${news_brand[random2]}
                                </h4>
                                <div class="info">${info}</div>
                            </div>
                        </a>
                        <div class="more_layer">
                            <a href="#" class="cjs_btn_more" onclick="more()"><img src="images/more.png" alt="more"></a>
                            <div class="cjs_ly_function">
                                <a href="#">구독 해지</a>
                                <a href="#">알림 받기</a>
                            </div>
                        </div>
                        <div class="cjs_tab_wrap">
                            <ul class="cjs_tab_list _tab_list">
                                <li class="cjs_tab_item _tab_item"><a href="#">주요뉴스</a></li>
                                <li class="cjs_tab_item _tab_item"><a href="#">서브뉴스</a></li>
                            </ul>
                        </div>
                        <div class="cjs_journal_content _headline_tab_contents">
                            <ul class="cc_text_list">
                                <li class="cc_text_item"><a href="#" class="cc_text_a ">"직장인 친구들보다 더 번다"...취업 대신 편의점 차리는 2030</a></li>
                                <li class="cc_text_item"><a href="#"class="cc_text_a ">"월급 한국인 수준으로 안 주면 조선족 구하는 건 꿈도 못꿔"</a></li>
                                <li class="cc_text_item"><a href="#"class="cc_text_a ">빨라야2025년?...출시 예상 시점 늦춰지는'애플 폴더플폰'</a></li>
                                <li class="cc_text_item"><a href="#"class="cc_text_a ">"대출 잘못 받았다가 발등 찍고 후회합니다"</a></li>
                            </ul>
                        </div>
                        <div class="cjs_journal_content _second_tab_contents">
    
                        </div>
                    </div>
                </div>
            `);
        }
    }
    if(random1 === 1){  // 속보 표시 여부 랜덤
        $(".main_item").append(`
            <div class="main_item_flash">
                <span class="icon-newsflash">속보</span>
                <div class="main_item_list">
                    <a href="#"><div><h4>4월16일까지 등교전 신속항원키트로 주2회 검사…3째주부턴 주1회</h4></div></a>
                    <div class="cn_name">
                        KBS
                    </div>
                </div>
            </div>
        `)
    }
})

$(document).ready(function(){
    $('.cjs_btn_more').click(function(){
        $('.cjs_ly_function').fadeToggle(0);
    })
})