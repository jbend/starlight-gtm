// Store GTM ID for component access
let gtmId: string | undefined;

export function setGTMId(id: string): void {
  gtmId = id;
}

export function getGTMId(): string | undefined {
  return gtmId;
}
