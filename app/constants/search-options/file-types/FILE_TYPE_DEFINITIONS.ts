type FileTypeDefinition = readonly [label: string, code: string];

export const FILE_TYPE_DEFINITIONS: readonly FileTypeDefinition[] = [
  ["Adobe Acrobat PDF", "pdf"],
  ["Adobe PostScript", "ps"],
  ["Autodesk DWF", "dwf"],
  ["Google Earth KML", "kml"],
  ["Google Earth KMZ", "kmz"],
  ["Microsoft Excel", "xls"],
  ["Microsoft PowerPoint", "ppt"],
  ["Microsoft Word", "doc"],
  ["Formato Rich Text", "rtf"],
  ["Shockwave Flash", "swf"],
] as const;

export type FileTypeDefinitionCodes = (typeof FILE_TYPE_DEFINITIONS)[number][1];
