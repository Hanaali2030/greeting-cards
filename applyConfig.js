// applyConfig.js

window.addEventListener("DOMContentLoaded", () => {
  if (typeof config !== "object") return;

  // 1) تغيير عنوان الصفحة (title)
  document.title = config.pageTitle || document.title;

  // 2) تغيير لون الخلفية
  document.body.style.backgroundColor = config.backgroundColor || "#f9f9f9";

  // 3) تغيير لون الأزرار
  const style = document.createElement("style");
  style.innerHTML = `.button, button, a.button { background-color: ${config.buttonColor || "#006699"} !important; }`;
  document.head.appendChild(style);

  // 4) الشعار
  const logoContainer = document.getElementById("logo");
  if (logoContainer) {
    if (config.logoType === "image") {
      logoContainer.innerHTML = `<img src="images/logo.png" style="height:${config.logoImageHeight}px;">`;
    } else {
      logoContainer.innerHTML = `<div style="font-family: ${config.logoTextFont}; font-size: ${config.logoTextSize}px; color: ${config.logoTextColor};">${config.logoText}</div>`;
    }
  }
  
  // 5) نص المناسبة
  const occasionEl = document.getElementById("occasion");
  if (occasionEl) {
    occasionEl.innerText = `اختر بطاقتك لـ ${config.occasionText}`;
  }

  // 6) الحقوق
  const footerEl = document.getElementById("footerText");
  if (footerEl) {
    footerEl.innerHTML = `© ${config.footerYear} جميع الحقوق محفوظة لـ ${config.footerEntityName} - <strong>تطوير: أبو تميم</strong>`;
  }

  // 7) عداد الزوار (حسب الصفحة)
  const counterEl = document.getElementById("visitorBadge");
  if (counterEl && config.enableVisitorBadge) {
    const pageName = window.location.pathname.split("/").pop().replace(".html", "");
    const badgeUrl = `https://visitor-badge.laobi.icu/badge?page_id=${config.visitorBadgeBase}.${pageName}`;
    counterEl.innerHTML = `<img src="${badgeUrl}" alt="زيارات الصفحة">`;
  }
});

