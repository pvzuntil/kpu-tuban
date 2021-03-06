function a(title = 'Test', desc = 'Test', type = 'success') {
    return Swal.fire({
        title: title,
        text: desc,
        type: type
    });
}

function direct(url) {
    window.location.href = url
}

function valEmail(email) {
    var email = email
    var splitAt = email.split('@');

    if (splitAt.length > 1) {
        var splitDot = splitAt[1].split('.')

        if (splitDot.length > 1) {
            return true
        }
    }
    return false
}

function formatRupiah(angka, prefix) {
    var number_string = angka.toString().replace(/[^,\d]/g, ''),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function toast(tit, ty = 'success') {
    Swal.fire({
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        position: "top-right",
        title: tit,
        type: ty
    });
}

function penanggalan(
    date,
    hari = false,
    bulan = false,
    tahun = false,
) {
    var dateD = new Date(date)

    var AHari = [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jum\'at',
        'Sabtu',
    ]

    var ABulan = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
    ]
    var harihari = AHari[dateD.getDay()]
    var bulanbulan = ABulan[dateD.getMonth()]
    var tahun = dateD.getUTCFullYear()

    if (hari == true) {
        return harihari
    }

    if (bulan == true) {
        return bulanbulan
    }

    if (dateD != 'Invalid Date') {
        return harihari + ', ' + dateD.getDate() + ' ' + bulanbulan + ' ' + tahun;
    } else {
        return 'Masukkan tanggal dengan benar'
    }
}


function cekAngka(val) {
    if (val.match(/^\d+$/)) {
        return true
    } else {
        return false
    }
}

function ucwords(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

function kapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
