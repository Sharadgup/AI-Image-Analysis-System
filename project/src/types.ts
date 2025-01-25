export interface AnalysisResult {
  confidence: number;
  label: string;
  timestamp: string;
}

export interface Report {
  id: string;
  imageUrl: string;
  results: AnalysisResult[];
  createdAt: string;
}