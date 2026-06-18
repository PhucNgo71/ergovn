// Site-wide configuration: design tokens, the single Haravan storefront link,
// and bilingual copy strings used across components.

export const TOKENS = {
  ivory: "#F5F1EA",
  paper: "#FAF8F4",
  charcoal: "#1C1A17",
  stone: "#DDD6C9",
  bronze: "#8A7D68",
  t2: "#5C564B",
  t3: "#9C9587",
};

// The ONLY checkout destination on this entire site.
export const HARAVAN_STORE = "https://www.tfw.space";

export function shopLink(cmp = "homepage") {
  return `${HARAVAN_STORE}?utm_source=ergovn_site&utm_medium=referral&utm_campaign=${cmp}`;
}

export const COPY = {
  vi: {
    topbar: "ERGOVN — NHÀ PHÂN PHỐI & XƯỞNG DỰ ÁN",
    tagline: "always be better",
    nav: { makers: "Thương hiệu", projects: "Dự án", contact: "Liên hệ", shop: "Cửa hàng" },
    heroEyebrow: "Nhà phân phối & xưởng thiết kế — Việt Nam",
    heroTitle1: "Chúng tôi tư vấn, tìm nguồn và",
    heroTitleEm: "kiến tạo không gian làm việc.",
    heroBody:
      "Ergovn hợp tác trực tiếp với kiến trúc sư, nhà thiết kế và đội ngũ vận hành trong việc lựa chọn nội thất cho văn phòng, không gian lưu trú và các dự án tổ chức — dựa trên tám thương hiệu thiết kế từ bốn châu lục.",
    ctaStart: "Bắt đầu dự án →",
    ctaShop: "Xem cửa hàng bán lẻ ↗",
    makersEyebrow: "Thương hiệu chúng tôi là đại lý / hợp tác — 8",
    makersBody: "Mỗi thẻ dẫn đến trang chính thức của nhà sản xuất để xem đầy đủ thông số.",
    projectsEyebrow: "Dự án tiêu biểu",
    contactEyebrow: "Bắt đầu một dự án",
    contactTitle1: "Cho chúng tôi biết",
    contactTitleEm: "bạn đang xây dựng điều gì.",
    contactBody:
      "Dành cho tư vấn kỹ thuật, mua sắm số lượng lớn, hoặc dự án — không phải đơn lẻ. Muốn mua một sản phẩm đơn?",
    contactShopLink: "Truy cập cửa hàng ↗",
    fields: { name: "TÊN", company: "CÔNG TY", type: "LOẠI DỰ ÁN", email: "EMAIL" },
    send: "GỬI YÊU CẦU →",
    closingLink: "www.tfw.space — mua sắm toàn bộ danh mục tại The First Workshop",
    footerEmail: "projects@ergovn.com",
  },
  en: {
    topbar: "ERGOVN — DISTRIBUTOR & PROJECT STUDIO",
    tagline: "always be better",
    nav: { makers: "Makers", projects: "Projects", contact: "Contact", shop: "Shop" },
    heroEyebrow: "Distributor & design studio — Vietnam",
    heroTitle1: "We specify, source, and deliver",
    heroTitleEm: "considered workplaces.",
    heroBody:
      "Ergovn works directly with architects, designers, and operations teams on furniture specification for offices, hospitality, and institutional projects — drawing on eight design houses across four continents.",
    ctaStart: "Start a project →",
    ctaShop: "Browse retail catalogue ↗",
    makersEyebrow: "Houses we are dealer / collaborate with — 8",
    makersBody: "Each plate opens to the maker's own site for full specification.",
    projectsEyebrow: "Selected projects",
    contactEyebrow: "Start a project",
    contactTitle1: "Tell us what",
    contactTitleEm: "you're building.",
    contactBody:
      "For specification, bulk procurement, or project consultation — not retail orders. Looking to buy a single piece?",
    contactShopLink: "Visit the shop ↗",
    fields: { name: "NAME", company: "COMPANY", type: "PROJECT TYPE", email: "EMAIL" },
    send: "SEND INQUIRY →",
    closingLink: "www.tfw.space — shop the full catalogue at The First Workshop",
    footerEmail: "projects@ergovn.com",
  },
};
