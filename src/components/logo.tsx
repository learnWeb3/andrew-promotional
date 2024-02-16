import { LogoImage } from "./logo-image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-8 xl:h-12"><LogoImage /></span>
      <h2 className="text-4xl xl:text-6xl font-bold">Andrew &copy;</h2>
    </div>
  );
}
