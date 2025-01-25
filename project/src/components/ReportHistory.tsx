import React from 'react';
import { Clock, Image } from 'lucide-react';
import type { Report } from '../types';

interface ReportHistoryProps {
  reports: Report[];
  onSelectReport: (report: Report) => void;
}

export function ReportHistory({ reports, onSelectReport }: ReportHistoryProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <Clock className="h-6 w-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Analysis History</h2>
      </div>
      <div className="space-y-4">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => onSelectReport(report)}
            className="w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div className="flex items-center">
              <Image className="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p className="font-medium">Analysis #{report.id}</p>
                <p className="text-sm text-gray-500">{report.createdAt}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}