export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=555182576087&text=" +
  encodeURIComponent("Olá! Quero levar minha oratória para outro nível.");

export const openExternal = (url: string) => {
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) return;
  } catch {
    // ignore and fallback
  }
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      return;
    }
  } catch {
    // cross-origin top access blocked
  }
  window.location.href = url;
};

export const handleExternalClick =
  (url: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openExternal(url);
  };
