export const openExternal = (url: string) => {
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) {
      win.opener = null;
      return;
    }
  } catch {
    // fall through to fallback
  }
  try {
    if (window.top) {
      window.top.location.href = url;
      return;
    }
  } catch {
    // ignore
  }
  window.location.href = url;
};
