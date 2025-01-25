import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { ImageUpload } from './components/ImageUpload';
import { AnalysisResults } from './components/AnalysisResults';
import { ReportHistory } from './components/ReportHistory';
import type { Report, AnalysisResult } from './types';

// Mock data for demonstration
const mockResults: AnalysisResult[] = [
  { confidence: 0.98, label: "Object Detection", timestamp: "2024-03-14T10:00:00Z" },
  { confidence: 0.85, label: "Scene Classification", timestamp: "2024-03-14T10:00:01Z" },
  { confidence: 0.92, label: "Pattern Recognition", timestamp: "2024-03-14T10:00:02Z" }
];

const mockReports: Report[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    results: mockResults,
    createdAt: "2024-03-14 10:00 AM"
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1516962215378-7c557f3ceb51",
    results: mockResults,
    createdAt: "2024-03-14 09:30 AM"
  }
];

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [results, setResults] = useState<AnalysisResult[]>([]);
  const [reports] = useState<Report[]>(mockReports);

  const handleImageSelect = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    // Simulate analysis results
    setResults(mockResults);
  };

  const handleReportSelect = (report: Report) => {
    setSelectedImage(report.imageUrl);
    setResults(report.results);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">AI Image Analysis System</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ImageUpload onImageSelect={handleImageSelect} />
            
            {selectedImage && (
              <div className="bg-white rounded-lg shadow p-6">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}

            {results.length > 0 && <AnalysisResults results={results} />}
          </div>

          <div className="lg:col-span-1">
            <ReportHistory reports={reports} onSelectReport={handleReportSelect} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;