import { useEffect } from 'react';
/*還沒導入圖片*/
export function Characters() {
    useEffect(() => {
      document.body.style.overflowX = 'hidden';
      return () => {
        document.body.style.overflowX = 'auto';
      };
    }, []);
    return (
      <section className='characters'>
        <div className='col-md-12 text-center'>
          <div className='row'>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='./src/img/Chiikawa.jpg'></img>
                  <div className='innertext'>
                    <h2>吉伊卡哇</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>不太懂說話，膽小又愛哭，但是個心地善良又溫柔的小傢伙。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/Hachiware.jpg'></img>
                  <div className='innertext'>
                    <h2>小八貓</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>又稱小八，個性樂觀、開朗，擅長社交，扮演著翻譯的角色。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/rabbit.png'></img>
                  <div className='innertext'>
                    <h2>兔兔</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>充滿活力，看似神經大條卻很聰明，叫聲是「嗚啦」「呀哈」。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/Momonga.jpg'></img>
                  <div className='innertext'>
                    <h2>小桃鼠</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>小小的身體、蓬鬆的尾巴，不斷裝可愛、裝可憐要求別人誇獎與哄牠，是個任性的角色。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/KuriManju.jpg'></img>
                  <div className='innertext'>
                    <h2>栗子饅頭</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>吉伊卡哇的前輩。經常料理出美味的下酒菜，喝完啤酒會吐一口「哈~」，會請後輩吃美食。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/Rakko.jpg'></img>
                  <div className='innertext'>
                    <h2>海獺師傅</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>討伐排行榜冠軍，被大家所崇拜的角色。大家看到他都會熱情的歡呼，用崇拜的眼神看著牠。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/Shisa.jpg'></img>
                  <div className='innertext'>
                    <h2>風獅爺</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>聰明上進的角色，因為喜歡郎拉麵屋所以努力進到裡面打工，常出現與沖繩相關的食物和術語。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/SleepParty.jpg'></img>
                  <div className='innertext'>
                    <h2>睡衣派對</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>身穿四種不同顏色連身睡衣載歌載舞的神秘生物，全身只是一個黑影、連樣貌都沒畫。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/star.png'></img>
                  <div className='innertext'>
                    <h2>流星</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>小八貓與吉伊卡哇在餐廳救下差點被當作美食吃掉的星星們，被它們報答得到超大蛋包飯。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-cener'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/Yoroi San3.jpg'></img>
                  <div className='innertext'>
                    <h2>拉麵盔甲人</h2>
                  </div>
                </div>
                <div className='lower'>
                  <h3>郎拉麵屋的的老闆，他經營的郎拉麵店在當地非常受歡迎。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/Yoroi San2.jpg'></img>
                  <div className='innertext'>
                    <h2>手工盔甲人</h2>
                  </div>
                </div>
                <div className='lower'>
                <h3>喜歡手作跟可愛的東西，製作過小背包、睡衣雨衣之類的作品。</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <div className='outer'>
                <div className='upper'>
                  <img src='/src/img/Yoroi San1.jpg'></img>
                  <div className='innertext'>
                    <h2>勞動盔甲人</h2>
                  </div>
                </div>
                <div className='lower'>
                <h3>負責勞動管理，如刊登委託、幫助分辨討伐怪物、發送酬勞等。</h3>
                </div>
              </div>
            </div>
          </div>
          <a className='btn' href='/'>回首頁</a>
          <a className='btn' href='/quiz_information'>進行測驗</a>
        </div>
      </section>
      
    );
};