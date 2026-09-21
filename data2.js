/* ============================================================
   WeX EDUCATION — DATA2.JS
   Gộp: COURSES (HSA/V-ACT/THPT/Ngữ pháp...) + MEGA + SGK + Thầy Chí + Cô Sen
   ============================================================ */

const COURSES = [
  {
    name: "Luyện thi Đánh giá năng lực môn Tiếng Anh (COMBO 3M PLUS 2027)",
    lessons: [
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Tự tin dành trọn điểm câu hỏi Tình huống giao tiếp (Buổi 1)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Thi Online: Luyện tập câu hỏi Tình huống giao tiếp (Buổi 01) - Đề số 01",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Thi Online: Luyện tập câu hỏi Tình huống giao tiếp (Buổi 01) - Đề số 02",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Tự tin dành trọn điểm câu hỏi Tình huống giao tiếp (Buổi 2)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Dành trọn điểm câu hỏi Viết lại câu trong đề thi HSA (Buổi 1)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Dành trọn điểm câu hỏi Viết lại câu trong đề thi HSA (Buổi 2)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Ăn trọn điểm câu hỏi Sắp xếp trong đề thi HSA (Buổi 1)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Phát triển năng lực xử lý câu hỏi phân loại về Tư duy logic và giải quyết vấn đề (Buổi 1)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Phát triển năng lực xử lý câu hỏi phân loại về Tư duy logic (Buổi 2)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Phát triển năng lực xử lý câu hỏi phân loại về Tư duy logic (Buổi 3)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Dành trọn điểm bài Đọc điền khuyết thông tin (Buổi 1)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Dành trọn điểm bài Đọc điền khuyết thông tin (Buổi 2)",v:null,e:0},
      {c:"KỲ THI ĐÁNH GIÁ NĂNG LỰC - ĐHQG HÀ NỘI (HSA)",n:"Dành trọn điểm bài Đọc điền khuyết thông tin (Buổi 3)",v:null,e:0},
      {c:"XỬ LÍ DẠNG BÀI CHUYÊN BIỆT - ĐHQG TP.HCM (V-ACT)",n:"Tự tin ăn trọn điểm câu hỏi Tìm lỗi sai trong đề thi (Buổi 1)",v:"https://ngonngu.vncdn.vn/output/luyende2025/795-WEB2025-pro3m-plus-danhgianangluc-timloisaitrongdethi-V-ACT-buoi1-quay25-1.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"XỬ LÍ DẠNG BÀI CHUYÊN BIỆT - ĐHQG TP.HCM (V-ACT)",n:"Tự tin ăn trọn điểm câu hỏi Tìm lỗi sai trong đề thi (Buổi 2)",v:"https://ngonngu.vncdn.vn/output/luyende2025/796-WEB2025-pro3m-plus-danhgianangluc-timloisaitrongdethi-V-ACT-buoi2-quay25-1/1/2/1119/manifest.m3u8",e:1},
      {c:"XỬ LÍ DẠNG BÀI CHUYÊN BIỆT - ĐHQG TP.HCM (V-ACT)",n:"Tự tin ăn trọn điểm câu hỏi Tìm lỗi sai trong đề thi (Buổi 3)",v:"https://ngonngu.vncdn.vn/output/luyende2025/797-web2025-pro3m-plus-danhgianangluc-timloisaitrongdethi-v-act-buoi-3-quay-25-1.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"XỬ LÍ DẠNG BÀI CHUYÊN BIỆT - ĐHQG TP.HCM (V-ACT)",n:"Tự tin ăn trọn điểm câu hỏi Viết lại câu trong đề thi (Buổi 1)",v:"https://ngonngu.vncdn.vn/output/luyende2025/805-WEB2025-pro3m-plus-DGNL-vietlaicautrongdethiDGNL-V-ACT-buoi1--quay3-2.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"XỬ LÍ DẠNG BÀI CHUYÊN BIỆT - ĐHQG TP.HCM (V-ACT)",n:"Tự tin ăn trọn điểm câu hỏi Viết lại câu trong đề thi (Buổi 2)",v:"https://ngonngu.vncdn.vn/output/luyende2025/809-WEB2025-pro3m-plus-DGNL-vietlaicautrongdethiDGNL-V-ACT-buoi2--quay5-2.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"PHÁT TRIỂN NĂNG LỰC & TƯ DUY (HNUE)",n:"Bài 1: Cách viết mở đoạn",v:"https://ngonngu.vncdn.vn/output/dangbaichuyenbiet2023/26-WEB-02112022-cachvietmodoan-chodoanvan-quay2-11.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"PHÁT TRIỂN NĂNG LỰC & TƯ DUY (HNUE)",n:"Bài 2: Cách viết kết đoạn",v:"https://ngonngu.vncdn.vn/output/dangbaichuyenbiet2023/27-WEB-16112022-cachvietketdoan-chodoanvan-quay16-11.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"PHÁT TRIỂN NĂNG LỰC & TƯ DUY (HNUE)",n:"Bài 3: Cách lập dàn ý",v:"https://ngonngu.vncdn.vn/output/dangbaichuyenbiet2023/35-WEB-26112022-cachlapluandany-quay26-11.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"PHÁT TRIỂN NĂNG LỰC & TƯ DUY (HNUE)",n:"Bài 5: Cách viết đoạn văn chủ đề Môi Trường",v:"https://ngonngu.vncdn.vn/output/dangbaichuyenbiet2023/40-WEB-20122022-VIETDOANVAN-CHUDEMOITRUONG-quay20-12.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐGNL SƯ PHẠM HÀ NỘI (SPT)",n:"Phát triển và Dự đoán đặc biệt SPT: Đề số 01",v:"https://ngonngu.vncdn.vn/output/luyende2025/840-WEB2025-pro3m-plus-kithiDGNL-SPT-DHSPHANOI-DESO1-quay4-3.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐGNL SƯ PHẠM HÀ NỘI (SPT)",n:"Phát triển và Dự đoán đặc biệt SPT: Đề số 02",v:"https://ngonngu.vncdn.vn/output/nganhang2025/847-WEB2025-pro3m-plus-kithiDGNL-SPT-DHSPHANOI-DESO2-quay9-3.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐGNL SƯ PHẠM HÀ NỘI (SPT)",n:"Phát triển và Dự đoán đặc biệt SPT: Đề số 03",v:"https://ngonngu.vncdn.vn/output/luyende2025/852-WEB2025-pro3m-plus-kithiDGNL-SPT-DHSPHANOI-DESO3-quay14-3.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC BCA",n:"Đề thi minh họa - Kỳ thi ĐGNL BCA 2026",v:null,e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC BCA",n:"Chữa và Phân tích Đề thi minh họa - Kỳ thi ĐGNL BCA 2026",v:null,e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC BCA",n:"Phát triển và Dự đoán đặc biệt BCA (Đề số 01)",v:null,e:1},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC BCA",n:"Phát triển và Dự đoán đặc biệt BCA (Đề số 02)",v:null,e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC V-SAT",n:"Đề thi minh họa - Kỳ thi ĐGNL V-SAT",v:null,e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC V-SAT",n:"Phát triển và Dự đoán đặc biệt V-SAT (Đề số 01)",v:null,e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC – HPU2",n:"Đề thi chính thức năm 2026 - Ca sáng",v:null,e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC – HPU2",n:"Đề thi chính thức năm 2026 - Ca Chiều",v:null,e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC BỘ QUỐC PHÒNG",n:"Đề thi minh họa - Kỳ thi ĐGNL QDA 2026",v:null,e:0},
      {c:"BỘ ĐỀ DỰ ĐOÁN - ĐÁNH GIÁ NĂNG LỰC BỘ QUỐC PHÒNG",n:"Phát triển và Dự đoán đặc biệt QDA (Đề số 01)",v:null,e:0}
    ]
  },
  {
    name: "Ngân hàng đề thi tốt nghiệp THPT 2027 (COMBO PRO3M PLUS)",
    lessons: [
      {c:"BỘ ĐỀ KHẢO SÁT CHẤT LƯỢNG ĐẦU NĂM HỌC 2026-2027",n:"Đề Khảo sát chất lượng đầu năm học - Đề số 01",v:null,e:1},
      {c:"BỘ ĐỀ KHẢO SÁT CHẤT LƯỢNG ĐẦU NĂM HỌC 2026-2027",n:"Chữa đề Khảo sát chất lượng định kì đầu năm học: Đề số 01",v:null,e:0},
      {c:"BỘ ĐỀ KHẢO SÁT CHẤT LƯỢNG ĐẦU NĂM HỌC 2026-2027",n:"Đề Khảo sát chất lượng đầu năm học - Đề số 02",v:null,e:1},
      {c:"BỘ ĐỀ KHẢO SÁT CHẤT LƯỢNG ĐẦU NĂM HỌC 2026-2027",n:"Đề Khảo sát chất lượng đầu năm học - Đề số 03",v:null,e:1},
      {c:"BỘ ĐỀ ÔN THI GIỮA HỌC KÌ 1 - LỚP 11",n:"[GK111.01] Đề thi trọng điểm Ôn thi Giữa học kì 1 lớp 11: Đề số 01",v:null,e:0},
      {c:"BỘ ĐỀ ÔN THI GIỮA HỌC KÌ 1 - LỚP 11",n:"Chữa Đề thi trọng điểm Ôn thi Giữa học kì 1 lớp 11: Đề số 01",v:"https://ngonngu.vncdn.vn/output/nganhang2025/858-LIVESTREAM2025-onthgiuahk1-lop11-deso1-quay-14-10.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"BỘ ĐỀ ÔN THI GIỮA HỌC KÌ 1 - LỚP 11",n:"[GK111.02] Đề thi trọng điểm Ôn thi Giữa học kì 1 lớp 11: Đề số 02",v:null,e:0},
      {c:"BỘ ĐỀ ÔN THI GIỮA HỌC KÌ 1 - LỚP 11",n:"[GK111.03] Đề thi trọng điểm Ôn thi Giữa học kì 1 lớp 11: Đề số 03",v:null,e:1},
      {c:"BỘ ĐỀ ÔN THI GIỮA HỌC KÌ 1 - LỚP 11",n:"[GK111.04] Đề thi trọng điểm Ôn thi Giữa học kì 1 lớp 11: Đề số 04",v:null,e:0},
      {c:"BỘ ĐỀ ÔN THI CUỐI HỌC KÌ 1 - LỚP 11",n:"[HK111.01] Đề thi trọng điểm Ôn thi Cuối học kì 1 lớp 11: Đề số 01",v:null,e:-1},
      {c:"BỘ ĐỀ ÔN THI CUỐI HỌC KÌ 1 - LỚP 11",n:"[HK111.02] Đề thi trọng điểm Ôn thi Cuối học kì 1 lớp 11: Đề số 02",v:null,e:0},
      {c:"BỘ ĐỀ ÔN THI CUỐI HỌC KÌ 1 - LỚP 11",n:"[HK111.03] Đề thi trọng điểm Ôn thi Cuối học kì 1 lớp 11: Đề số 03",v:null,e:0},
      {c:"BỘ ĐỀ ÔN THI GIỮA HỌC KỲ 2 LỚP 11",n:"[GK211.01] Đề thi trọng điểm ôn thi giữa học kì 2 lớp 11: Đề số 01",v:null,e:11},
      {c:"BỘ ĐỀ ÔN THI GIỮA HỌC KỲ 2 LỚP 11",n:"[GK211.02] Đề thi trọng điểm ôn thi giữa học kì 2 lớp 11: Đề số 02",v:null,e:0},
      {c:"BỘ ĐỀ ÔN THI GIỮA HỌC KỲ 2 LỚP 11",n:"[GK211.03] Đề thi trọng điểm ôn thi giữa học kì 2 lớp 11: Đề số 03",v:null,e:10},
      {c:"BỘ ĐỀ ÔN THI GIỮA HỌC KỲ 2 LỚP 10",n:"Đề thi trọng điểm ôn thi giữa học kì 2 lớp 10: Đề số 01 - Có phần Tự luận",v:null,e:6},
      {c:"BỘ ĐỀ ÔN THI CUỐI HỌC KỲ 2 LỚP 10",n:"Đề thi trọng điểm ôn thi cuối học kì 2 lớp 10: Đề số 01 - Có phần Tự luận",v:null,e:0},
      {c:"[CHỮA VIDEO] BỘ ĐỀ TRƯỜNG - SỞ MÙA THI 2025",n:"[VDTS2025.01] Đề thi thử THPT 2025: THCS&THPT Nguyễn Khuyến - Bình Dương",v:null,e:0},
      {c:"[CHỮA VIDEO] BỘ ĐỀ TRƯỜNG - SỞ MÙA THI 2025",n:"Chữa Đề thi thử THPT 2025: THCS&THPT Nguyễn Khuyến - Bình Dương",v:"https://ngonngu.vncdn.vn/output/plus12025/789-LIVESTREAM2025-THCS-THPT-NGUYENKHUYEN-BINHDUONG-quay12-3UPWEBfull/1/2/1119/manifest.m3u8",e:1},
      {c:"[CHỮA VIDEO] BỘ ĐỀ TRƯỜNG - SỞ MÙA THI 2025",n:"[VDTS2025.02] Đề thi thử THPT 2025: Sở giáo dục và đào tạo Hà Nội",v:null,e:11},
      {c:"[CHỮA VIDEO] BỘ ĐỀ TRƯỜNG - SỞ MÙA THI 2025",n:"Chữa Đề thi thử THPT 2025: Sở giáo dục và đào tạo Hà Nội",v:"https://ngonngu.vncdn.vn/output/nganhang2025/790-LIVESTREAM2025-cbckttn-thptqg-sogiaoducvadaotao-HANOI-quay22-3-UPWEB/1/2/1119/manifest.m3u8",e:0},
      {c:"[CHỮA VIDEO] BỘ ĐỀ TRƯỜNG - SỞ MÙA THI 2025",n:"Chữa Đề thi thử THPT 2025: THPT Chuyên Đại học Vinh - Nghệ An (Lần 2)",v:"https://ngonngu.vncdn.vn/output/nganhang2025/791-LIVESTREAM2025-cbckttn-thptqg-thptchuyendh-vinh-nghean-lan2-quay25-3upweb.mp4/1/2/1119/manifest.m3u8",e:1}
    ]
  },
  {
    name: "Plus 3: Luyện giải đề thi THPT 2027 (Mức độ 9+)",
    lessons: [
      {c:"ĐỀ THI CHÍNH THỨC - BỘ GD&ĐT",n:"Đề chính thức THPT 2026 môn Tiếng Anh - Mã 1101",v:null,e:1},
      {c:"ĐỀ THI CHÍNH THỨC - BỘ GD&ĐT",n:"Đề chính thức THPT 2026 môn Tiếng Anh - Mã 1116",v:null,e:1},
      {c:"ĐỀ THI CHÍNH THỨC - BỘ GD&ĐT",n:"Chữa đề chính thức THPT 2026 môn Tiếng Anh - Mã 1116",v:"https://ngonngu.vncdn.vn/output/luyende2025/970-WEB2026-PRO3M-luyengiaidemucdo8-chuadethichinhthuc-made1116--quay23-6.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"BỘ ĐỀ KHẢO SÁT CHẤT LƯỢNG ĐỊNH KÌ",n:"Đề Đánh giá kết quả Ôn thi tốt nghiệp THPT: Đề số 01",v:null,e:1},
      {c:"BỘ ĐỀ KHẢO SÁT CHẤT LƯỢNG ĐỊNH KÌ",n:"Chữa Đề Đánh giá kết quả Ôn thi tốt nghiệp THPT: Đề số 01",v:null,e:0},
      {c:"BỘ ĐỀ KHẢO SÁT CHẤT LƯỢNG ĐỊNH KÌ",n:"Khảo sát chất lượng định kì tháng 8/2026",v:"https://live2.ngoaingu24h.vn/live/smil:3166847b65c24514418b76719f54b68b269/playlist.m3u8",e:0},
      {c:"VIP PLUS 2027",n:"Đề VIP PLUS 2027 - Đề số 01",v:null,e:0},
      {c:"VIP PLUS 2027",n:"Đề VIP PLUS 2027 - Đề số 02",v:null,e:0},
      {c:"VIP PLUS 2027",n:"Đề VIP PLUS 2027 - Đề số 03",v:null,e:2},
      {c:"VIP PLUS 2027",n:"Đề VIP PLUS 2027 - Đề số 04",v:null,e:1},
      {c:"VIP PLUS 2027",n:"Đề VIP PLUS 2027 - Đề số 05",v:null,e:1},
      {c:"VIP PLUS 2027",n:"Đề VIP PLUS 2027 - Đề số 06",v:null,e:0},
      {c:"VIP PLUS 2027",n:"Đề VIP PLUS 2027 - Đề số 07",v:null,e:0},
      {c:"VIP PLUS 2027",n:"Đề VIP PLUS 2027 - Đề số 08",v:null,e:0}
    ]
  },
  {
    name: "Ngữ pháp Ứng dụng (2027)",
    lessons: [
      {c:"CHUYÊN ĐỀ 1: TỪ LOẠI",n:"Từ loại (Lý thuyết - Buổi 1)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/1-NPUD-2026-topic1-bai1-danhtu-quay13-6FIXED.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 1: TỪ LOẠI",n:"Từ loại (Lý thuyết - Buổi 2)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/2-NPUD-2026-topic1-bai2-tinhtu-quay13-6FIXED27-2/1/2/1119/manifest.m3u8",e:1},
      {c:"CHUYÊN ĐỀ 1: TỪ LOẠI",n:"Từ loại (Lý thuyết - Buổi 3)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/4-NPUD-2026-topic1-bai3-trangtu-quay24-6.mp4/1/2/1119/manifest.m3u8",e:1},
      {c:"CHUYÊN ĐỀ 2: MẠO TỪ & TỪ HẠN ĐỊNH",n:"Mạo từ và Từ hạn định (Lý thuyết)",v:null,e:5},
      {c:"CHUYÊN ĐỀ 3: LƯỢNG TỪ & TỪ CHỈ LƯỢNG",n:"Lượng từ, đại từ & từ chỉ lượng (Lý thuyết - Buổi 1)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/8-NPUD-2026-topic3-daitu-quay1-7.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 4: DANH ĐỘNG TỪ VÀ ĐỘNG TỪ NGUYÊN MẪU",n:"Danh động từ và Động từ nguyên mẫu (Lý thuyết - Buổi 1)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/13-NPUD-2026-topic1-bai8-danhdongtu-quay2-7.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 5: CẤP SO SÁNH",n:"Cấp so sánh (Lý thuyết)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/17-NPUD-2026-topic5-capsosanh-quay16-7fix.mp4/1/2/1119/manifest.m3u8",e:4},
      {c:"CHUYÊN ĐỀ 6: GIỚI TỪ VÀ CỤM GIỚI TỪ",n:"Giới từ và Cụm giới từ (Lý thuyết - Buổi 1)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/19-NPUD-2026-topic6-gioitu-lythuyet1-quay29-7.mp4/1/2/1119/manifest.m3u8",e:3},
      {c:"CHUYÊN ĐỀ 7: CỤM ĐỘNG TỪ",n:"Cụm động từ (Lý thuyết - Buổi 1)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/27-NPUD-2026-topic7-gioitu-lythuyet1-quay1-8.mp4/1/2/1119/manifest.m3u8",e:2},
      {c:"CHUYÊN ĐỀ 8: THÌ VÀ SỰ PHỐI THÌ",n:"Bài 1: Thì hiện tại tiếp diễn",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/801-WEB2025-NPCS-1-CD1-Thivasuphoithi-quay30-1-TUVUNG/1/2/1119/manifest.m3u8",e:3},
      {c:"CHUYÊN ĐỀ 8: THÌ VÀ SỰ PHỐI THÌ",n:"Bài 2: Thì hiện tại đơn",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/802-WEB2025-NPCS-2-bai2-thihientaidon-quay30-1TUVUNG/1/2/1119/manifest.m3u8",e:3},
      {c:"CHUYÊN ĐỀ 8: THÌ VÀ SỰ PHỐI THÌ",n:"Bài 4: Hiện tại hoàn thành",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/818-WEB2025-NPCS-4-bai4-thihientaihoanthanh-quay13-2/1/2/1119/manifest.m3u8",e:3},
      {c:"CHUYÊN ĐỀ 9: CÂU BỊ ĐỘNG",n:"Câu bị động (Lý thuyết)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/36-NPUD-2026-topic9-lythuyet-quay12-8/1/2/1119/manifest.m3u8",e:3},
      {c:"CHUYÊN ĐỀ 10: CÂU ĐIỀU KIỆN",n:"Câu điều kiện (Lý thuyết - Buổi 1)",v:"https://ngonngu.vncdn.vn/output/nguphapungdung/38--NPUD-2026-topic10-lythuyet-1-quay12-8/1/2/1119/manifest.m3u8",e:3}
    ]
  },
  {
    name: "Plus 2: Làm chủ kỹ năng & tư duy Đọc hiểu (2027)",
    lessons: [
      {c:"CHUYÊN ĐỀ 1: NÂNG CAO CHIẾN THUẬT ĐỌC HIỂU",n:"Phương pháp và Chiến lược phát triển kỹ năng Đọc hiểu",v:"https://ngonngu.vncdn.vn/output/plus12026/1041-WEB2026-PRO3M-plus2-chuyende1phuongphapchienluoc-phattrienkynangdochieu--quay30-7_1.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 1: NÂNG CAO CHIẾN THUẬT ĐỌC HIỂU",n:"Tư duy - Chiến thuật xử lý câu hỏi Quy chiếu",v:"https://live2.ngoaingu24h.vn/live/smil:3166847b65c24514418b76719f54b68b269/playlist.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 1: NÂNG CAO CHIẾN THUẬT ĐỌC HIỂU",n:"Tư duy - Chiến thuật xử lý câu hỏi Đồng nghĩa – Trái nghĩa",v:"https://live2.ngoaingu24h.vn/live/smil:3166847b65c24514418b76719f54b68b269/playlist.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 1: NÂNG CAO CHIẾN THUẬT ĐỌC HIỂU",n:"Tư duy - Chiến thuật xử lý câu hỏi Paraphrasing trong bài đọc",v:"https://live2.ngoaingu24h.vn/live/smil:3166847b65c24514418b76719f54b68b269/playlist.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 2: CHUYÊN SÂU ĐỌC HIỂU 8 CÂU",n:"Rèn luyện nâng cao kĩ năng xử lí bài Đọc hiểu 8 câu (Buổi 1)",v:"https://ngonngu.vncdn.vn/output/plus12026/975-WEB2026-PRO3M-plus1-cd3-renluyennangcaokinangxuli-dochieu8cau-buoi1-quay-25-6-full/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 2: CHUYÊN SÂU ĐỌC HIỂU 8 CÂU",n:"Rèn luyện nâng cao kĩ năng xử lí bài Đọc hiểu 8 câu (Buổi 2)",v:"https://ngonngu.vncdn.vn/output/plus12026/984-WEB2026-pro3m-plus1-chuyende3-nangcaokinangxuly-dochieu8cau-buoi2-quay1-7full/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 3: CHUYÊN SÂU ĐỌC HIỂU 10 CÂU",n:"Rèn luyện nâng cao kĩ năng xử lí bài Đọc hiểu 10 câu (Buổi 1)",v:null,e:1},
      {c:"CHUYÊN ĐỀ 5: CHUYÊN SÂU ĐỌC HIỂU - XU HƯỚNG ĐỀ MỚI",n:"Luyện tập chuyên sâu Đọc hiểu (Buổi 1)",v:"https://ngonngu.vncdn.vn/output/plus12026/591-WEB2025-PRO3MPLUS-nangcaokynangxulycauhoidochieu-baiso-1-quay-25-9.mp4/1/2/1119/manifest.m3u8",e:4},
      {c:"CHUYÊN ĐỀ 5: CHUYÊN SÂU ĐỌC HIỂU - XU HƯỚNG ĐỀ MỚI",n:"Luyện tập chuyên sâu Đọc hiểu (Buổi 2)",v:"https://ngonngu.vncdn.vn/output/plus12026/595-WEB2025-PRO3M-nangcaokynangxulycauhoidochieu-baiso2-quay26-9/1/2/1119/manifest.m3u8",e:4},
      {c:"CHUYÊN ĐỀ 6: ĐỌC HIỂU THEO CHỦ ĐỀ TRỌNG ĐIỂM",n:"Chủ đề: Family and the Generation Gap",v:"https://ngonngu.vncdn.vn/output/plus12026/845-web2025-plus1-nangcaokinangsulybaidochieu-chude-family-thegenerationgap-quay-8-3-full.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 6: ĐỌC HIỂU THEO CHỦ ĐỀ TRỌNG ĐIỂM",n:"Chủ đề: Education (Buổi 1)",v:"https://ngonngu.vncdn.vn/output/plus12026/864-WEB2025-pro3m-plus1-nangcaokinangxulybaidochieu-chude-education-buoi1-quay17-3full.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 6: ĐỌC HIỂU THEO CHỦ ĐỀ TRỌNG ĐIỂM",n:"Chủ đề: The Environment (Buổi 1)",v:"https://ngonngu.vncdn.vn/output/anhvan10-11-12/881-WEB2025-pro3m-plus1-nangcaokinangxulybaidochieutheochude-theenvironment-buoi1-quay28-3full.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 6: ĐỌC HIỂU THEO CHỦ ĐỀ TRỌNG ĐIỂM",n:"Chủ đề: Work",v:"https://ngonngu.vncdn.vn/output/plus12026/895-WEB2025-plus1-nangcaokinangxulybaidochieu-chudetrongdiem-work-quay17-4full.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 6: ĐỌC HIỂU THEO CHỦ ĐỀ TRỌNG ĐIỂM",n:"Chủ đề: Culture",v:"https://ngonngu.vncdn.vn/output/plus12026/916-WEB2025-pro3m-plus1-nangcaokinangxulybaidochieu-chude-culture-quay1-5full.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 6: ĐỌC HIỂU THEO CHỦ ĐỀ TRỌNG ĐIỂM",n:"Chủ đề: Social Issues",v:"https://ngonngu.vncdn.vn/output/plus12026/922-WEB2025-pro3m-nangcaokynangxulybaidochieu-chude-socialisssue--quay9-5full/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 6: ĐỌC HIỂU THEO CHỦ ĐỀ TRỌNG ĐIỂM",n:"Chủ đề: AI and Technology",v:"https://ngonngu.vncdn.vn/output/plus12026/928-WEB2025-pro3m-plus1-nangcaokinangdochieutheochude-aiandtechnology-quay16-5full.mp4/1/2/1119/manifest.m3u8",e:0}
    ]
  },
  {
    name: "Ôn luyện các dạng câu hỏi trong đề thi (2027)",
    lessons: [
      {c:"CHUYÊN ĐỀ 1: ĐỌC ĐIỀN THÔNG BÁO - QUẢNG CÁO",n:"Tổng quan về 12 câu hỏi Đọc điền thông báo - Quảng cáo",v:"https://ngonngu.vncdn.vn/output/luyende2025/953-WEB2026-chuyende1-tongquan12cauhoi-docdienthongbao-quangcao-trongdethi--quay15-6.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 1: ĐỌC ĐIỀN THÔNG BÁO - QUẢNG CÁO",n:"Làm chủ Ngữ pháp trọng tâm: Thì động từ – Verb Tenses",v:"https://ngonngu.vncdn.vn/output/luyende2025/955-WEB2026-pro3m-chuyende1-thidongtu-verbtenses--quay16-6full.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 1: ĐỌC ĐIỀN THÔNG BÁO - QUẢNG CÁO",n:"Nâng cấp vốn từ vựng theo ngữ cảnh (Buổi 1)",v:"https://ngonngu.vncdn.vn/output/ontapcoban2025/963-WEB2026-pro3m-chuyende3-nangcapvontuvungtheongucanh-buoi1-quay19-6/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 1: ĐỌC ĐIỀN THÔNG BÁO - QUẢNG CÁO",n:"Làm chủ Ngữ pháp trọng tâm: Sự phối hợp thì",v:"https://ngonngu.vncdn.vn/output/ontapcoban2025/969-WEB2026-PRO3M-chuyende1-lamchukienthucnguphap-supphoihopthi-thesequenceoftenses-quay22-6full.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 1: ĐỌC ĐIỀN THÔNG BÁO - QUẢNG CÁO",n:"Nâng cấp vốn từ vựng theo ngữ cảnh (Buổi 2)",v:"https://ngonngu.vncdn.vn/output/ontapcoban2025/977-WEB2026-PRO3M-chuyende1-nangcapvontuvungtheongucanh-buoi2--quay28-6.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 1: ĐỌC ĐIỀN THÔNG BÁO - QUẢNG CÁO",n:"Làm chủ Ngữ pháp trọng tâm: Câu bị động – Passive Voice",v:"https://ngonngu.vncdn.vn/output/ontapcoban2025/998--WEB2026-pro3m-chuyende1-kienthucnguphaptrongtam-caubidong-passivevoice-quay7-7full/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 2: SẮP XẾP ĐOẠN HỘI THOẠI - LÁ THƯ - ĐOẠN VĂN",n:"Chiến thuật và Mẹo làm dạng bài sắp xếp đoạn hội thoại",v:"https://live2.ngoaingu24h.vn/live/smil:3166847b65c24514418b76719f54b68b269/playlist.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 3: CHIẾN THUẬT XỬ LÍ CÂU HỎI ĐỌC HIỂU",n:"Chiến thuật xử gọn câu hỏi Quy chiếu",v:"https://ngonngu.vncdn.vn/output/ontapcoban2025/962-WEB2026-pro3m-chuyende3-chienthuatxugoncauhoiquychieu-quay18-6/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 3: CHIẾN THUẬT XỬ LÍ CÂU HỎI ĐỌC HIỂU",n:"Chiến thuật xử gọn Đồng nghĩa - Trái nghĩa",v:"https://ngonngu.vncdn.vn/output/ontapcoban2025/972-WEB2026-pro3m-chuyende3-chienthuatxugon-dongnghiatrainghia-quay23.1-6full.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 3: CHIẾN THUẬT XỬ LÍ CÂU HỎI ĐỌC HIỂU",n:"Chiến thuật xử gọn câu hỏi Thông tin chi tiết",v:"https://ngonngu.vncdn.vn/output/luyende2025/985-web2026-pro3m-plus1-chuyende3-chienthuatxugoncauhoithongtin-quay-3-7-full/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 3: CHIẾN THUẬT XỬ LÍ CÂU HỎI ĐỌC HIỂU",n:"Chiến thuật xử gọn câu hỏi Paraphrasing trong bài đọc",v:"https://ngonngu.vncdn.vn/output/ontapcoban2025/1005--WEB2026-pro3m-paraphrasing-quay10-7.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 3: CHIẾN THUẬT XỬ LÍ CÂU HỎI ĐỌC HIỂU",n:"Chiến thuật xử gọn câu hỏi Tóm tắt trong bài đọc",v:"https://ngonngu.vncdn.vn/output/ontapcoban2025/1042-web2026-pro3-m-chuyende3-chienthuatxulgoncauhoitomtattrongbaidoc-quay-31-7/1/2/1119/manifest.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 3: CHIẾN THUẬT XỬ LÍ CÂU HỎI ĐỌC HIỂU",n:"Chiến thuật xử gọn câu hỏi chèn câu vào đoạn (Best fit)",v:"https://live2.ngoaingu24h.vn/live/smil:3166847b65c24514418b76719f54b68b269/playlist.m3u8",e:0},
      {c:"CHUYÊN ĐỀ 4: LUYỆN TẬP ĐỌC HIỂU 8 CÂU HỎI",n:"Tinh hoa Đọc hiểu 8 câu hỏi (Buổi 1)",v:null,e:0},
      {c:"CHUYÊN ĐỀ 5: LUYỆN TẬP ĐỌC HIỂU 10 CÂU HỎI",n:"Tinh hoa Đọc hiểu 10 câu hỏi (Buổi 1)",v:null,e:0},
      {c:"CHUYÊN ĐỀ 6: ĐỌC ĐIỀN KHUYẾT THÔNG TIN",n:"Tổng quan và chiến thuật xử lý câu hỏi Đọc điền khuyết thông tin",v:null,e:0},
      {c:"CHUYÊN ĐỀ 6: ĐỌC ĐIỀN KHUYẾT THÔNG TIN",n:"Chiến thuật xử lý câu hỏi Ngữ pháp trong bài Đọc điền khuyết thông tin",v:null,e:0}
    ]
  },
  {
    name: "Anh văn 10-11-12 (Cơ bản & Mở rộng) (2027)",
    lessons: [
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 1: Life Stories we admire",v:"https://ngonngu.vncdn.vn/output/anhvan2025/1-AV12-unit1-quay20-3.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 2: A Multicultural World",v:"https://ngonngu.vncdn.vn/output/anhvan10ctmoi/2-AV12-unit2-quay16-4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 3: Green Living",v:"https://ngonngu.vncdn.vn/output/anhvan10ctmoi/3-AV12-unit3-quay16-4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 4: Urbanisation",v:"https://ngonngu.vncdn.vn/output/anhvan2025/4-AV12-unit4-quay29-4.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 5: The World of Work",v:"https://ngonngu.vncdn.vn/output/anhvan2025/5-AV12-unit5-quay13-5/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 6: Artificial intelligence",v:"https://ngonngu.vncdn.vn/output/anhvan2025/6-AV12-unit6-quay27-5.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 7: The World of mass media",v:"https://ngonngu.vncdn.vn/output/anhvan2025/7-AV12-unit7-quay9-6.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 8: Wildlife conservation",v:"https://ngonngu.vncdn.vn/output/anhvan2025/8-AV12-unit8-quay25-6/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 9: Career Paths",v:"https://ngonngu.vncdn.vn/output/anhvan2025/9-AV12-unit9-quay3-7.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 10: Lifelong learning",v:"https://ngonngu.vncdn.vn/output/anhvan2025/10-AV12-unit10-quay10-7/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - MỞ RỘNG",n:"Mở rộng Unit 1: Life Stories we admire (Buổi 1)",v:"https://ngonngu.vncdn.vn/output/anhvan10-11-12/844-web2025-pro3m-av12-morongkienthucsgk-unit1-lifestoriesweadmire-buoi-1-quay-8-3-full.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 12 - MỞ RỘNG",n:"Mở rộng Unit 2: A Multicultural World (Buổi 1)",v:"https://ngonngu.vncdn.vn/output/anhvan10-11-12/860-WEB2025-pro3m-AV12-morongkienthucsgk-unit2-AMulticulturalWorld-quay17-3fullupdate1.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 11 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 1: A long and healthy life",v:"https://ngonngu.vncdn.vn/output/anhvan2025/1-AV11-1GS-unit1-alongandhealthylife-quay26-7.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 11 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 2: The generation gap",v:"https://ngonngu.vncdn.vn/output/anhvan2025/2-AV11-1GS-unit2-THEGENERATIONGAP-quay27-7.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 11 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 5: Global warming",v:"https://ngonngu.vncdn.vn/output/anhvan2025/15-AV11-1GS-unit5-GLOBALWARMING-quay4-10.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 10 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 1: Family Life",v:"https://ngonngu.vncdn.vn/output/anhvan10ctmoi/AV10-WEB-2022-unit1-familylife-4p-1238-1638-20p-2328-3328-quay24-7.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 10 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 2: Humans and the Environment",v:"https://ngonngu.vncdn.vn/output/anhvan10ctmoi/AV10-WEB-2022-unit2-HUMANSANDTHEENVIRONMEN-20p-1155-3155-quay30-7.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"ANH VĂN 10 - SGK THỐNG NHẤT TOÀN QUỐC",n:"Unit 3: Music",v:"https://ngonngu.vncdn.vn/output/anhvan10ctmoi/AV10-WEB-2022-1-unit3-music-quay20-8.mp4/1/2/1119/manifest.m3u8",e:1},
      {c:"KĨ NĂNG NGHE",n:"Unit 1: Introduction to Listening Skills",v:"https://ngonngu.vncdn.vn/output/anhvan2025/reup1-LISTENINGCOURSE-Unit1IntroductiontoListeningSkills-quay8-11.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"KĨ NĂNG NGHE",n:"Unit 3: Practice - Sentence/Form Completion",v:"https://ngonngu.vncdn.vn/output/anhvan2025/3-LISTENINGCOURSE-Unit3-Practice-FormCompletion-quay8-11.mp4/1/2/1119/manifest.m3u8",e:0},
      {c:"KĨ NĂNG NGHE",n:"Unit 4: MCQ",v:"https://ngonngu.vncdn.vn/output/anhvan2025/4-LISTENINGCOURSE-Unit4-MCQ-quay15-11/1/2/1119/manifest.m3u8",e:0},
      {c:"KĨ NĂNG NGHE",n:"Unit 6: True False",v:"https://ngonngu.vncdn.vn/output/anhvan2025/6-LISTENINGCOURSE-Unit6_TrueFalse-quay15-11/1/2/1119/manifest.m3u8",e:0}
    ]
  }
];

/* Bổ sung: MEGA_SUBJECTS, SGK, THẦY CHÍ, CÔ SEN */
const MEGA_SUBJECTS = [
  {id:'toan_co_ban',name:'TOÁN CƠ BẢN',desc:'Toán · HSA · Chuyên đề 12',icon:'📐',color:'green',group:'hsa',lessons:[
    {name:'Khoảng cách từ điểm đến mp-Góc trong KG',date:'10/04',link:'https://www.youtube.com/watch?v=jEJu4H_cUSs',type:'video'},
    {name:'Khoảng cách giữa 2 ĐT chéo nhau',date:'24/04',link:'https://www.youtube.com/watch?v=LQQrSZvD5Os',type:'video'},
    {name:'Thể tích',date:'12/05',link:'https://www.youtube.com/watch?v=c9cIE6m6r3c',type:'video'},
    {name:'Tính đơn điệu của hàm số',date:'15/05',link:'https://www.youtube.com/watch?v=kagwiaGQ00I',type:'video'},
    {name:'Cực trị của hàm số',date:'19/05',link:'https://www.youtube.com/watch?v=Hv38t3-E6ME',type:'video'},
    {name:'GTLN-GTNN của hàm số',date:'22/05',link:'https://www.youtube.com/watch?v=hsAErSmUpUc',type:'video'},
    {name:'Khảo sát hàm phân thức',date:'03/06',link:'https://www.youtube.com/watch?v=WrugSPSW6t4',type:'video'},
    {name:'Tương giao của Đồ thị HS',date:'23/06',link:'https://www.youtube.com/watch?v=XiXOX9xnWzE',type:'video'},
    {name:'Hệ trục toạ độ trong không gian',date:'04/08',link:'https://www.youtube.com/watch?v=gHYXMiebGY8',type:'video'},
    {name:'Nguyên hàm và tính chất',date:'08/09',link:'https://www.youtube.com/watch?v=oIKRJeF95KQ',type:'video'}
  ]},
  {id:'toan_nang_cao',name:'TOÁN NÂNG CAO',desc:'Toán · HSA · Nâng cao',icon:'📈',color:'violet',group:'hsa',lessons:[
    {name:'Khoảng cách giữa 2 ĐT chéo nhau',date:'14/04',link:'https://www.youtube.com/watch?v=lkIdIf1aKSP4',type:'video'},
    {name:'Thể tích',date:'28/04',link:'https://www.youtube.com/watch?v=q5YufpNSBSw',type:'video'},
    {name:'Bài toán nước dâng',date:'07/05',link:'https://www.youtube.com/watch?v=s26weHYHNPA',type:'video'},
    {name:'Tính đơn điệu của hàm số',date:'12/05',link:'https://www.youtube.com/watch?v=5hRO3HyzU5A',type:'video'},
    {name:'Cực trị của hàm số',date:'14/05',link:'https://www.youtube.com/watch?v=99z_rvIgmko',type:'video'},
    {name:'Tích phân và tính chất',date:'10/09',link:'https://www.youtube.com/watch?v=aQva_PEDX0A',type:'video'}
  ]},
  {id:'toan_mat_goc',name:'TOÁN MẤT GỐC',desc:'Toán · Bổ trợ mất gốc',icon:'🧩',color:'amber',group:'hsa',lessons:[
    {name:'Đơn điệu',date:'06/08',link:'https://www.youtube.com/watch?v=2fdELuVqzEU',type:'video'},
    {name:'Song trục hàm ẩn',date:'19/08',link:'https://www.youtube.com/watch?v=iPsWb1IsG8M',type:'video'},
    {name:'Đơn điệu hàm số chứa tham số',date:'26/08',link:'https://www.youtube.com/watch?v=v7puLuDFLHI',type:'video'}
  ]},
  {id:'van_co_ban',name:'VĂN CƠ BẢN',desc:'Ngữ văn · HSA · Lớp 12',icon:'📖',color:'violet',group:'hsa',lessons:[
    {name:'Tổng quan chương trình',date:'12/04',link:'https://www.youtube.com/watch?v=Z-w9VSavfms',type:'video'},
    {name:'Khái quát về từ Tiếng Việt',date:'19/04',link:'https://www.youtube.com/watch?v=hB-g9ln_050',type:'video'},
    {name:'Khái quát tiến trình VHVN',date:'16/05',link:'https://www.youtube.com/watch?v=Y9DWFwIy8Ps',type:'video'},
    {name:'Chuyên đề đọc hiểu',date:'21/06',link:'https://www.youtube.com/watch?v=7iDv0pAjupQ',type:'video'},
    {name:'CHỮA ĐỀ THI THỬ THÁNG 7',date:'17/08',link:'https://www.youtube.com/watch?v=IpIFcC1ibjo',type:'video'}
  ]},
  {id:'tieng_anh',name:'TIẾNG ANH',desc:'Tiếng Anh · HSA · Lớp 12',icon:'🌐',color:'amber',group:'hsa',lessons:[
    {name:'Thì ĐT (Đơn, Tiếp Diễn)',date:'09/04',link:'https://www.youtube.com/watch?v=ctgcJ5Ig4w8',type:'video'},
    {name:'Vocab: Sports, Healthy',date:'15/04',link:'https://www.youtube.com/watch?v=UX8jskaVvoE',type:'video'},
    {name:'Thì Hoàn thành tiếp diễn',date:'03/06',link:'https://www.youtube.com/watch?v=2UU5p0hmBZQ',type:'video'},
    {name:'Câu bị động',date:'05/08',link:'https://www.youtube.com/watch?v=BnwCJvc8hlA',type:'video'},
    {name:'Reported speech',date:'26/08',link:'https://www.youtube.com/watch?v=3_vTGZy6vt4',type:'video'}
  ]},
  {id:'vat_ly',name:'VẬT LÝ',desc:'Vật lý · HSA · Lớp 12',icon:'⚛️',color:'green',group:'hsa',lessons:[
    {name:'Động học chất điểm',date:'02/07',link:'https://www.youtube.com/watch?v=ibliEnzO2WM',type:'video'},
    {name:'Rơi tự do',date:'06/08',link:'https://www.youtube.com/watch?v=TeDiQvXadzg',type:'video'},
    {name:'Động lực học chất điểm',date:'13/08',link:'https://www.youtube.com/watch?v=7WGeVkzR3Z0',type:'video'}
  ]},
  {id:'hoa_hoc',name:'HOÁ HỌC',desc:'Hoá học · HSA · Lớp 12',icon:'⚗️',color:'amber',group:'hsa',lessons:[
    {name:'Ester lipid',date:'04/07',link:'https://www.youtube.com/watch?v=m3x1-W1V2Hc',type:'video'},
    {name:'Carbohydrate',date:'25/07',link:'https://www.youtube.com/watch?v=BI2brc000g4',type:'video'},
    {name:'Amine',date:'07/08',link:'https://www.youtube.com/watch?v=Wtxl70xV-bY',type:'video'},
    {name:'Điện phân',date:'11/09',link:'https://www.youtube.com/watch?v=kC7IX2XB5ms',type:'video'}
  ]},
  {id:'sinh_hoc',name:'SINH HỌC',desc:'Sinh học · HSA · Lớp 12',icon:'🧬',color:'green',group:'hsa',lessons:[
    {name:'Ôn tập di truyền phân tử (P1)',date:'29/06',link:'https://www.youtube.com/watch?v=NE0uuL60kdA',type:'video'},
    {name:'Tổng ôn di truyền NST',date:'10/08',link:'https://www.youtube.com/watch?v=vjO-GnXttls',type:'video'},
    {name:'Tổng ôn quy luật di truyền',date:'24/08',link:'https://www.youtube.com/watch?v=2Nc-8IIx9HA',type:'video'}
  ]},
  {id:'lich_su',name:'LỊCH SỬ (HSA)',desc:'Lịch sử · HSA · Lớp 12',icon:'🏛️',color:'violet',group:'hsa',lessons:[
    {name:'Liên Hợp Quốc',date:'03/07',link:'https://www.youtube.com/watch?v=OWs24pIJsYI',type:'video'},
    {name:'Trật tự thế giới trong CT lạnh',date:'10/07',link:'https://www.youtube.com/watch?v=n_MQrIOIYDM',type:'video'},
    {name:'Sự ra đời của Asean',date:'08/08',link:'https://www.youtube.com/watch?v=G8l13tpwgMg',type:'video'},
    {name:'Cách mạng tháng 8',date:'26/08',link:'https://www.youtube.com/watch?v=dQB3swcF90I',type:'video'}
  ]},
  {id:'dia_ly',name:'ĐỊA LÝ',desc:'Địa lý · HSA · Lớp 12',icon:'🌏',color:'green',group:'hsa',lessons:[
    {name:'Vị trí địa lí và khí hậu',date:'30/06',link:'https://www.youtube.com/watch?v=-M2ZMjgmqHA',type:'video'},
    {name:'Đặc điểm thiên nhiên VN',date:'14/07',link:'https://www.youtube.com/watch?v=t9y4Agvul90',type:'video'},
    {name:'Dân số và lao động',date:'18/08',link:'https://www.youtube.com/watch?v=e-pp-h82NOQ',type:'video'}
  ]}
];

const SGK_SUBJECTS = [
  {id:'sgk_toan',name:'SGK TOÁN',desc:'Sách giáo khoa · Video',icon:'📐',color:'green',group:'sgk',lessons:[
    {name:'Bài 1: TÍNH ĐƠN ĐIỆU',date:'SGK',link:'https://www.youtube.com/watch?v=vqkvTdGX5c8',type:'video'},
    {name:'Bài 3: CỰC TRỊ CỦA HÀM SỐ',date:'SGK',link:'https://www.youtube.com/watch?v=Z_9UpGK991M',type:'video'},
    {name:'Bài 5: GTLN - GTNN',date:'SGK',link:'https://www.youtube.com/watch?v=qCKviOxmmeE',type:'video'},
    {name:'BÀI 1: PT MẶT PHẲNG P1',date:'SGK',link:'https://www.youtube.com/watch?v=_nnpTm2Ju2o',type:'video'}
  ]},
  {id:'sgk_su',name:'SGK LỊCH SỬ',desc:'Sách giáo khoa · Video',icon:'📜',color:'violet',group:'sgk',lessons:[
    {name:'Bài 1: LIÊN HỢP QUỐC',date:'SGK',link:'https://www.youtube.com/watch?v=mwwDY8qR8Mw',type:'video'},
    {name:'BÀI 4: SỰ RA ĐỜI ASEAN',date:'SGK',link:'https://www.youtube.com/watch?v=qwL-okw4NnQ',type:'video'},
    {name:'BÀI 6: CMT8 NĂM 1945',date:'SGK',link:'https://www.youtube.com/watch?v=zVIrrHq8sMc',type:'video'}
  ]}
];

const THAY_CHI = {
  id:'thay_chi',name:'TOÁN THẦY CHÍ 12',desc:'Toán · Thầy Nguyễn Quốc Chí',icon:'👨‍🏫',color:'red',group:'thaychi',
  lessons:[
    {name:'[TIẾT 1] Tìm khoảng ĐB, NB',date:'CH1',link:'https://drive.google.com/file/d/1chkipC3u4b6v34MqTdMO0ETJRtVLYx6b/view',type:'video'},
    {name:'[TIẾT 2] BT thực tế đơn điệu',date:'CH1',link:'https://drive.google.com/file/d/1fZ6pK6OGAO_WcKzRXz0JN7SPfWai1Di_/view',type:'video'},
    {name:'[TIẾT 1] Xác định cực trị',date:'CH1',link:'https://drive.google.com/file/d/1Bs3_-ENQbL5Nbei5Cyjkc5LXW5ZOsdZn/view',type:'video'},
    {name:'[TIẾT 1] NGUYÊN HÀM CƠ BẢN',date:'CH4',link:'https://youtu.be/a6A-sqViYDo',type:'video'},
    {name:'TÍNH TÍCH PHÂN',date:'CH4',link:'https://youtu.be/3kgqyFEFzkc',type:'video'},
    {name:'[TIẾT 1] XÁC SUẤT CÓ ĐIỀU KIỆN',date:'CH6',link:'https://youtu.be/_JPLqrLhuPw',type:'video'}
  ]
};

const CO_SEN = {
  id:'co_sen',name:'SỬ CÔ HƯƠNG SEN',desc:'Lịch sử · Cô Hương Sen',icon:'📜',color:'pink',group:'cosen',
  lessons:[
    {name:'Bài 1 Liên hợp quốc',date:'Bài 1',link:'https://youtu.be/-LoBn5WekkM',type:'video'},
    {name:'Đề số 1',date:'Đề 1',link:'https://youtu.be/iTv2dbhB6kc',type:'video'},
    {name:'Bài 3 Trật tự thế giới',date:'Bài 3',link:'https://youtu.be/BB74hjcOXHY',type:'video'},
    {name:'Bài 5 Cộng đồng ASEAN',date:'Bài 5',link:'https://youtu.be/vufhxU2oWb0',type:'video'},
    {name:'Bài 7: KC chống Pháp P1',date:'Bài 7',link:'https://youtu.be/TFhooXZJTro',type:'video'},
    {name:'Bài 9: 1975 - Nay',date:'Bài 9',link:'https://youtu.be/G46xH-XQcgY',type:'video'}
  ]
};
