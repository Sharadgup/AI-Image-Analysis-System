import React from 'react';
import { BarChart, CheckCircle } from 'lucide-react';
import type { AnalysisResult } from '../types';

interface AnalysisResultsProps {
  results: AnalysisResult[];
}

export function AnalysisResults({ results }: AnalysisResultsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <BarChart className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Analysis Results</h2>
      </div>
      <div className="space-y-4">
        {results.map((result, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="font-medium">{result.label}</span>
            </div>
            <div className="flex items-center">
              <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${result.confidence * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">
                {(result.confidence * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}