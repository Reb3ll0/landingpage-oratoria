/**
 * Abre um link externo SEMPRE em uma nova aba.
 * Nunca navega a página atual nem tenta acessar window.top
 * (evita erros de permissão cross-origin quando embutido em iframe).
 */
export const openExternal = (url: string) => {
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) {
      try {
        win.opener = null;
      } catch {
        // ignore
      }
      return true;
    }
  } catch {
    // ignore
  }
  // Se o navegador bloqueou o popup, não fazemos fallback que substitua
  // a página atual. Apenas avisamos no console para debug.
  console.warn("[openExternal] Popup bloqueado pelo navegador para:", url);
  return false;
};
