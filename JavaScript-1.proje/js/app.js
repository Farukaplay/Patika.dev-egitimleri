let isim = document.querySelector("#name"), //Tanımldığımız isim değişkenine HTML yapısındaki id'si #name olan tag'a tanılıyoruz.
    days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]  //Haftanın günlerini bir array içine alıyoruz.
    isim.innerHTML = prompt("Adınızı giriniz")//isim değişkenine kullanıcıdan aldığımız veriyi aktarıyoruz. innerHTML ile içeriği değiştiriyoruz.

function control(i){ // burdaki fonksiyon tek haneli saat, dakika ve saniyenin önüne 0 koymamızı sağlıyor.
    if (i < 10){
        i = "0" + i
    }
    return i
}
/*
    Fonksiyon i parametresi alır. parametreden gelen bilgi if kontrolü ile tek haneli yani 10'dan küçük olup olmadığına bakar
    kontrol sağlandıktan sonra return ile dondürülür.
    
    second değişkeni öncelikle anlık gelen saniyeyi göstermektedir.
    second = control(second);
    
    fuction control(second){
        if (second < 10){
            second = "0" + second 
        }
        return second
    }

    burda control'e verdiğimiz parametre olan second 0-59 arasında olduğu için if kontrol 
    ettikten sonra bize verdiğimiz parametreyi return ile döndürür.

    sonra burda da conrol'den dönen veriyi seconda tekrar aktarmış oluyoruz. 
    second = control(second);

*/

function time(){ // time isimli fonksiyonumuzu açtık
    let date = new Date(), // date isimde ki değişkene Date objesini tanımladık.
        day = days[date.getDay()],
        /* 
        burda day değişkenine yukarıda tanımladığımız days arrayi aktardık 
        days array'imizin içine de Date objesinden aldığımız date.getDay() fonksiyonunu yazdık
        burda getDay() fonksiyonu bize 0-6'ya kadar değerler verir 0 = Pazar 1= Pazartesi diye gider
        biz days[0] yazsak days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"] bize index
        numarası olan pazar'ı verir burda otomatik olarak days[date.getDay()] belirli günün index numarısını verir buda
        hangisine karşılık geliyorsa bize o günü gösterir.
        */
        hours = date.getHours(),//Date objesi burda saat bilgisini verir. hours değişkenine aktarıyoruz
        minute = date.getMinutes(),
        second = date.getSeconds();
        hours = control(hours),
        minute= control(minute),
        second = control(second),

        hoursDom = document.querySelector("#hours").innerHTML = hours + ":" + minute + ":" + second + " " + day;
        //hoursDom isimli değişkenimizi HTML tag'larından id'si #hours olan tag'ı seçer ve innerHTML özelliğiyle değişkenlerimizi içine yazar. 
    }

setInterval(time, 1000)// bu fonksiyon time adlı fonksiyonumuzu her 1000 ms de bir yeniden çalıştırır