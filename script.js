/* ===== DATA ===== */
const WEEKS = [
  {
    id: 1,
    title: "Quản trị Tệp tin trên Windows",
    subtitle: "Làm quen tài nguyên hệ thống",
    desc: "Thiết lập cây thư mục làm việc khoa học. Thực hành các thao tác tạo, đổi tên, sao chép, di chuyển, và khôi phục tệp.",
    tasks: ["Tạo thư mục ThucHanh_NguyenVanAnh", "Quản lý tệp GhiChuQuanTrong.txt", "Sao chép, di chuyển và khôi phục tệp"],
    images: [],
    reports: [{ label: "📄 Bài tập Tuần 1", file: "VanAnh/Bai1.docx" }],
    bg1: "var(--m-warm)", bg2: "var(--m-light)", accent: "var(--m-olive-dk)",
    emoji: "📂",
  },
  {
    id: 2,
    title: "Đánh giá Tài liệu & CSDL",
    subtitle: "Khai thác dữ liệu học thuật",
    desc: "Đánh giá độ tin cậy của 4 nguồn tài liệu chuyên sâu theo 5 tiêu chí và so sánh hai kiến trúc cơ sở dữ liệu: SQL vs NoSQL.",
    tasks: ["Đánh giá tài liệu theo 5 tiêu chí", "So sánh MySQL và MongoDB", "Phân tích hiệu năng"],
    images: [],
    reports: [{ label: "📄 Bài tập Tuần 2", file: "VanAnh/bai2.pdf" }],
    bg1: "var(--m-cool)", bg2: "var(--m-light)", accent: "var(--m-cool-dk)",
    emoji: "🔍",
  },
  {
    id: 3,
    title: "Kỹ nghệ Prompt Engineering",
    subtitle: "Tối ưu hoá AI tạo sinh",
    desc: "Nghiên cứu quá trình thiết kế câu lệnh có cấu trúc nhằm tối ưu hóa chất lượng đầu ra của các mô hình ngôn ngữ lớn.",
    tasks: ["Áp dụng Role Prompting", "Sử dụng Chain-of-Thought", "Cải thiện độ chính xác đầu ra"],
    images: [],
    reports: [{ label: "📄 Bài tập Tuần 3", file: "VanAnh/bai3.pdf" }],
    bg1: "var(--m-olive)", bg2: "var(--m-warm)", accent: "var(--m-olive-dk)",
    emoji: "🤖",
  },
  {
    id: 4,
    title: "Hệ sinh thái Cộng tác Nhóm",
    subtitle: "Tối ưu năng suất làm việc",
    desc: "Đánh giá quá trình phối hợp và tối ưu hóa năng suất làm việc nhóm trực tuyến thông qua bộ công cụ số.",
    tasks: ["Sử dụng Trello quản lý dự án", "Soạn thảo đồng thời trên Google Docs", "Lưu trữ phân cấp trên Google Drive"],
    images: [],
    reports: [{ label: "📄 Bài tập Tuần 4", file: "VanAnh/bai4.pdf" }],
    bg1: "var(--m-warm)", bg2: "var(--m-cool)", accent: "var(--m-warm-dk)",
    emoji: "👥",
  },
  {
    id: 5,
    title: "AI Sáng tạo Infographic",
    subtitle: "Tích hợp đa công cụ AI",
    desc: "Tích hợp đa nền tảng AI để sản xuất một sản phẩm truyền thông hình ảnh thu hút, sinh động hướng tới người dùng.",
    tasks: ["Dùng Gemini lên ý tưởng", "Nano Banana 2 tạo icon 3D", "Canva AI thiết lập bố cục"],
    images: [],
    reports: [{ label: "📄 Bài tập Tuần 5", file: "VanAnh/bai5.pdf" }],
    bg1: "var(--m-light)", bg2: "var(--m-olive)", accent: "var(--m-base)",
    emoji: "🎨",
  },
  {
    id: 6,
    title: "Đạo đức & Trách nhiệm AI",
    subtitle: "Giới hạn & Sự an toàn",
    desc: "Nghiên cứu chính sách học thuật, thiết lập bộ nguyên tắc cá nhân đảm bảo liêm chính và không lệ thuộc công nghệ.",
    tasks: ["Phân tích chính sách các trường Đại học", "Thiết lập Bộ 7 Nguyên tắc", "Đảm bảo liêm chính học thuật"],
    images: [],
    reports: [{ label: "📄 Bài tập Tuần 6", file: "VanAnh/Bài 6.pdf" }],
    bg1: "var(--m-cool)", bg2: "var(--m-light)", accent: "var(--m-cool-dk)",
    emoji: "⚖️",
  }
];

const extraImages = { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[] };

/* ===== RENDER WEEKS ===== */
function renderWeeks() {
  const grid = document.getElementById('weeksGrid');
  grid.innerHTML = '';
  WEEKS.forEach((week, idx) => {
    const card = document.createElement('div');
    card.className = 'week-card reveal visible';
    card.id = `week-card-${week.id}`;
    card.style.setProperty('--week-bg1', week.bg1);
    card.style.setProperty('--week-bg2', week.bg2);
    card.style.setProperty('--week-accent', week.accent);
    
    const allImgs = [...week.images, ...extraImages[week.id]];
    const imgCount = allImgs.length;
    
    const stripHTML = imgCount > 0
      ? `<div class="gallery-strip" id="strip-${week.id}">
          ${allImgs.map((src, i) => `<img src="${src}" onclick="openLightbox(${idx}, ${i})" />`).join('')}
         </div>`
      : `<p class="no-images" id="no-img-${week.id}">📄 Chuyên đề này bao gồm báo cáo văn bản/PDF đính kèm</p>`;
      
    card.innerHTML = `
      <div class="week-header">
        <div class="week-number-badge"><span class="wn-label">Bài</span><span class="wn-num">${week.id}</span></div>
        <div class="week-header-text">
          <div class="week-title">${week.emoji} ${week.title}</div>
          <div class="week-subtitle">${week.subtitle}</div>
        </div>
      </div>
      <div class="week-body">
        <p class="week-desc">${week.desc}</p>
        <ul class="week-tasks">
          ${week.tasks.map(t => `<li><span class="dot"></span>${t}</li>`).join('')}
        </ul>
      </div>
      ${stripHTML}
      <div class="report-area">
        ${week.reports.map(r => `<a class="report-btn" href="${encodeURI(r.file)}" download><span class="rb-icon">⬇️</span>${r.label}</a>`).join('')}
      </div>
      <button class="add-photo-btn" onclick="document.getElementById('upload-${week.id}').click()">📷 Thêm ảnh</button>
      <input type="file" accept="image/*" multiple class="hidden-file-input" id="upload-${week.id}" onchange="handleUpload(event, ${week.id})" />
      <div class="week-footer">
        <span class="image-count" id="count-${week.id}">📷 ${imgCount > 0 ? imgCount + ' ảnh minh hoạ' : 'Chưa có ảnh'}</span>
        ${imgCount > 0 ? `<button class="view-btn" onclick="openLightbox(${idx}, 0)">Xem tất cả →</button>` : `<span id="viewbtn-${week.id}"></span>`}
      </div>
    `;
    grid.appendChild(card);
  });
}

function handleUpload(event, weekId) {
  const files = Array.from(event.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      extraImages[weekId].push(e.target.result);
      renderWeeks();
      setTimeout(initReveal, 50);
    };
    reader.readAsDataURL(file);
  });
}

/* ===== LIGHTBOX ===== */
let lbWeekIndex = 0;
let lbImgIndex  = 0;

function openLightbox(weekIdx, imgIdx) {
  lbWeekIndex = weekIdx;
  lbImgIndex  = imgIdx;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const week = WEEKS[lbWeekIndex];
  const imgs = [...week.images, ...extraImages[week.id]];
  if (!imgs.length) return;
  
  document.getElementById('lightbox-img').src = imgs[lbImgIndex];
  document.getElementById('lbWeekTitle').textContent = `✦ Bài ${week.id}: ${week.title}`;
  document.getElementById('lightbox-counter').textContent = `${lbImgIndex + 1} / ${imgs.length}`;
  
  document.getElementById('lbThumbs').innerHTML = imgs.map((s, i) => 
    `<img src="${s}" class="${i === lbImgIndex ? 'active' : ''}" onclick="jumpLb(${i})" />`
  ).join('');
}

function jumpLb(i) { lbImgIndex = i; renderLightbox(); }
function lbNext() {
  const len = [...WEEKS[lbWeekIndex].images, ...extraImages[WEEKS[lbWeekIndex].id]].length;
  lbImgIndex = (lbImgIndex + 1) % len; renderLightbox();
}
function lbPrev() {
  const len = [...WEEKS[lbWeekIndex].images, ...extraImages[WEEKS[lbWeekIndex].id]].length;
  lbImgIndex = (lbImgIndex - 1 + len) % len; renderLightbox();
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbNext').addEventListener('click', lbNext);
document.getElementById('lbPrev').addEventListener('click', lbPrev);

/* ===== SCROLL REVEAL ===== */
let observer;
function initReveal() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ===== LEAVES ===== */
function spawnPetals() {
  const container = document.getElementById('petalsContainer');
  const colors = ['#dcecd1', '#e8edcc', '#d2e8e3', '#d6dec3'];
  for (let i = 0; i < 20; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'petal';
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.background = colors[Math.floor(Math.random() * colors.length)];
    leaf.style.animationDuration = (8 + Math.random() * 10) + 's';
    leaf.style.animationDelay = (Math.random() * 10) + 's';
    leaf.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.7 + Math.random() * 0.6})`;
    container.appendChild(leaf);
  }
}

/* ===== SCROLL NAVIGATION HIGHLIGHT ===== */
window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderWeeks();
  setTimeout(initReveal, 100);
  spawnPetals();
});
