export interface DocumentService {
  deleteDoc(url);
  uploadDoc(file: File): Promise<any>;
}
