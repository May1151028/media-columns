// 網站基本設定：想改站名、說明、作者，只要改這裡
export const SITE_TITLE = '媒體專欄';
export const SITE_DESC = '已發表於各媒體的文章';
export const AUTHOR = '作者姓名';

// 依媒體名稱自動產生固定的代表色（新增媒體不用另外設定）
export function outletColor(name: string): string {
  let h = 0;
  for (const ch of name) h = (h * 31 + (ch.codePointAt(0) ?? 0)) % 360;
  return `hsl(${h} 45% 42%)`;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Taipei',
  });
}
