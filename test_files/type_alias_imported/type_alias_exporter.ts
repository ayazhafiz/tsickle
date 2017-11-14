export class X { private x: string; }
export class Y { private x: string; }
// Export a type alias that references types from this file that, in turn, are
// not imported at the use site in type_alias_imported. This is a regression
// test for a bug where tsickle would accidentally inline the union type "X|Y"
// instead of emitting the alias "XY" at the use site.
export type XY = X|Y;
