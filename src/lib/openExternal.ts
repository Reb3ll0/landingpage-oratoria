export const openExternal = (url: string) => {
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) {
      win.opener = null;
      return;
    }
  } catch {
    // ignore and fallback
  }
  // Fallback: escape iframe to top window
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
