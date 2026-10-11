const daftarNilai = [
    { kode: "14823192", matkul: "Arsitektur dan Organisasi Komputer", semester: 2, sks: 2, nilaiHuruf: "AB", nk: 7.00 },
    { kode: "14823372", matkul: "Statistika dan Probabilitas", semester: 2, sks: 2, nilaiHuruf: "A", nk: 8.00 },
    { kode: "14823274", matkul: "Pemrograman Berorientasi Objek", semester: 2, sks: 4, nilaiHuruf: "A", nk: 16.00 },
    { kode: "14823313", matkul: "Sistem Basis Data", semester: 2, sks: 3, nilaiHuruf: "AB", nk: 10.50 },
    { kode: "14823393", matkul: "Interaksi Manusia Komputer", semester: 2, sks: 3, nilaiHuruf: "B", nk: 9.00 },
    { kode: "14823333", matkul: "Algoritma dan Struktur Data", semester: 2, sks: 3, nilaiHuruf: "A", nk: 12.00 },
    { kode: "14823153", matkul: "Teknologi Informasi dan Aplikasi Bisnis Berkembang", semester: 2, sks: 3, nilaiHuruf: "B", nk: 9.00 }
];

$(function () {
    const $tabelBody =$("#tabelNilaiBody");

    function renderTabel(data) {
        $tabelBody.empty();
        data.forEach((item, index) => {
            const barisHtml = `
                <tr>
                    <td>${index + 1}.</td>
                    <td>${item.kode}</td>
                    <td class="text-start">${item.matkul}</td>
                    <td>${item.semester}</td>
                    <td>${item.sks}</td>
                    <td>${item.nilaiHuruf}</td>
                    <td>${item.nk.toFixed(2)}</td>
                </tr>
            `;
            $tabelBody.append(barisHtml);
        });
    }

    renderTabel(daftarNilai);

    $("#inputCari").on("keyup", function () {
        const keyword = $(this).val().toLowerCase();
        const hasilFilter = daftarNilai.filter(item => 
            item.matkul.toLowerCase().includes(keyword)
        );
        renderTabel(hasilFilter);
    });

    $("#formTugas").on("submit", function (e) {
        e.preventDefault(); 

        const $inputNama =$("#namaTugas");
        const $pesanValidasi =$("#pesanValidasi");
        const $listTugas =$("#listTugas");
        
        const nilaiInput = $inputNama.val().trim();

        if (nilaiInput.length < 3) {
            $pesanValidasi.text("Nama tugas minimal harus 3 karakter!");
            $pesanValidasi.removeClass("text-success").addClass("text-danger");
        } else {
            $pesanValidasi.text("Berhasil menambahkan tugas: " + nilaiInput);
            $pesanValidasi.removeClass("text-danger").addClass("text-success");

            $pesanValidasi.hide().fadeIn(300).delay(2000).fadeOut(300);

            const itemHtml = `
                <li class="list-group-item bg-dark text-light border-secondary d-flex justify-content-between align-items-center">
                    <span>${nilaiInput}</span>
                    <button class="btn btn-outline-danger btn-sm btn-hapus">Hapus</button>
                </li>
            `;
            $listTugas.append(itemHtml);

            $inputNama.val("");
        }
    });

    $("#listTugas").on("click", ".btn-hapus", function () {
        $(this).closest("li").fadeOut(200, function () {
            $(this).remove();
        });
    });
});