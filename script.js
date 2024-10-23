function formPendaftaran() {
    return {
        nama: '',
        tempatLahir: '',
        tanggalLahir: '',
        jenisKelamin: '',
        alamat: '',
        programStudi: '',
        showPreview: false,
        // Method untuk submit form
        submitForm() {
            // Buat data untuk dikirim ke API
            const formData = {
                nama: this.nama,
                tempat_lahir: this.tempatLahir,
                tanggal_lahir: this.tanggalLahir,
                jenis_kelamin: this.jenisKelamin,
                alamat: this.alamat,
                program_studi: this.programStudi
            };
            // Kirim data ke API menggunakan fetch
            fetch('http://localhost:8000/api/pendaftaran-mahasiswa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Gagal menyimpan data.');
                }
                return response.json();
            })
            .then(data => {
                alert('Pendaftaran berhasil!');
                console.log('Data yang dikirim:', data);
            })
            .catch(error => {
                console.error('Terjadi kesalahan:', error);
                alert('Terjadi kesalahan saat menyimpan data.');
            });
        }
    }
}