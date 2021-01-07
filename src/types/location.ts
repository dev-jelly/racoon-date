export const anyang = "anyang" as const;
export const gasan = "gasan" as const;
export const hongdae = "hongdae" as const;
export const pyeongchon = "pyeongchon" as const;

export type DateLocation =
  | typeof anyang
  | typeof gasan
  | typeof hongdae
  | typeof pyeongchon;
