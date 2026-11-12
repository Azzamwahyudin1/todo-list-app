// 1. Inisialisasi Array kosong untuk menampung seluruh daftar tugas
let toDoArray = [];

// 2. Tangkap elemen DOM berdasarkan ID
const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const areaArray = document.getElementById("areaArray");

// 3. Event Listener pada tombol "Tambah"
btnTambah.onclick = function () {
    // Validasi Input: cek apakah input teks kosong
    if (inputTugas.value.trim() === "") {
        alert("tugas tidak boleh kosong");
        return; // hentikan fungsi jika kosong
    }

    // Tambah ke Array menggunakan .push()
    toDoArray.push(inputTugas.value.trim());

    // Bersihkan kembali kolom input teks
    inputTugas.value = "";

    // Render ulang daftar tugas
    renderToDoList();
};

// 4. Render List dengan for loop
function renderToDoList() {
    // Jika array kosong, tampilkan pesan default
    if (toDoArray.length === 0) {
        areaArray.innerHTML = '<p class="text-center text-muted">Belum ada tugas hari ini...</p>';
        return;
    }

    // Siapkan variabel penampung string HTML, dibungkus tag <ul>
    let listHTML = '<ul class="list-group">';

    // Perulangan dari index 0 hingga toDoArray.length
    for (let i = 0; i < toDoArray.length; i++) {
        console.log(toDoArray[i]); // tampilkan setiap tugas di console
        listHTML += `<li class="list-group-item">${toDoArray[i]}</li>`;
    }

    listHTML += "</ul>";

    // Masukkan hasil susunan HTML ke dalam innerHTML area penampung
    areaArray.innerHTML = listHTML;
}
