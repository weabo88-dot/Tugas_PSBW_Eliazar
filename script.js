const daftarNilai = [
    { kode: "14823192", matkul: "Arsitektur dan Organisasi Komputer", semester: 2, sks: 2, nilaiHuruf: "AB", nk: 7.00 },
    { kode: "14823372", matkul: "Statistika dan Probabilitas", semester: 2, sks: 2, nilaiHuruf: "A", nk: 8.00 },
    { kode: "14823274", matkul: "Pemrograman Berorientasi Objek", semester: 2, sks: 4, nilaiHuruf: "A", nk: 16.00 },
    { kode: "14823313", matkul: "Sistem Basis Data", semester: 2, sks: 3, nilaiHuruf: "AB", nk: 10.50 },
    { kode: "14823393", matkul: "Interaksi Manusia Komputer", semester: 2, sks: 3, nilaiHuruf: "B", nk: 9.00 },
    { kode: "14823333", matkul: "Algoritma dan Struktur Data", semester: 2, sks: 3, nilaiHuruf: "A", nk: 12.00 },
    { kode: "14823153", matkul: "Teknologi Informasi dan Aplikasi Bisnis Berkembang", semester: 2, sks: 3, nilaiHuruf: "B", nk: 9.00 }
];


const tabelBody = document.querySelector("#tabelNilaiBody");

function renderTabel(data) {
    tabelBody.innerHTML = "";
    data.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}.</td>
            <td>${item.kode}</td>
            <td class="text-start">${item.matkul}</td>
            <td>${item.semester}</td>
            <td>${item.sks}</td>
            <td>${item.nilaiHuruf}</td>
            <td>${item.nk.toFixed(2)}</td>
        `;
        tabelBody.append(tr);
    });
}


renderTabel(daftarNilai);


const inputCari = document.querySelector("#inputCari");
if (inputCari) {
    inputCari.addEventListener("keyup", (e) => {
        const keyword = e.target.value.toLowerCase();
        const hasilFilter = daftarNilai.filter(item => item.matkul.toLowerCase().includes(keyword));
        renderTabel(hasilFilter);
    });
}


const formTugas = document.querySelector("#formTugas");
const namaTugas = document.querySelector("#namaTugas");
const pesanValidasi = document.querySelector("#pesanValidasi");
const listTugas = document.querySelector("#listTugas");

if (formTugas) {
    formTugas.addEventListener("submit", (e) => {
        e.preventDefault(); // Mencegah form melakukan reload halaman secara default[cite: 96, 97, 101]
        
        const nilaiInput = namaTugas.value.trim();

        if (nilaiInput.length < 3) {
            pesanValidasi.textContent = "Nama tugas minimal harus 3 karakter!";
            pesanValidasi.classList.add("text-danger");    // Menggunakan classList, bukan style inline
            pesanValidasi.classList.remove("text-success");
        } else {
            pesanValidasi.textContent = "Berhasil menambahkan tugas: " + nilaiInput;
            pesanValidasi.classList.add("text-success");
            pesanValidasi.classList.remove("text-danger");

            // Membuat elemen list baru dengan createElement
            const li = document.createElement("li");
            li.textContent = nilaiInput;
            li.className = "list-group-item bg-dark text-light border-secondary d-flex justify-content-between align-items-center";
            
            listTugas.append(li);
            formTugas.reset();
        }
    });
}

function hitungRataRataNK(data) {
    let totalNK = 0;
    for (const item of data) {
        totalNK += item.nk; 
    }
    return totalNK / data.length;
}

console.log("=== REKAPITULASI NILAI MAHASISWA ===");
console.log("Nama: Eliazar Yasta Prarindra | NBI: 1482500005");
let rataRata = hitungRataRataNK(daftarNilai);
console.log(`Rata-rata Nilai Kualitas: ${rataRata.toFixed(2)}`);