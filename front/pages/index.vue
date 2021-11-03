<!-- 
### 画面の構成要素
- [x] ヘッダー(0%)
  - [x] ログアウトボタン(右上にフローティングさせる感じ)
- [x] メイン画面(90%)
  - [x] アイテム表示欄
    - [x] カード
      - [x] 画像(75%)
      - [x] タイトル(12.5%)
      - [x] 日付（最後に見た日）(12.5%)
- [ ] フッター(10%)
  - [ ] アイテム追加欄
      - [ ] 名称入力欄
      - [ ] URL入力欄
      - [ ] 入力ボタン
-->
<template>
    <div class="container">
        <div class="header">
            <button>ログアウト</button>
        </div>
        <div class="main">
            <div class="cards">
                <div class="card" v-for="item in items">
                    <div class="image idea"></div>
                    <div class="title">{{ item.name }}</div>
                    <div class="date">最終閲覧日：{{ item.date }}</div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="spacer" style="margin-left: 1rem;"></div>項目名：<input class="name" type="text" name="name" id="name">
            URL：<input class="url" type="text" name="url" id="url">
            <button>追加</button>
        </div>
    </div>
</template>
<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    font-size: 16px;
}
.header{}
    .header button{
        position: fixed;
        margin: 1em;
        width: 10em;
        right: 0;
        top: 0;
    }
.main{
    width: 100%;
    height: 90%;
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    /* border: 1px solid red; */
}
    .cards{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
        .card{
            /*
            - カード
              - 画像(75%)
              - タイトル(12.5%)
              - 日付（最後に見た日）(12.5%)
             */
            margin: 1em;
            /* border: 1px solid green; */
            width: 200px;
            height: 300px;
            border-radius: 0.5em;
            background-color: #fff;
            cursor: pointer;
        }
            .image{
                height: 75%;
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 0.5em 0.5em 0 0;
            }
            .image.tech{
                background-image: url('https://image.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg');
            }
            .image.idea{
                background-image: url('https://image.freepik.com/free-vector/thesis-concept-illustration_114360-7560.jpg');
            }
            .image.misc{
                background-image: url('https://image.freepik.com/free-vector/gradient-colorful-technology-background_52683-74699.jpg');
            }
        
            .title{
                padding: 0 1rem;
                font-size: 1.5em;
                height: 12.5%;
            }
            .date{
                text-align: right;
                padding: 0 1rem;
                font-size: 0.5em;
                height: 12.5%;
            }
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: left;
    align-items: center;
}
    .footer input.name,
    .footer input.url{
        margin: 0.5rem;
    }
    .footer input.name{

    }
    .footer input.url{
        
    }
    .footer button{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 6rem;
    }
</style>
<style>
    body{
        margin: 0;
    }
</style>
<script>
export default {
    data() {
        return {
            items: ""
        }
    }, 
    methods: {
        
    },
    mounted() {
        // 画面が読み込まれた後にAPIをfetchでコールする
        // レスポンスをdataにセットする
        // const url = 'https://jsonplaceholder.typicode.com/todos/1'
        const url = 'https://2nd26g4kdh.execute-api.ap-northeast-1.amazonaws.com/prod/';
        fetch(url).then( response => response.json() ).then( json => this.items = json.content);
    }    
}
</script>