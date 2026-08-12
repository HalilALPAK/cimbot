# ÇİMBOT — Tanıtım Sitesi

Mobil kontrollü ve otonom çim biçme robotu ÇİMBOT için tek sayfalık yatırımcı/ürün tanıtım sitesi. Sinematik ürün videosu, özellikler, güvenlik, pazar fırsatı ve yol haritası bölümlerini içerir.

Saf HTML/CSS/JS ile yazılmıştır — herhangi bir build adımı veya bağımlılık gerektirmez.

## Yerelde çalıştırma

Herhangi bir statik dosya sunucusu yeterlidir, örneğin:

```bash
python -m http.server 8080
```

sonra `http://localhost:8080` adresini aç.

## GitHub Pages ile yayınlama

1. Bu klasörü bir GitHub reposuna push'la (repo kökünde `index.html` olacak şekilde).
2. GitHub üzerinde repo **Settings → Pages** sayfasına git.
3. **Source** olarak `Deploy from a branch` seç, branch olarak `main`, klasör olarak `/ (root)` seç ve kaydet.
4. Birkaç dakika içinde site `https://<kullanıcı-adı>.github.io/<repo-adı>/` adresinde yayında olur.

## Yapı

```
index.html          Ana sayfa (tüm bölümler)
css/style.css        Stiller
js/main.js            Scroll animasyonları, mobil menü, video oynatma
assets/video/         Ürün tanıtım videosu
assets/img/           Favicon ve video poster (SVG)
```

## Düzenlenmesi gerekenler

`index.html` içindeki iletişim bölümünde yer alan telefon numarası (`+90 5xx xxx xx xx`) bir yer tutucudur — gerçek numarayla değiştirilmelidir. E-posta (`iletisim@cimbot.com`) ve website (`www.cimbot.com`) de gerçek adreslerle güncellenmelidir.
