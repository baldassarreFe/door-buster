export interface LogoService {
  deleteLogo(link): Promise<any>;
  uploadLogo(file: File): Promise<any>;
}
