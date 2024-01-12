let count = 1;
document.getElementById("radio1").checked = true;
let texto1 = document.getElementsByClassName("texto1");
let texto2 = document.getElementsByClassName("texto2");

setInterval(function () {
    nextImage();
}, 7000);

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
    atualizarTextos(count);
}

function atualizarTextos(indice) {
    var textosH1 = ["Filmes Gospel", "ENCONTRO", "Gospel"];
    var textosH2 = ["Lista mais procurada.", "Com Deus", "Premier leassons to the"];

    for (var i = 0; i < texto1.length; i++) {
        texto1[i].textContent = textosH1[indice - 1];
    }

    for (var i = 0; i < texto2.length; i++) {
        texto2[i].textContent = textosH2[indice - 1];
    }
}

for (var i = 1; i <= 3; i++) {
    document.getElementById("radio" + i).addEventListener('change', function () {
        var slideNumber = parseInt(this.id.replace('radio', ''));
        count = slideNumber;

        atualizarTextos(count);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const videoListContainer = document.getElementById('videoListContainer');
    let currentIndex = 0;
    const totalVideos = 20;  // Total de vídeos
    const videosPerPage = 1;

    function showVideos() {
        const maxIndex = Math.max(totalVideos - videosPerPage, 0);
        currentIndex = Math.min(currentIndex, maxIndex);

        const startPosition = currentIndex * -((300 + 20) * videosPerPage);
        videoListContainer.style.transform = `translateX(${startPosition}px)`;
    }

    function nextVideo() {
        if (currentIndex < totalVideos - videosPerPage) {
            currentIndex++;
            showVideos();
        }
    }

    function prevVideo() {
        if (currentIndex > 0) {
            currentIndex--;
            showVideos();
        }
    }

    showVideos();

    window.nextVideo = nextVideo;
    window.prevVideo = prevVideo;
});


var paiCabeçalho = document.querySelector('.paiCabeçalho');

function clickMenu() {
    if (paiCabeçalho.style.display === 'block') {
        paiCabeçalho.style.display = 'none';
    } else {
        paiCabeçalho.style.display = 'block';
    }
}

function mudouTamanho() {
    if (window.innerWidth <= 1182) {
        paiCabeçalho.style.display = 'none';
    } else {
        paiCabeçalho.style.display = 'block';
    }
}

// Chama a função mudouTamanho() quando a página carrega e quando a janela é redimensionada
window.onload = mudouTamanho;
window.onresize = mudouTamanho;
// pequenas telas até 600px
// celular 600px a 768px
// tablet 768px a 992px
// desktop 992px a 1200px
// grandes acima de 1200px







