function myFunction(){
    const jsonData = [
        {
            "name": "Tanaka",
            "content": "aaa"
        },
        {
            "name": "Satou",
            "content": "bbb"
        },
    ]
    // console.log(jsonData); //そのまま
    // console.log(jsonData[0]) // 田中だけ出すやつ
    
    // すべてのデータの特定の値を出すやつ
    jsonData.forEach(data => {
        console.log(data.name);
    })

    // 特定の条件を持つデータを抜き出す
    function findUserData(param) {
        return jsonData.find(data => data.name === param);
    }

    console.log(findUserData("Tanaka"))
}

function myFunction1() {
    const jsonData = {
        "name": "Tanaka",
        "content": "aaaa"
    }
    // console.log(jsonData) //データをそのまま出す

    // データを取り出す方法
    // console.log(jsonData["name"])
    // console.log(jsonData.content)
}

// おまじない
window.addEventListener("DOMContentLoaded", () => {
    myFunction()
})