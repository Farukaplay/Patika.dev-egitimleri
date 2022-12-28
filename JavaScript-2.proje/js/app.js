let input = document.querySelector("form input")
let form = document.querySelector("form")
let ul = document.querySelector(".list-style")
let btnAddList = document.querySelector("form button")



form.addEventListener("submit", SubmitHandler)          // addEventListener form değişkenine dinleme özelleği katar submit verisi geldiğinde tanımlanan fonksiyon çalışır.

function SubmitHandler(e) {                             //Submit butonun form içerisinde ki yenilemeyi durdurması için fonksiyon 
    e.preventDefault()
}

btnAddList.addEventListener("click", AddList)           // button'a tıklandığında AddList fonksiyonu çalışır.

function AddList() {                                    // Listeye öğe eklenenince çalışacak fonksiyon
    let createLi = document.createElement("li")         // dinamik li elementi oluşturmak fonksiyon içine yazmamın sebebi her fonsiyon çalıştığında yeni bir li oluşsun diye.
    createLi.innerHTML = input.value.trim()             // li elementine inputtan gelen değeri atar ve boşlukları siler
    let li = createLi.innerHTML                         // burda createLi değişkenin türü object olarak geliyordu yeni bir değişkene atarak string yapıda oldu (createLi değişkeni istediğim sonucu vermiyordu :( bu şekil bir çözüm buldum ve çalıştı pek anlayamadım
    


    if (li == "") {                                      // li'yi kontrol etme zaten yukarıda trim() yaptığımız için sadece boşluk girilmesi durumunu kontrol eder.

        $("#liveToastError").toast("show")              // error toast mesajı

    } else {

        $("#liveToast").toast("show")                   // success toast mesajı
        input.value = ""                                // inputa değer girilip kaydedildikten sonra input içeriği resetlemek için
        ul.append(createLi)                             // ul içine li elementi oluşturmak içim
        LiStyle();                                      // LiStyle Fonsksiyonunu burada çalıştırıyoruz    
    }

    function LiStyle() {                                // LiStyle fonksiyonumuzu tanımaldık.
        createLi.innerHTML = 
        `${li}  <span class="closed btn-remove"></span>`            // Dinamik olarak oluşturduğumuz li elementi içine span ile bir X sembolü koyduk.
    }

    createLi.addEventListener("click", function () { 
        createLi.classList.toggle("checked")                 // dinleme özelliği verdiğimiz li elmentine tıklanıldığında "checked" claasını ekleyip çıkarması için tanımladık. 
    })

    let btnRemove = document.querySelectorAll(".btn-remove") // li içindeki span etiketine ulaşabilmek için bir değişken oluşturduk.

    btnRemove.forEach(removeList => {                        // foreach ile span etiketlerimizi teker teker işlem yapabilmek için seçtik.
        removeList.addEventListener("click", function () {
            removeList.parentElement.remove()                // removeList değişkenine her defasında tıkladığımız span elementi aktarılır ve span elementinin bir üst elementini silmek için parentElement özellğini kullandık. 
            $("#liveToastDelete").toast("show")              // silinen element için toast mesajı
        })
    })
}
