export interface Treatment {
  id: string;
  name: string;
  description: string;
  priceStartsFrom: string;
  category: 'laser' | 'facial' | 'anti-aging';
}

export const treatments: Treatment[] = [
  {
    id: 'laser-co2',
    name: 'Laser CO2 Fractional',
    description: 'Resurfacing kulit untuk mengatasi bekas jerawat, kerutan halus, dan tekstur kulit tidak merata dengan presisi tinggi.',
    priceStartsFrom: 'Rp 1.200.000',
    category: 'laser',
  },
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    description: 'Penghilangan bulu permanen dengan teknologi diode laser yang aman dan nyaman untuk semua jenis kulit.',
    priceStartsFrom: 'Rp 350.000',
    category: 'laser',
  },
  {
    id: 'laser-pigmentasi',
    name: 'Laser Pigmentasi & Melasma',
    description: 'Menargetkan hiperpigmentasi dan melasma dengan panjang gelombang spesifik tanpa merusak jaringan sekitar.',
    priceStartsFrom: 'Rp 850.000',
    category: 'laser',
  },
  {
    id: 'laser-acne',
    name: 'Laser Terapi Jerawat',
    description: 'Meredakan inflamasi jerawat aktif dan membunuh bakteri penyebab jerawat dengan sinar laser blue light.',
    priceStartsFrom: 'Rp 450.000',
    category: 'laser',
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial Premium',
    description: 'Perawatan facial multi-langkah yang membersihkan, mengekstrak, dan menghidrasi kulit secara mendalam.',
    priceStartsFrom: 'Rp 600.000',
    category: 'facial',
  },
  {
    id: 'brightening-peel',
    name: 'Chemical Brightening Peel',
    description: 'Pengelupasan kimia ringan untuk mencerahkan wajah, menyamarkan noda hitam, dan meratakan warna kulit.',
    priceStartsFrom: 'Rp 500.000',
    category: 'facial',
  },
  {
    id: 'oxygen-facial',
    name: 'Oxygen Infusion Facial',
    description: 'Menginfusikan oksigen murni dan serum vitamin ke lapisan kulit untuk efek segar dan bercahaya instan.',
    priceStartsFrom: 'Rp 550.000',
    category: 'facial',
  },
  {
    id: 'microdermabrasi',
    name: 'Microdermabrasi Diamond',
    description: 'Eksfoliasi mekanik dengan ujung diamond untuk mengangkat sel kulit mati dan merangsang regenerasi sel.',
    priceStartsFrom: 'Rp 400.000',
    category: 'facial',
  },
  {
    id: 'microneedling-rf',
    name: 'Microneedling RF',
    description: 'Kombinasi microneedling dengan radiofrequency untuk mengencangkan kulit dan merangsang produksi kolagen.',
    priceStartsFrom: 'Rp 1.500.000',
    category: 'anti-aging',
  },
  {
    id: 'thread-lift',
    name: 'Thread Lift (Benang Lift)',
    description: 'Lifting non-bedah dengan benang PDO/PLA untuk mengangkat jaringan wajah yang kendur secara alami.',
    priceStartsFrom: 'Rp 2.500.000',
    category: 'anti-aging',
  },
  {
    id: 'botox',
    name: 'Botox Anti-Wrinkle',
    description: 'Injeksi botulinum toxin untuk menghaluskan kerutan dinamis di area dahi, mata, dan mulut.',
    priceStartsFrom: 'Rp 2.000.000',
    category: 'anti-aging',
  },
  {
    id: 'filler-hyaluronic',
    name: 'Filler Asam Hyaluronat',
    description: 'Mengembalikan volume wajah yang hilang, mendefinisikan kontur rahang, dan melembabkan dari dalam.',
    priceStartsFrom: 'Rp 3.000.000',
    category: 'anti-aging',
  },
];
