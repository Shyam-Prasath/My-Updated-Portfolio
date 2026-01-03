export function getImagePath(imagePath: string): string {
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (isProduction && basePath) {
    const cleanBasePath = basePath.startsWith("/")
      ? basePath.slice(1)
      : basePath;
    return `/${cleanBasePath}/${cleanPath}`;
  }
  return `/${cleanPath}`;
}

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}
